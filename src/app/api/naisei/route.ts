import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import prismadb from "@/app/libs/prismadb";


// const prisma = new PrismaClient();

export async function main() {
  try {
    await prismadb.$connect();
  } catch (err) {
    return Error("DB接続に失敗しました");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const { userId } = auth();
    const allNaisei = await prismadb.naisei.findMany({
      where: {
        userId: userId
      }
    });
    return NextResponse.json({ message: "Success", allNaisei }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};


export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { userId } = auth();

    const { naisei, evaluation_type } = await req.json();
    await main();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const createNaisei = await prismadb.naisei.create({ data: { naisei, evaluation_type, userId } });
    return NextResponse.json({ message: "Success", createNaisei }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};
