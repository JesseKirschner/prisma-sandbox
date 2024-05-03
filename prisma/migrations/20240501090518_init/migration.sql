-- CreateTable
CREATE TABLE `Datetime` (
    `id` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `time` TIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
