var epayco = require('./epayco-sdk-node')({
    apiKey: 'c40acc8a877f180bf312c79aae0503f7',
    privateKey: 'b13e95ea247b7cbe1f41724a1cb86d91',
    lang: 'ES',
    test: false
})

// 08323bcec52e508e33dda23 tokenId
// 077407e10171531365d57fc customerId

// epayco.customers.get("0a7c24745230119952f5e78")
//     .then(function(customer) {
//         console.log(customer.data.cards);
//     })
//     .catch(function(err) {
//         console.log("err: " + err);
//     });

// epayco.customers.list()
//     .then(function(customers) {
//         console.log(customers);
//     })
//     .catch(function(err) {
//         console.log("err: " + err);
//     });

var delete_customer_info = {
    franchise: "visa",
    mask: "524052******6621",
    customer_id: "0a7c24745230119952f5e78"
}
epayco.customers.delete(delete_customer_info)
    .then(function(customer) {
        console.log(customer);
    })
    .catch(function(err) {
        console.log("err: " + err);
    });