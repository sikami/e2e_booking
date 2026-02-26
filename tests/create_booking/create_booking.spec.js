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
   const booking = new CreateBooking(request);

   const booking_response = await booking.create_booking("valid");
   expect(await booking_response.ok()).toBeTruthy();

   const booking_id = await booking.get_booking_id(booking_response);
   expect(booking_id).not.toBeNull();
   
   const booking_data = await booking.get_booking();
   expect(booking_data).toEqual(valid_booking);
})

test('First name is required to create booking', async ({ request }) => {
      const booking = new CreateBooking(request);
      const booking_response = await booking.create_booking("invalid missing first name");
      expect(await booking_response.ok()).toBeFalsy();
});
