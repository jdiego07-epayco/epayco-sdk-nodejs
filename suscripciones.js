var epayco = require('./epayco-sdk-node')({
    apiKey: 'c40acc8a877f180bf312c79aae0503f7',
    privateKey: 'b13e95ea247b7cbe1f41724a1cb86d91',
    lang: 'ES',
    test: false
})

var credit_info = {
    "card[number]": "5240521756556621",
    "card[exp_year]": "2027",
    "card[exp_month]": "02",
    "card[cvc]": "true"
}
epayco.token.create(credit_info)
    .then(function(token) {
        var customer_info = {
            token_card: token.id,
            name: "Juan Diego",
            last_name: "Vargas Posada",
            email: "diego.vargas@payco.co",
            default: true,
            city: "Medellin",
            address: "CL 104 # 74a - 4",
            phone: "5502712",
            cell_phone: "3042462218"
        }
        epayco.customers.create(customer_info)
            .then(function(customer) {

                let num = Math.floor(Math.random() * (99)) + 1
                let namePlan = 'SuscripcionNODEJS-' + num.toString()

                var plan_info = {
                    id_plan: namePlan,
                    name: namePlan,
                    description: namePlan,
                    amount: 1,
                    currency: "cop",
                    interval: "day",
                    interval_count: 1,
                    trial_days: 7
                }
                epayco.plans.create(plan_info)
                    .then(function(plan) {
                        var subscription_info = {
                            id_plan: plan.data.id_plan,
                            customer: customer.data.customerId,
                            token_card: token.id,
                            doc_type: "CC",
                            doc_number: "1194418306",
                            url_confirmation: "http://diego.dev-plugins.info/confirmacion.php",
                            method_confirmation: "POST",
                        }
                        epayco.subscriptions.create(subscription_info)
                            .then(function(subscription) {
                                var subscription_info = {
                                    id_plan: plan.data.id_plan,
                                    customer: customer.data.customerId,
                                    token_card: token.id,
                                    doc_type: "CC",
                                    doc_number: "1194418306",
                                    ip: "181.134.247.50"
                                }
                                epayco.subscriptions.charge(subscription_info)
                                    .then(function(pay) {
                                        console.log(pay);
                                    })
                                    .catch(function(err) {
                                        console.log("err: " + err);
                                    });
                            })
                            .catch(function(err) {
                                console.log("err: " + err);
                            });
                    })
                    .catch(function(err) {
                        console.log("err: " + err);
                    });
            })
            .catch(function(err) {
                console.log("err: " + err);
            });
    })
    .catch(function(err) {
        console.log("err: " + err);
    });