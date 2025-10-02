import { Suspense } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import OrderContainer from "./Components/OrderContainer";
import { ToastContainer } from "react-toastify";

const loadOder=()=>fetch('/orders.json').then(res=>res.json())

function App() {
  const orderPromise=loadOder();

  return (
    <>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
      <section>
        <Suspense fallback={<span>Loading...</span>}>
          <OrderContainer orderPromise={orderPromise}></OrderContainer>
        </Suspense>
      </section>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
