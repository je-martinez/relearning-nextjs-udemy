import { products } from "@/data/product";
import { ProductCard } from "@/shopping-cart/components";

export default function ShoppingCartPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
