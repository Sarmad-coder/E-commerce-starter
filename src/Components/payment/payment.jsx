import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import Style from "./Payment.module.css"
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}
export default function Payment() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("/payment", {
                    amount: 1000,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }




    return <>
        <div className={Style.outerDiv}>
            <div className={`w-50 text-center p-4 ${Style.shadow}`}>
                <h2 className="mb-4">Payment Detail</h2>
                {!success ?
                    <form onSubmit={handleSubmit}>
                        <fieldset className={Style.FormGroup}>
                            <h5>Card Detail</h5>
                            <div className={Style.FormRow}>

                                <CardElement className={Style.StripeElement} options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button class="btn btn-primary w-25">PAY</button>
                    </form>
                    :
                    <div>
                        <h2>Congratulation Payment Successful</h2>
                    </div>
                }
            </div>
        </div>

    </>
}