import { getCookie, hasCookie, setCookie } from "cookies-next";

//Client Side Actions
export const getCookieCart = async (): Promise<{ [id: string]: number }> => {
  const hasCart = await hasCookie("cart");
  if (hasCart) {
    const cartCookie = await getCookie("cart");
    return JSON.parse(cartCookie || "{}");
  }
  return {};
};

export const addProductToCart = async (id: string) => {
  const cart = await getCookieCart();
  if (cart[id]) {
    cart[id] = cart[id] + 1;
  } else {
    cart[id] = 1;
  }
  await setCookie("cart", JSON.stringify(cart));
};

export const removeProductFromCart = async (id: string) => {
  const cart = await getCookieCart();
  if (cart[id]) {
    delete cart[id];
  }
  await setCookie("cart", JSON.stringify(cart));
};
