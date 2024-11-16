import { NextResponse } from 'next/server';

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, cityState, services, comments } = body;
    
    // Format services for better readability
    const formattedServices = services.map((service: string) => {
      return service
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }).join(', ');

    // Create a formatted message
    const formData = {
      ...body,
      _subject: `New Contact Form Submission from ${fullName}`,
      message: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Location: ${cityState}
        Services Interested: ${formattedServices}
        Comments: ${comments || 'No comments provided'}
      `,
      _template: "table" // This will format the email in a nice table view
    };

    const response = await fetch(FORMSPREE_ENDPOINT!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        details: error.message
      },
      { status: 500 }
    );
  }
}