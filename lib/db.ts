import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();
// به دلیل هات ریلود این متغیر رو در گلوبال قرار میدهیم چون هات ریلود روی گلوبال ها اثر ندارد و برنامه به هم نمی ریزد 
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
