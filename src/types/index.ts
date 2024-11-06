
type Size = "sm" | "md" | "lg" | "default"
export interface ProductsDataTypes {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: 470;
  };
  quantity?: number;
  size?: Size;
}
