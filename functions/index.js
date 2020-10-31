const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51HhvjfBoFDNCWh4RrfMk7ysWmmGkNwkOiF7QGz1u5WlMzQnerYbVlrcrCckqq656QEfYiPUhkjHgH80FYwlNdzLS00eWRRPgwe')

// API

// App config
const app = express()

// Middleware
app.use(cors({origin: true}))
app.use(express.json())

// API route
app.post('/payments/create', async (request, response) => {
    const total =request.query.total

    console.log('Payment Request Received for this amount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // submit of the currency
        currency: "usd",
    })

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// localhost:5001/clone-32aa4/us-central1/api














// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


