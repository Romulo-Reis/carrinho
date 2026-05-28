import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router';

export function Cart() {
    const {cart, addCartItem, removeItemCart , total} = useContext(CartContext);
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
            {cart.length == 0 && (
                <div className='flex flex-col items-center justify-center'>
                    <p className="font-medium">Ops, o seu carrinho está vazio!</p>

                    <Link className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded" to="/">
                        Acesse os produtos
                    </Link>
                </div>
            )}
            {cart.map((c)=>(
                <section className="flex items-center justify-between border-b-2 border-gray-300">
                    <img 
                        src={c.cover}
                        alt={c.description}
                        className="w-28"
                    />

                    <strong>Preço: {c.price.toLocaleString("pt-BR",{ style: 'currency', currency: 'BRL'})}</strong>

                    <div className="flex items-center justify-center gap-3">
                        <button onClick={() => removeItemCart(c)} className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                            -
                        </button>
                        {c.amount}
                        <button onClick={() => addCartItem(c)} className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                            +
                        </button>
                    </div>
                    <strong className="float-right">
                        SubTotal: {c.total.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL'})}
                    </strong>
                </section>
            ))}
            {cart.length > 0 && (
                <p className="font-bold">Total: {total}</p>
            )}
            
        </div>
    )
}