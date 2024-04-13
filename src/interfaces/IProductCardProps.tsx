export interface IProductCardProps {
    productID?: number;
    image: string;
    title: string;
    author: string;
    price: number;
    discount?: number | null;
    sales: number;
    rate: number;
}
