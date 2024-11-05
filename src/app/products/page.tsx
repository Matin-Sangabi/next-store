import ProductsCard from "@/Components/Carts/Products";
import { ProductsDataTypes } from "@/types";
import AddMore from "./AddMore";

async function getProducts(limit: string | string[] | undefined) {
  // ssr request
  const data = await fetch(`https://fakestoreapi.com/products?limit=${limit}`, {
    cache: "no-store",
  });
  return data.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { limit } = await searchParams;

  const products: ProductsDataTypes[] = await getProducts(limit || "10");

  return (
    <div className="w-full flex flex-col gap-y-4  my-4">
      <h1 className="text-2xl font-bold">Products Lists</h1>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-6">
        {products.map((item) => (
          <ProductsCard key={item.id} {...item} />
        ))}
      </div>
      <AddMore />
    </div>
  );
}
