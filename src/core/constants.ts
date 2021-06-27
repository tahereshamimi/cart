export type Product = {
    image: string,
    name: string,
    price: number,
    id: number,
    count?: number
}
export type Data = {
    address?: string;
    name: string;
    rate_average: number;
    products: Product[];
    image: string;
    rate_count: number;
}
