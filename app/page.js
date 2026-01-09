import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  
  const response = await fetch('http://localhost:3000/api/products')
  const products = await response.json()
   const stickers = []; // Your stickers data
  const planner = {}; // Your planner data
  return { products, stickers, planner };
  
}

export default async function Home() {
  const {products, stickers, planner } = await getProducts()
  console.log(products)

  return (
    <>
      <ImageBanner />
      <section>
        <Products stickers={stickers} planner={planner} />
      </section>
    </>
  );
}
