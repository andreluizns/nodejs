ALTER TABLE "courses" RENAME COLUMN "name" TO "title";--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "description" DROP NOT NULL;