import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, cityState, services, comments } = body;
    
    console.log('Received form data:', body);

    // Format services for better readability
    const formattedServices = services.map((service: string) => {
      return service
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }).join(', ');

    try {
      console.log('Attempting to send email via Resend');
      
      const data = await resend.emails.send({
        from: 'GV Financial <onboarding@resend.dev>',
        to: ['kolagantiaj1@gmail.com'],
        subject: `New Contact Form Submission from ${fullName}`,
        replyTo: email,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>New Contact Form Submission</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                  <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                  <p style="margin: 10px 0 0 0;">GV Financial Group</p>
                </div>
                
                <div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
                  <div style="margin-bottom: 15px; padding: 10px; background-color: #f8fafc; border-radius: 4px;">
                    <strong style="color: #1e3a8a;">Name:</strong> ${fullName}
                  </div>
                  
                  <div style="margin-bottom: 15px; padding: 10px; background-color: #f8fafc; border-radius: 4px;">
                    <strong style="color: #1e3a8a;">Email:</strong> ${email}
                  </div>
                  
                  <div style="margin-bottom: 15px; padding: 10px; background-color: #f8fafc; border-radius: 4px;">
                    <strong style="color: #1e3a8a;">Phone:</strong> ${phone}
                  </div>
                  
                  <div style="margin-bottom: 15px; padding: 10px; background-color: #f8fafc; border-radius: 4px;">
                    <strong style="color: #1e3a8a;">Location:</strong> ${cityState}
                  </div>
                  
                  <div style="margin-bottom: 15px; padding: 10px; background-color: #dbeafe; border-radius: 4px;">
                    <strong style="color: #1e3a8a;">Services Interested:</strong> ${formattedServices}
                  </div>
                  
                  <div style="margin-bottom: 15px; padding: 10px; background-color: #f3f4f6; border-radius: 4px;">
                    <strong style="color: #1e3a8a;">Comments:</strong>
                    <p style="margin: 5px 0 0 0;">${comments || 'No comments provided'}</p>
                  </div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 0.875rem;">
                  <p>This is an automated message from your website contact form.</p>
                  <p style="margin-top: 5px;">© ${new Date().getFullYear()} GV Financial Group</p>
                </div>
              </div>
            </body>
          </html>
        `
      });

      console.log('Resend response:', data);

      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (error: any) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: error.message,
          code: error.statusCode
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error.message },
      { status: 500 }
    );
  }
}