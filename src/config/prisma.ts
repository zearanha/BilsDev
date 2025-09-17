import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const prismaConnect = async () => {
    try {
        await prisma.$connect();
        console.log("DB connected");
    }
    catch (error) {
        console.error("DB connection error:", error);
    }
}


export default prisma;