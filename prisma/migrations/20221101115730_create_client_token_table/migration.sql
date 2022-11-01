-- CreateTable
CREATE TABLE "create_client_token" (
    "id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_client" TEXT NOT NULL,

    CONSTRAINT "create_client_token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "create_client_token" ADD CONSTRAINT "create_client_token_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
