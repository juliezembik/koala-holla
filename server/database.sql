CREATE TABLE "inventory" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "age" INTEGER,
    "ready_to_transfer" VARCHAR(1) NOT NULL,
    "notes" VARCHAR(80)
);