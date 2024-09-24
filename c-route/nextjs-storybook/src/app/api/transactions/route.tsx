/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import fsPromises from "fs/promises";

export async function GET(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const trans = await fsPromises.readFile(
      "src/app/@core/mocks/transactions.json",
      "utf-8"
    );
    const json = JSON.parse(trans);
    return NextResponse.json(json);
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "No transactions found!" }),
      { status: 404, headers: { "content-type": "application/json" } }
    );
  }
}

export async function POST(req: Request, res: NextApiResponse<Response>) {
  const body: any = await req.json();
  try {
    const trans = await fsPromises.readFile(
      "src/app/@core/mocks/transactions.json",
      "utf-8"
    );
    const json = JSON.parse(trans);
    const newTransaction = {
      id: json.length + 1,
      ...body,
    };
    json.push(newTransaction);
    return NextResponse.json({
      res: await fsPromises.writeFile(
        "src/app/@core/mocks/transactions.json",
        JSON.stringify(json),
        "utf8"
      ),
    });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "No transactions found!" }),
      { status: 404, headers: { "content-type": "application/json" } }
    );
  }
}
