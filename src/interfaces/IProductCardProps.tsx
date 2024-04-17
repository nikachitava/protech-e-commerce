export interface IProductCardProps {
    productID?: number;
    productName: string;
    image: string;
    prodDescription: string;
    author: string;
    price: number;
    discount?: number | null;
    sales: number;
    rate: number;
}
