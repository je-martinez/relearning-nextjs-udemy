import { ItemCard, WidgetItem } from "@/components";
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

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const taxes = totalPrice * 0.15;
  const totalWithTaxes = totalPrice + taxes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-2xl font-bold text-black">Cart Page</h1>
      <div className="flex flex-col sm:flex-row gap-2 w-full mt-4">
        <div className="flex flex-col sm:w-8/12 gap-2 w-full">
          {cartItems.map((item) => (
            <ItemCard key={item.product.id} {...item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full mt-4">
        <div className="flex flex-col gap-2">
          <span className="w-full text-xl font-bold text-black">
            <WidgetItem title="Total Price">
              <span className="w-full text-3xl text-center font-bold text-black">
                ${totalWithTaxes.toFixed(2)}
              </span>
              <span className="w-full text-sm text-center  text-gray-500">
                Taxes(15%): ${taxes.toFixed(2)}
              </span>
            </WidgetItem>
          </span>
        </div>
      </div>
    </div>
  );
}
