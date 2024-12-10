-- CreateTable
CREATE TABLE "Collections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Requests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "headers" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "body" TEXT NOT NULL
);
