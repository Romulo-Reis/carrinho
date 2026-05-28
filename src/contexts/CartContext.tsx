import { createContext, ReactNode, useState } from "react";
import type { ProductsProps } from "../page/home";

interface CartContextData {
    cart:CartProps[];
    cartAmount:number;
    addCartItem: (newItem: ProductsProps) => void;
    removeItemCart: (product: CartProps) => void;
    total:string;
}

interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps {
    children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

function CartProviter({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState("");

    function addCartItem(newItem:ProductsProps) {
        let indexItem = cart.findIndex((c)=>{
            return c.id == newItem.id;
        })

        if(indexItem != -1) {
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].price * cartList[indexItem].amount;
            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        
        const data:CartProps = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);
        totalResultCart([...cart, data])
    }

    function removeItemCart(product: CartProps) {
        const indexItem = cart.findIndex((item)=>{
            return item.id == product.id;
        })

        
        if(cart[indexItem]?.amount > 1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
            setCart(cartList);
            totalResultCart(cartList);
            return;
        }
        const removeItem = cart.filter((item) => item.id != product.id);
        setCart(removeItem);
        totalResultCart(removeItem)
    }

    function totalResultCart(items: CartProps[]) {
        const myCart = items;
        const result = myCart.reduce((total, item)=> total + item.total, 0);
        const resultFormarted  = result.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        setTotal(resultFormarted);
    }
    return (
        <CartContext.Provider value={{ cart, cartAmount: cart.length, addCartItem, removeItemCart, total}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProviter;