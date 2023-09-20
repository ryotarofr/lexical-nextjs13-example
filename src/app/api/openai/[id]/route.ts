import { NextResponse } from "next/server";


import prismadb from "@/app/libs/prismadb";
import { auth } from "@clerk/nextjs";
import { checkSubscription } from "@/app/libs/subscription";

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const { userId } = auth();
    const id: number = parseInt(req.url.split("/openai/")[1]);
    const { emotion } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const isPro = await checkSubscription();
    if (!isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    const putEmotion = await prismadb.naisei.update({
      data: { emotion },
      where: {
        id,
      },
    });

    return NextResponse.json({ message: "Success", putEmotion }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};
