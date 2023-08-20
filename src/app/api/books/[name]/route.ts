import { Book } from "@/utils/interfaces";
import { NextResponse } from "next/server";

export async function GET(request:Request, {params}:{params:{name:string}}){
    try{
        const req = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.name}`,{
            cache:"default"
        });
        const books:Book[] = await req.json();
        return NextResponse.json({
            books:books
        })
    }catch(error){
        return NextResponse.json({
            error: `An error occurred while trying to update the expense - ${error}`,
        }, {status:500})
    }
}