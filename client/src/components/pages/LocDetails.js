import React from 'react'
async function loadScript(src){
    return new Promise((resolve) =>{
        const script = document.createElement('script')
        script.src = src
        document.body.appendChild(script)
        script.onload = () =>{
            resolve(true);
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
    
    
}
function LocDetails() {
    async function displayRazorpay()
    { 
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res)
        {
            alert('Payment failed')
            return
        }
        const data = await fetch('http://localhost:1337/razorpay',{ method: 'Post' }).then((t) => 
            t.json()
        )
        console.log(data)
        const options = {
            key: "rzp_test_MKUouqTmTO1LNC", 
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: "Booking car",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            handler: function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            prefill: {
                "name": "I Venkatesh",
                "email": "venky@example.com",
                "contact": "9999999999"
            },
        };
        var paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    

    return (
        <div>
            <img src="/images/car1.jpg"/>
            <h3>Driver Name: Rishabh</h3>
            <h3>Price: 3000$</h3>
            <button onClick={displayRazorpay}>Book</button>
        </div>
    )
}

export default LocDetails
