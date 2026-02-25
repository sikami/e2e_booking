import { test, expect } from '@playwright/test';
import { valid_booking } from './create_booking_data.js'
import { json } from 'node:stream/consumers';

// https://restful-booker.herokuapp.com/booking
//create boking, get booking (happy path)
//create booking, checkout after checkin
//create booking, total price 0, -1
//create booking, empty string first name (validation)
//create booking, empty string surname (validation)
test.beforeEach(async ({ request }) => {
    const responses = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
        "username" : "admin",
        "password": "password123"
        }
    });
})

test('I can create booking succesfully', async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        data: valid_booking
    })
    console.log(await response.text())
    let json_response = await response.json()
    let booking_id = json_response.bookingid
    expect(response.ok(200)).toBeTruthy()
})