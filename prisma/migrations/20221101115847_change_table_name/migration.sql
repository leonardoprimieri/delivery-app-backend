/*
  Warnings:

  - You are about to drop the `create_client_token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "create_client_token" DROP CONSTRAINT "create_client_token_id_client_fkey";

-- DropTable
DROP TABLE "create_client_token";

-- CreateTable
CREATE TABLE "create_client_tokens" (
    "id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_client" TEXT NOT NULL,

    CONSTRAINT "create_client_tokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "create_client_tokens" ADD CONSTRAINT "create_client_tokens_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
