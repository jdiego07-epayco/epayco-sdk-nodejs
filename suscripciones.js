var epayco = require('./epayco-sdk-node')({
    apiKey: 'c40acc8a877f180bf312c79aae0503f7',
    privateKey: 'b13e95ea247b7cbe1f41724a1cb86d91',
    lang: 'ES',
    test: true
})

// 0a1355cb62bed176215e075 tokenId
// 0a1355de0bc0c20823b49e3 customerId

// var credit_info = {
//     "card[number]": "5240521756556621",
//     "card[exp_year]": "2027",
//     "card[exp_month]": "02",
//     "card[cvc]": "true"
// }
// epayco.token.create(credit_info)
//     .then(function(token) {
//         var customer_info = {
//             token_card: token.id,
//             name: "Juan Diego",
//             last_name: "Vargas Posada",
//             email: "maria.123456@payco.co",
//             default: false,
//             city: "Medellin",
//             address: "CL 104 # 74a - 4",
//             phone: "5502712",
//             cell_phone: "3042462218"
//         }
//         epayco.customers.create(customer_info)
//             .then(function(customer) {

//                 let num = Math.floor(Math.random() * (99)) + 1
//                 let namePlan = 'SuscripcionNODEJS-' + num.toString()

//                 var plan_info = {
//                     id_plan: "SuscripcionNODEJS-33",
//                     name: "SuscripcionNODEJS-33",
//                     description: "SuscripcionNODEJS-33",
//                     amount: 1,
//                     currency: "cop",
//                     interval: "day",
//                     interval_count: 1,
//                     trial_days: 0
//                 }
//                 epayco.plans.create(plan_info)
//                     .then(function(plan) {
//                         console.log(token.id)
//                         console.log(customer.data.customerId)
var subscription_info = {
    id_plan: "SuscripcionNET-12",
    // customer: customer.data.customerId,
    // token_card: token.id,
    customer: "077407e10171531365d57fc",
    token_card: "0a0411896e38f783e679a41",
    doc_type: "CC",
    doc_number: "1194418306",
    url_confirmation: "http://diego.dev-plugins.info/confirmacion.php",
    method_confirmation: "POST",
}
epayco.subscriptions.create(subscription_info)
    .then(function(subscription) {
        var subscription_info = {
            id_plan: "SuscripcionNET-12",
            // customer: customer.data.customerId,
            // token_card: token.id,
            customer: "077407e10171531365d57fc",
            token_card: "0a0411896e38f783e679a41",
            doc_type: "CC",
            doc_number: "1194418306",
            ip: "181.134.247.50"
        }
        epayco.subscriptions.charge(subscription_info)
            .then(function(pay) {
                console.log(pay.data);
            })
            .catch(function(err) {
                console.log("err: " + err);
            });
    })
    .catch(function(err) {
        console.log("err: " + err);
    });
// })
// .catch(function(err) {
// console.log("err: " + err);
// });
// })
// .catch(function(err) {
// console.log("err: " + err);
// });
// })
// .catch(function(err) {
//     console.log("err: " + err);
// });