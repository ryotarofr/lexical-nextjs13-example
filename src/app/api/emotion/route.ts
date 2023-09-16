import { NextResponse } from "next/server";
// import prisma from "../../../../prisma";
// import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import prismadb from "@/app/libs/prismadb";


export const GET = async (req: Request, res: NextResponse) => {
  try {
    const { userId }: any = auth();
    const getEmotions = await prismadb.emotion.findMany({
      where: {
        userId: userId
      }
    });
    return NextResponse.json({ message: "Success", getEmotions }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { userId } = auth();

    const { items } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const createEmotion = await prismadb.emotion.create({ data: { items, userId } });
    return NextResponse.json({ message: "Success", createEmotion }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};