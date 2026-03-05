import { test, expect } from '@playwright/test';
import { CreateBooking } from '../../pages/create_booking.js';
import { valid_booking } from './create_booking_data.js';

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

test('Last name is required to create booking', async ({ request }) => {
    const booking = new CreateBooking(request);
    const booking_response = await booking.create_booking("invalid missing last name");
    expect(await booking_response.ok()).toBeFalsy();
});

//bug in system any type can be assigned to the key
test('Invalid data types should not create booking', async ({ request }) => {
    const booking = new CreateBooking(request);
    const booking_response = await booking.create_booking("invalid wrong type");
    expect(await booking_response.ok()).toBeFalsy();
});

//bug in system, no validation for date format
test('Checkout date should be after checkin date', async ({ request }) => {
    const booking = new CreateBooking(request);
    const booking_response = await booking.create_booking("invalid date logic");
    expect(await booking_response.ok()).toBeFalsy();
});

//bug in system, no validation for date format
test('Invalid date format creates booking', async ({ request }) => { // pass if assuming handled in frontend with datepicker
    const booking = new CreateBooking(request);
    const booking_response = await booking.create_booking("invalid bad date format");
    expect(await booking_response.ok()).toBeFalsy();
});

//bug in system, no validation for negative price
test('Total price should not be negative', async ({ request }) => {
      const booking = new CreateBooking(request);
      const booking_response = await booking.create_booking("invalid negative price");
      expect(await booking_response.ok()).toBeFalsy();
});

test('Booking dates are required to create booking', async ({ request }) => {
    const booking = new CreateBooking(request);
    const booking_response = await booking.create_booking("invalid missing booking dates");
    expect(await booking_response.ok()).toBeFalsy();
});