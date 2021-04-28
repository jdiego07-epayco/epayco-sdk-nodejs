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
    "card[cvc]": "049"
}
epayco.token.create(credit_info)
    .then(function(token) {
        var customer_info = {
            token_card: token.id,
            name: "Juan Diego",
            last_name: "Vargas Posada",
            email: "diego.vargas@payco.co",
            default: false,
            city: "Medellin",
            address: "CL 104 # 74a - 4",
            phone: "5502712",
            cell_phone: "3042462218"
        }
        epayco.customers.create(customer_info)
            .then(function(customer) {
                // console.log(customer.data.customerId)
                var payment_info = {
                    token_card: token.id,
                    customer_id: customer.data.customerId,
                    doc_type: "CC",
                    doc_number: "1194418306",
                    name: "Juan Diego",
                    last_name: "Vargas Posada",
                    email: "diego.vargas@payco.co",
                    city: "Medellin",
                    address: "Cl 104 # 74a - 4",
                    phone: "5502712",
                    cell_phone: "3042462218",
                    bill: Math.floor(Math.random() * (3999999 - 1)) + 1,
                    description: "SDK NODEJS Pruebas ePayco TC",
                    value: "1",
                    tax: "0",
                    tax_base: "1",
                    currency: "COP",
                    dues: "1",
                    ip: "181.134.247.50",
                    /*This is the client's IP, it is required */
                    url_response: "http://diego.dev-plugins.info/respuesta.html",
                    url_confirmation: "http://diego.dev-plugins.info/confirmacion.php",
                    method_confirmation: "POST",
                    use_default_card_customer: false,
                    extras: {
                        extra1: "",
                        extra2: "",
                        extra3: "",
                        extra4: "",
                        extra5: "",
                        extra6: "",
                        extra7: "",
                        extra8: "",
                        extra9: "",
                        extra10: ""
                    }
                }
                epayco.charge.create(payment_info)
                    .then(function(charge) {
                        console.log(charge);
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