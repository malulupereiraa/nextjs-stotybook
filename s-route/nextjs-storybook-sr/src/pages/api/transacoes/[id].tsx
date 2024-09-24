/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server"
import type { NextApiRequest, NextApiResponse } from 'next'
import fsPromises from 'fs/promises'


export default async function transactionsById(req: NextApiRequest,
    res: NextApiResponse<Response>) {
    console.log(req.method)
    console.log(req.body)
    console.log(req?.query?.id)
    const idTransaction: any = req?.query?.id;
    const body: any = req?.body;
    if (req.method === 'GET') {
        try {
            const trans = await fsPromises.readFile("src/@core/mocks/teste.txt", 'utf-8')
            console.log(trans)
            const json = JSON.parse(trans)
            const resultSearch = json.find((t: any) => t.id === parseInt(idTransaction))
            console.log(resultSearch)
     
            return res.status(200).json(resultSearch);
        } catch {
            return new NextResponse(JSON.stringify({ message: "No transaction found!" }),
                { status: 404, headers: { 'content-type': 'application/json' } });
        }
      } else {
        // PUT method
        try {
            const trans = await fsPromises.readFile("src/@core/mocks/teste.txt", 'utf-8')
            const json = JSON.parse(trans)
            const index = json.findIndex((t: any) => t.id === parseInt(idTransaction));
            json[index] = { id: parseInt(idTransaction), ...body };
            await fsPromises.writeFile("src/@core/mocks/teste.txt", JSON.stringify(json), 'utf8');
            const respPut =  new NextResponse(JSON.stringify({ message: "ATUALIZADO" }),
                { status: 200, headers: { 'content-type': 'application/json' } });
     
            return res.status(200).send(respPut);
        } catch {
            return new NextResponse(JSON.stringify({ message: "No transaction Updated!" }),
                { status: 404, headers: { 'content-type': 'application/json' } });
        }
    }
}
