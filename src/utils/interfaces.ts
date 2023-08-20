export interface Book{
    id:string,
    etag:string,
    selfLink:string,
    volumeInfo:{
        title:string,
        authors:string[],
        publishedDate:string,
        description:string,
        industryIdentifiers:[{type:string, identifier:string},{type:string, identifier:string}],
        pageCount:number,
        categories:string[],
    }
}