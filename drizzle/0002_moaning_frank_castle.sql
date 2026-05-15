CREATE TABLE `emails` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`userId` int NOT NULL,
	`recipientEmail` varchar(320) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`emailType` enum('prospection','relance','confirmation','custom') NOT NULL,
	`htmlContent` longtext NOT NULL,
	`sentAt` timestamp NOT NULL DEFAULT (now()),
	`status` enum('envoyé','programmé','erreur') NOT NULL DEFAULT 'envoyé',
	`scheduledFor` timestamp,
	`openedAt` timestamp,
	`clickedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `emails_id` PRIMARY KEY(`id`)
);
