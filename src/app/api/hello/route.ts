import { NextResponse } from "next/server";

export async function GET(request:Request,response:NextResponse) {
    return new NextResponse("hello next js")
}

  