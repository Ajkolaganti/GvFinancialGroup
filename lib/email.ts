export async function sendContactForm(data: any) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Server error details:', result);
      throw new Error(result.details || result.error || 'Failed to send message');
    }

    return result;
  } catch (error) {
    console.error('Error sending form:', error);
    throw error;
  }
}