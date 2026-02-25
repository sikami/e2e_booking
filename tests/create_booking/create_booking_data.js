const valid_booking = {
    "firstname" : "Jane",
    "lastname" : "Doe",
    "totalprice" : 450,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2019-01-01",
        "checkout" : "2019-01-11"
    },
    "additionalneeds" : "Breakfast"
}

const invalid_missing_required = {
  lastname: "Doe",
  totalprice: 450,
  depositpaid: true,
  bookingdates: { checkin: "2019-01-01", checkout: "2019-01-11" },
  additionalneeds: "Breakfast",
};

const invalid_wrong_type = {
  firstname: "Jane",
  lastname: "Doe",
  totalprice: "450", // should be number
  depositpaid: "true", // should be boolean
  bookingdates: { checkin: "2019-01-01", checkout: "2019-01-11" },
  additionalneeds: "Breakfast",
};

const invalid_bad_date_format = {
  firstname: "Jane",
  lastname: "Doe",
  totalprice: 450,
  depositpaid: true,
  bookingdates: { checkin: "01-01-2019", checkout: "2019/01/11" }, // wrong format
  additionalneeds: "Breakfast",
};

const invalid_date_logic = {
  firstname: "Jane",
  lastname: "Doe",
  totalprice: 450,
  depositpaid: true,
  bookingdates: { checkin: "2019-01-11", checkout: "2019-01-01" }, // checkout before checkin
  additionalneeds: "Breakfast",
};

const invalid_negative_price = {
  firstname: "Jane",
  lastname: "Doe",
  totalprice: -10,
  depositpaid: true,
  bookingdates: { checkin: "2019-01-01", checkout: "2019-01-11" },
  additionalneeds: "Breakfast",
};

const invalid_missing_bookingdates = {
  firstname: "Jane",
  lastname: "Doe",
  totalprice: 450,
  depositpaid: true,
  additionalneeds: "Breakfast",
};

export {
  valid_booking,
  invalid_missing_required,
  invalid_wrong_type,
  invalid_bad_date_format,
  invalid_date_logic,
  invalid_negative_price,
  invalid_missing_bookingdates,
}
