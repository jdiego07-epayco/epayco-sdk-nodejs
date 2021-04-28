var epayco = require('./epayco-sdk-node')({
    apiKey: '55b75fd6b1ef17eaf394fa985de6563c',
    privateKey: '9327203f56866f1ed1ef4f56272ee771',
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
                    description: "SDK NODEJS Pruebas ePayco Split TC",
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
                    splitpayment: "true",
                    split_app_id: "515360",
                    split_merchant_id: "515360",
                    split_type: "02",
                    split_primary_receiver: "515360",
                    split_primary_receiver_fee: "0",
                    split_rule: "multiple",
                    split_receivers: JSON.stringify([
                        { id: "9898", total: "6", iva: "0", base_iva: "0", fee: "50" }
                        // { id: "P_CUST_ID_CLIENTE 2ND RECEIVER", total: "58000", iva: "8000", base_iva: "50000", fee: "10" }
                    ]),
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