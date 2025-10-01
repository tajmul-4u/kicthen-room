import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./Card/OrderCard";
import CookingCard from "./Card/CookingCard";

const OrderContainer = ({ orderPromise }) => {
  const orders = use(orderPromise);

  //   console.log(orders);
  const [cookingItems, setCookingItems] = useState([]);
  const handleOrder = (order) => {
    //   console.log(order);
    // age check kor  cooking e order ase kina
    const isExist=cookingItems.find((item)=>item.id==order.id);
    // console.log(isExist)
    if(isExist){
        alert('Allready Cooking')
        return;
    }
    //Cooking items rr vitor cliclk kore order k dhukabo
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };

  console.log(cookingItems);
  return (
    <div>
      <States
        cookingTotal={cookingItems.length}
        orderTotal={orders.length}
      ></States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="text-4xl font-bold">Current Orders</h2>
          <div>
            {orders.map((order) => (
              <OrderCard
                handleOrder={handleOrder}
                key={order.id}
                order={order}
              ></OrderCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5">
          <h2 className="text-4xl font-bold">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {
            cookingItems.map(order=> 
                <CookingCard key={order.id} order={order}></CookingCard>
            )
            }</div>
          <h2 className="text-4xl font-bold">Order Ready</h2>
          <div className="shadow p-10"></div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
