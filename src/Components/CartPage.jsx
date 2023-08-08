// react icon
import TrashIcon from "@heroicons/react/24/solid/TrashIcon"

// React Router Dom Imports
import { Link, useFetcher } from "react-router-dom";

// react imports
import { useContext } from "react";

// Cart Context
import { CartContext } from "../Layout/Layout"

// Sass
import '../Sass/CartPage.scss';

const CartPage = () => {
    const fetcher = useFetcher();

    const x = "x"

    // CartContext
    const {removeItemFromCart, cartItems} = useContext(CartContext);

    return ( 
        <div className="cartPage">
            <div className="px-3">
                {cartItems.length === 0 && (
                    <p className="mt-3" style={{textAlign: "center"}}>Cart is empty</p>
                )}
                {cartItems && cartItems.map((item, index) => (
                  <>
                      <div key={index} className="d-flex align-items-center">
                        <div className="pe-3">
                            <img src={item.image} alt="Item"/>
                        </div>
                        <div className="">
                            <small style={{fontWeight: "400", color: "hsl(219, 9%, 45%)"}}>{item.name}</small><br />
                            <small style={{fontWeight: "400", color: "hsl(219, 9%, 45%)"}}>
                                ${`${item.price} ${x} ${item.quantity}`} 
                                <span style={{fontWeight: "900"}} className="ps-2">${`${item.quantity}` * `${item.price}`}</span>
                            </small>
                        </div>
                        <fetcher.Form className="delete">
                            <button type="button" onClick={(event) => removeItemFromCart(index, item.name, event)}>
                                <TrashIcon width={20} height={20}/>
                            </button>
                        </fetcher.Form>
                    </div>
                    <hr />
                  </>
                )).slice(0, 1)}
            </div>
            {cartItems.length > 1 && (
               <div className="mb-3 viewItems">
                    <Link to="/cart">
                        View all items
                    </Link>
               </div>
            )}
            {cartItems.length > 0 && (
                    <fetcher.Form className="mb-2 checkout">
                        <button type="button">Checkout</button>
                    </fetcher.Form>
                )
            }
        </div>
    );
}
 
export default CartPage;