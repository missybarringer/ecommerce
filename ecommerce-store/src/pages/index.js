import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const stripe = window.Stripe("pk_test_Q0pwIJG2dqeCmpkhSxyEXmJs00fkLGcSYc")

  const placeOrder = sku => {
  stripe.redirectToCheckout({
    items: [
      {
        sku,
        quantity: 1,
      }
    ],
    successUrl: "http://localhost:8000/sucess",
    cancelUrl: "http://localhost:8000/cancel",
  })
}

 return (
  <Layout>
    <SEO title="Home" />
    <h1>WebWabiSabi Store</h1>
    <div>
      <article>
        <img src="https://picsum.photos/200/300" alt=""/>
        <h3>WWS T-shirt</h3>
        <button onClick={() => placeOrder("sku_FcMf94GZ1kfqg4")}>Buy Me</button>
      </article>
    </div>
  </Layout>
)}

export default IndexPage
