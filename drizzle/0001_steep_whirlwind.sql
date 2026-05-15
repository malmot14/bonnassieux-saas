CREATE TABLE `diagnostics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`website` varchar(500) NOT NULL,
	`seoScore` int,
	`mobileScore` int,
	`socialMediaScore` int,
	`speedScore` int,
	`diagnosis` longtext,
	`recommendations` longtext,
	`generatedPitch` longtext,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `diagnostics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `interactions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`userId` int NOT NULL,
	`type` enum('appel','visite','email','message','autre') NOT NULL,
	`notes` longtext,
	`outcome` enum('positif','neutre','négatif'),
	`nextAction` varchar(255),
	`nextActionDate` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `interactions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`sector` enum('artisans','restaurants','sport/bien-être','BTP','autre') NOT NULL,
	`address` text,
	`phone` varchar(20),
	`email` varchar(320),
	`website` varchar(500),
	`status` enum('À visiter','En cours','Signé','Perdu') NOT NULL DEFAULT 'À visiter',
	`priority` enum('haute','moyenne','basse') NOT NULL DEFAULT 'moyenne',
	`problemDescription` longtext,
	`salesPitch` longtext,
	`leadType` enum('CM','Coaching Mental') NOT NULL DEFAULT 'CM',
	`region` varchar(100),
	`latitude` decimal(10,8),
	`longitude` decimal(11,8),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `salesScripts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`sector` enum('artisans','restaurants','sport/bien-être','BTP') NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` longtext NOT NULL,
	`isDefault` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `salesScripts_id` PRIMARY KEY(`id`)
);
