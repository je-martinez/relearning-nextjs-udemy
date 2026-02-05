import { ItemCard } from "@/components";
import { Product, products } from "@/data/product";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Admin Todo | Shopping Cart",
  description: "Admin Todo | Shopping Cart",
  keywords: "Admin Todo, Shopping Cart, Cart",
  authors: [{ name: "Admin Todo" }],
  robots: "index, follow",
};

interface CartItem {
  product: Product;
  quantity: number;
}

const populateCartItems = (cartItems: { [id: string]: number }): CartItem[] => {
  return Object.keys(cartItems)
    .map((id) => {
      const product = products.find((product) => product.id === id);
      if (!product) return null;
      return { product, quantity: cartItems[id] };
    })
    .filter((item) => item !== null) as CartItem[];
};

const getProductsFromCart = async () => {
  const cart = await cookies();
  const cartItemsRaw = cart.get("cart")?.value || "{}";
  const cartItems = JSON.parse(cartItemsRaw) as { [id: string]: number };
  return populateCartItems(cartItems);
};

export default async function CartPage() {
  const cartItems = await getProductsFromCart();

  return (
    <div>
      <h1 className="text-2xl font-bold text-black">Cart Page</h1>
      <hr className="mb-2" />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col sm:w-8/12 gap-2 w-full">
          {cartItems.map((item) => (
            <ItemCard key={item.product.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
