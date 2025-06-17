import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('validates email format correctly', () => {
  render(<BookingForm />);
  const emailInput = screen.getByLabelText(/email/i);
  
  // Test invalid email
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  fireEvent.blur(emailInput);
  expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  
  // Test valid email
  fireEvent.change(emailInput, { target: { value: 'valid@email.com' } });
  fireEvent.blur(emailInput);
  expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();
});

test('prevents past date selection', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/choose date/i);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  fireEvent.change(dateInput, { 
    target: { 
      value: yesterday.toISOString().split('T')[0] 
    }
  });
  
  expect(screen.getByText(/future dates only/i)).toBeInTheDocument();
});

test('submits form with valid data', async () => {
  const submitForm = jest.fn();
  render(<BookingForm submitForm={submitForm} />);
  
  // Fill valid data
  fireEvent.change(screen.getByLabelText(/choose date/i), { 
    target: { value: new Date().toISOString().split('T')[0] }
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'test@example.com' }
  });
  // ... other fields
  
  fireEvent.click(screen.getByText(/make reservation/i));
  await waitFor(() => expect(submitForm).toHaveBeenCalled());
});