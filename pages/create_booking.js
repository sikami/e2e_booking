import { expect } from '@playwright/test';
import { valid_booking, invalid_missing_required, invalid_wrong_type, invalid_bad_date_format, invalid_date_logic
, invalid_negative_price, invalid_missing_bookingdates } from '../tests/create_booking/create_booking_data';

class CreateBooking {

    constructor(request) {
        this.request = request
        this.booking_id = null
    }

    async #login() {
        const responses = await this.request.post('https://restful-booker.herokuapp.com/auth', {
            data: {
                "username": "admin",
                "password": "password123"
            }
        });

        expect(await responses.ok()).toBeTruthy()
    }

    async #data_validity(validOrInvalid) {
        let data_validity 
        switch (validOrInvalid) {
            case "valid":
                data_validity = valid_booking
                break;
            case "invalid missing first name":
                data_validity = invalid_missing_required
                break;
            case "invalid wrong type":
                data_validity = invalid_wrong_type
                break;
            case "invalid bad date format":
                data_validity = invalid_bad_date_format
                break;
            case "invalid date logic":
                data_validity = invalid_date_logic
                break;
            case "invalid negative price":
                data_validity = invalid_negative_price
                break;
            case "invalid missing bookingdates":
                data_validity = invalid_missing_bookingdates
                break;
            default:
                throw new Error("Invalid data validity option")
        }
        return data_validity
    }


    async create_booking(validOrInvalid) {
        await this.#login()
        let data_to_test = await this.#data_validity(validOrInvalid)
        const response = await this.request.post('https://restful-booker.herokuapp.com/booking', {
            data: data_to_test
        })
        return response
    }

    async get_booking_id(response) {
        const response_json = await this.convert_response_to_json(response)
        this.booking_id = response_json.bookingid
        return this.booking_id
    }

    async convert_response_to_json(response) {
        return response.json()
    }

    async get_booking() {
        const response = await this.request.get(`https://restful-booker.herokuapp.com/booking/${this.booking_id}`)
        return response.json()
    }    

}

export { CreateBooking }