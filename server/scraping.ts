import { spawn } from 'child_process';
import path from 'path';
import { getDb } from './db';
import { prospectsPotentiels } from '../drizzle/schema';

const SCRAPER_PATH = path.join(__dirname, 'scraper.py');

export async function runFullScraping(city?: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    console.log(`[scraping] Démarrage scraper Python${city ? ` (${city})` : ''}...`);

    const args = ['scraper.py'];
    if (city) args.push(city);

    const proc = spawn('python', args, {
      cwd: path.dirname(SCRAPER_PATH),
      timeout: 300_000, // 5 min max
    });

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (chunk) => { stdout += chunk.toString(); });
    proc.stderr.on('data', (chunk) => {
      const line = chunk.toString();
      stderr += line;
      process.stdout.write(line); // relayer les logs du scraper en temps réel
    });

    proc.on('close', async (code) => {
      if (code !== 0) {
        console.error(`[scraping] Scraper terminé avec code ${code}`);
        console.error(stderr);
        return reject(new Error(`Scraper failed (code ${code}): ${stderr.slice(-500)}`));
      }

      let results: any[];
      try {
        results = JSON.parse(stdout);
      } catch {
        return reject(new Error('JSON invalide retourné par le scraper'));
      }

      if (!results.length) {
        console.log('[scraping] Aucun résultat trouvé');
        return resolve([]);
      }

      console.log(`[scraping] ${results.length} prospects reçus, insertion en base...`);

      try {
        const db = await getDb();
        if (!db) throw new Error('Database unavailable');
        await db.insert(prospectsPotentiels).values(results);
        console.log(`[scraping] ✓ ${results.length} insérés`);
      } catch (err) {
        console.error('[scraping] Erreur insertion:', err);
        return reject(err);
      }

      resolve(results);
    });

    proc.on('error', (err) => {
      reject(new Error(`Impossible de lancer python: ${err.message}`));
    });
  });
}
