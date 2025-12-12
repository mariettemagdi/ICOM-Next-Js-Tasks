export interface Property{
    id:number;
    image:string;
    price:string;
    title:string;
    description:string;
    location:string;
    sqft:number;
    rooms:number;
    baths:number;
    featured?:boolean;
}


export type ContactType='phone' | 'whatsapp' | 'favorite';