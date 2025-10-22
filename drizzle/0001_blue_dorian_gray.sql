CREATE TABLE `contactSubmissions` (
	`id` varchar(64) NOT NULL,
	`companyName` varchar(255) NOT NULL,
	`contactName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`businessType` varchar(100),
	`currentProducts` text,
	`estimatedVolume` varchar(100),
	`state` varchar(50),
	`inquiryType` enum('wholesale','white_label','general') NOT NULL,
	`message` text,
	`status` enum('new','contacted','qualified','closed') NOT NULL DEFAULT 'new',
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `contactSubmissions_id` PRIMARY KEY(`id`)
);
