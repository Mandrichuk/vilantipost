from forms.class_Form import Form

def form_to_class(formData):
    formFromClient = formData["formFromClient"]
    formToClient = formData["formToClient"]
    shippingForm = formData["shippingForm"]
    paymentForm = formData["paymentForm"]
    fedExNumber = formData["fedExNumber"]

    form = Form(
        formFromClient["sender"],
        formFromClient["country"],
        formFromClient["city"],
        formFromClient["street"],
        formFromClient["houseNumber"],
        formFromClient["zipCode"],
        formFromClient["email"],
        formFromClient["phoneNumber"],
        formToClient["recipient"],
        formToClient["country"],
        formToClient["city"],
        formToClient["street"],
        formToClient["houseNumber"],
        formToClient["zipCode"],
        formToClient["email"],
        formToClient["phoneNumber"],
        shippingForm["addressInput"],
        paymentForm["contactAfter"],
        paymentForm["acceptRules"],
        fedExNumber
    )
    
    return form