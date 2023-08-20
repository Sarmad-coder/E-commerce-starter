import Payment from "./payment"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
const PUBLIC_KEY = "pk_test_51MaPWFSCuSkuXdZXsSqmQsZ23k7IMnma2O5SFpXlClPv7qaku71pLpjS5YEVX1gtzmW3U1gWhxRzEXH0S6E74fha00qFRcwYV8"
const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {

    return <Elements stripe={stripeTestPromise}>
        <Payment />
    </Elements>
}