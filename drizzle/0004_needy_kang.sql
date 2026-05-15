CREATE TABLE `appointments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`userId` int NOT NULL,
	`assignedToUserId` int,
	`scheduledDate` timestamp NOT NULL,
	`duration` int NOT NULL DEFAULT 30,
	`notes` longtext,
	`status` enum('planifié','confirmé','complété','annulé') NOT NULL DEFAULT 'planifié',
	`location` varchar(255),
	`reminderSent` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `appointments_id` PRIMARY KEY(`id`)
);
