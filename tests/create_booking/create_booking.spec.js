import { test, expect } from '@playwright/test';
import { CreateBooking } from '../../pages/create_booking.js';
import { valid_booking } from './create_booking_data.js';

// https://restful-booker.herokuapp.com/booking
//create boking, get booking (happy path)
//create booking, checkout after checkin
//create booking, total price 0, -1
//create booking, empty string first name (validation)
//create booking, empty string surname (validation)


test('I can create booking and retrieve it succesfully', async ({ request }) => {
   let booking = new CreateBooking(request)
   const booking_id = await booking.create_booking("valid")
   expect(booking_id).not.toBeNull()
   
   const get_booking_response = await booking.get_booking()
   expect(get_booking_response).toEqual(valid_booking)
})