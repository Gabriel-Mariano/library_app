interface IBooksProps {
    id:string;
    title:string;
    description:string;
    authors:any[];
    page:number;
    pageCount:number;
    totalItems:number;
    published:number;
    publisher:string;
    imageUrl:string;
}

export { IBooksProps }