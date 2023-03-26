import { useState } from "react";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";


function App() {
 const [show, setShow] = useState(false)
 const [cart, setCart] = useState([])
//  console.log(show);
// console.log(cart);

const handleClick = (item) => {
  if(cart.indexOf(item) !== -1) return alert("Cart is added");
  setCart([...cart, item])
// console.log(cart.indexOf(item));
}

const handleChange = (item, d) => {
  const indx = cart.indexOf(item)
  const arr = cart
  arr[indx].amount += d
console.log(indx);
console.log(arr[indx].amount);
if(arr[indx].amount === 0) arr[indx].amount = 1;
setCart([...arr])
}

// useEffect(()=>{
//   alert("Cart added");
// }, [cart])

  return (
    <>
    <Navbar size={cart.length} setShow={setShow}/>
      {
      !show ? <Amazon handleClick={handleClick} />
       :  <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
       }
    </>
  );
}

export default App;
