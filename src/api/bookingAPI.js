export const submitAPI = async (formData) => {
  try {
    const response = await fetch('https://api.littlelemon.com/booking', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.ok;
  } catch (error) {
    console.error('Booking failed:', error);
    return false;
  }
};