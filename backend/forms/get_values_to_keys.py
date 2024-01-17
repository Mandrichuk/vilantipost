def get_values_to_keys(data_list):
  keys = [
      "id",
      "sender",
      "sender_country",
      "sender_city",
      "sender_street",
      "sender_houseNumber",
      "sender_zipCode",
      "sender_email",
      "sender_phoneNumber",
      "recipient",
      "recipient_country",
      "recipient_city",
      "recipient_street",
      "recipient_houseNumber",
      "recipient_zipCode",
      "recipient_email",
      "recipient_phoneNumber",
      "shippingForm_address",
      "paymentForm_contactAfter",
      "paymentForm_acceptRules",
      "parcel_fedExNumber"
  ]

  return dict(zip(keys, data_list))