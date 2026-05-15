import { db } from './db.ts';
import fs from 'fs';
import path from 'path';

async function seedProspects() {
  try {
    console.log('🌱 Démarrage du seed des prospects...');
    
    // Lire le fichier SQL
    const sqlFile = path.join(process.cwd(), 'insert_massive_prospects.sql');
    const sql = fs.readFileSync(sqlFile, 'utf-8');
    
    // Extraire les requêtes INSERT
    const inserts = sql
      .split('\n')
      .filter(line => line.trim().startsWith('INSERT INTO'))
      .map(line => line.trim());
    
    console.log(`📊 ${inserts.length} requêtes INSERT trouvées`);
    
    // Insérer les prospects
    let count = 0;
    for (const insert of inserts) {
      try {
        // Exécuter la requête INSERT
        await db.execute(insert);
        count++;
        if (count % 50 === 0) {
          console.log(`✅ ${count}/${inserts.length} prospects insérés`);
        }
      } catch (error) {
        console.error(`❌ Erreur lors de l'insertion: ${error.message}`);
      }
    }
    
    console.log(`\n🎉 ${count} prospects insérés avec succès !`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur:', error);
    process.exit(1);
  }
}

seedProspects();
