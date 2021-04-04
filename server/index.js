const app = require('express')()
const { resolve } = require('path')
const path = require('path')
const Razorpay = require('razorpay')
const shortid = require('shortid')
const cors = require('cors')
app.use(cors())
var razorpay = new Razorpay({
    key_id: 'rzp_test_MKUouqTmTO1LNC',
    key_secret: 'YFILpPcrNGcsy9TKH4RNQcO5'
})

app.get('/payment',(req,res) => {
    res.send('Hello World')
})
app.post('/razorpay', async(req,res) => {
    
    const payment_capture = 1
    const amount = 499
    const currency = 'INR'

    const options = {
        amount: amount*100,
        currency,
        receipt : shortid.generate(), 
        payment_capture
    }
    const response = await razorpay.orders.create(options)
    console.log(response)
    res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount
    })
})
app.listen(1337, () => { 
    console.log('Listening')
})