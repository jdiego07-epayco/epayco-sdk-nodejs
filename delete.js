var epayco = require('./epayco-sdk-node')({
    apiKey: 'c40acc8a877f180bf312c79aae0503f7',
    privateKey: 'b13e95ea247b7cbe1f41724a1cb86d91',
    lang: 'ES',
    test: false
})

// 08323bcec52e508e33dda23 tokenId
// 077407e10171531365d57fc customerId

epayco.customers.get("077407e10171531365d57fc")
    .then(function(customer) {
        console.log(customer);
    })
    .catch(function(err) {
        console.log("err: " + err);
    });