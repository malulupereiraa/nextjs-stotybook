/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server"
import type { NextApiRequest, NextApiResponse } from 'next'
import fsPromises from 'fs/promises'


export default async function transactionsGet(req: NextApiRequest,
    res: NextApiResponse<Response>) {
    console.log(req.method)
    const body: any = req?.body;
    if (req.method === "GET") {
        try {
            const trans = await fsPromises.readFile("src/@core/mocks/teste.txt", 'utf-8')
            const json = JSON.parse(trans)
     
            return res.status(200).json(json);
        } catch {
            return new NextResponse(JSON.stringify({ message: "No transactions found!" }),
                { status: 404, headers: { 'content-type': 'application/json' } });
        }
    } else {
        try {
            const trans = await fsPromises.readFile("src/@core/mocks/teste.txt", 'utf-8')
            const json = JSON.parse(trans)
            const newTransaction = {
              id: json.length + 1,
              ...body,
            };
            json.push(newTransaction);
            await fsPromises.writeFile("src/@core/mocks/teste.txt", JSON.stringify(json), 'utf8');
            const respPut =  new NextResponse(JSON.stringify({ message: "CRIADO" }),
                { status: 200, headers: { 'content-type': 'application/json' } });
     
            return res.status(200).send(respPut);
            // return Promise.resolve(newTransaction);
     
            return res.status(200).json(json);
        } catch {
            return new NextResponse(JSON.stringify({ message: "No transactions found!" }),
                { status: 404, headers: { 'content-type': 'application/json' } });
        }

    }
}
