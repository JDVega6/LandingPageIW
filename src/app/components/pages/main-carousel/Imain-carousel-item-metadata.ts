export interface IMainCarouselItem{
    id:number;
    title?: {
        first: string;
        second: string;
    };
    subtitle?:string;
    link?:string;
    image?:string;
    order?:number;
    marginLeft?:number;
    backgroundposition?:string;
}