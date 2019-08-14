import React, { useState } from "react"

const Product = () => {
  const stripe = window.Stripe("pk_test_Q0pwIJG2dqeCmpkhSxyEXmJs00fkLGcSYc")
  const [sku, setSku] = useState("sku_FcfKdpbjBAVOZz")

  const placeOrder = () => {
  stripe.redirectToCheckout({
    items: [
      {
        sku,
        quantity: 1,
      }
    ],
    successUrl: "http://localhost:8000/success",
    cancelUrl: "http://localhost:8000/cancel",
  })
}

 return (
      <article>
        <img src="https://picsum.photos/200/300" alt=""/>
        <h3>WWS T-shirt</h3>
        <select value={sku} onChange={e => setSku(e.target.value)}>
          <option value="sku_FcfKdpbjBAVOZz">Small</option>
          <option value="sku_FcMf94GZ1kfqg4">Medium</option>
          <option value="sku_FcfLTZYfOxIAuu">Large</option>
        </select>
        <button onClick={placeOrder}>Buy Me</button>
      </article>
)}

export default Product