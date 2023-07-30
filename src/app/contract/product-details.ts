export interface ProductDetails {
    id:number
    name:string
    cover:string
    rating:number
    reviews:[{
        author:string,
        published_on:string,
        review:string,
        rating:number
    }
    ]
}
