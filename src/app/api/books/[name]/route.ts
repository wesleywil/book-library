import { Book } from "@/utils/interfaces";
import { NextResponse } from "next/server";

export async function GET(request:Request, {params}:{params:{name:string}}){
    try{
        const req = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.name}`,{
            cache:"default"
        });
        const responseData:any = await req.json();
       
       const books:Book[] = responseData.items.map((book:any)=>({
        id: book.id,
        etag: book.etag,
        selfLink: book.selfLink,
        volumeInfo: {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          publishedDate: book.volumeInfo.publishedDate,
          description: book.volumeInfo.description,
          industryIdentifiers: book.volumeInfo.industryIdentifiers,
          pageCount: book.volumeInfo.pageCount,
          categories: book.volumeInfo.categories,
          imageLinks: book.volumeInfo.imageLinks
        }
       }));
   return NextResponse.json(books)
    }catch(error){
        return NextResponse.json({
            error: `An error occurred while trying to update the expense - ${error}`,
        }, {status:500})
    }
}