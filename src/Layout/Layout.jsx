// React Router Dom Imports
import { Outlet, useLoaderData } from "react-router-dom";

// Components
import NavigationBar from "../Components/NavigationBar";

// FetchData Function
import { fetchData } from "../Helpers/FetchData";

// react imports
import { createContext, useEffect, useState } from "react";

// library import toast message
import { toast } from "react-toastify";

//CartContext
export const CartContext = createContext();

// LayoutLoader Function 
export function LayoutLoader() {
   const userName = fetchData("userName")

   return { userName }
}

const Layout = () => {
   const { userName } = useLoaderData();

   // Cart
   const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("items")) || []);
   const [quantity, setQuantity] = useState(0);

   useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems))
   }, [cartItems])

   // add to cart
   const addToCart = (image, price, quantity, name) => {
       const newItem = { image, price, quantity, name };

       const itemExists = cartItems.some(item => item.image === image);

       if (itemExists) {
           return toast.error("Item already exits in cart")
       }

       else if (quantity <= 0) {
           return toast.error("Null item cannot be added to cart")
       }

       else {
           setCartItems(prevItems => [...prevItems, newItem]);
           toast.success(`${name} has been added to cart`)
       }
   };

   // remove from cart
   const removeItemFromCart = (index, name) => {
       setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
       toast.success(`${name} has been deleted from cart`)
   };

  //  increase quantity
   const handleIncrease = (name) => {
       setQuantity(quantity + 1)
       toast.success(`Increased quantity for ${name}`)
   }

  //  decrease quantity
   const handleDecrease = (name) => {
       if (quantity > 0) {
           setQuantity(quantity - 1);
           return toast.success(`Decreased quantity for ${name}`)
       }
   } 

   return ( 
      <>
         <CartContext.Provider value={{
            cartItems, quantity, handleDecrease, handleIncrease, addToCart, removeItemFromCart
         }}>
            { userName && <NavigationBar/> }
               <main>
                  <Outlet/>
               </main>
         </CartContext.Provider>
      </>
   );
}
 
export default Layout;