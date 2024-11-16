import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set in environment variables');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, cityState, services, comments } = body;

    console.log('Sending email to:', RECIPIENT_EMAIL);

    if (!fullName || !email || !phone || !cityState || !services) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const servicesList = services.join(', ');

    try {
      console.log('Attempting to send email with config:', {
        to: RECIPIENT_EMAIL,
        from: 'GV Financial Group <onboarding@resend.dev>',
        subject: 'New Contact Form Submission - GV Financial Group'
      });

      const data = await resend.emails.send({
        from: 'GV Financial Group <onboarding@resend.dev>',
        to: [RECIPIENT_EMAIL!],
        reply_to: email,
        subject: 'New Contact Form Submission - GV Financial Group',
        text: `
          New contact form submission:
          
          Name: ${fullName}
          Email: ${email}
          Phone: ${phone}
          Location: ${cityState}
          Services Interested: ${servicesList}
          Comments: ${comments || 'No comments provided'}
        `,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>New Contact Form Submission</title>
              <style>
                .email-container {
                  font-family: Arial, sans-serif;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #ffffff;
                }
                .header {
                  background-color: #1e3a8a;
                  color: white;
                  padding: 20px;
                  text-align: center;
                  border-radius: 8px 8px 0 0;
                }
                .content {
                  padding: 20px;
                  border: 1px solid #e5e7eb;
                  border-radius: 0 0 8px 8px;
                }
                .field {
                  margin-bottom: 15px;
                  padding: 10px;
                  background-color: #f8fafc;
                  border-radius: 4px;
                }
                .label {
                  font-weight: bold;
                  color: #1e3a8a;
                  margin-bottom: 5px;
                  display: block;
                }
                .value {
                  color: #374151;
                }
                .footer {
                  margin-top: 20px;
                  text-align: center;
                  color: #6b7280;
                  font-size: 0.875rem;
                }
                .services {
                  background-color: #dbeafe;
                  padding: 10px;
                  border-radius: 4px;
                  margin-bottom: 15px;
                }
                .comments {
                  background-color: #f3f4f6;
                  padding: 15px;
                  border-radius: 4px;
                  margin-top: 15px;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                  <p style="margin: 10px 0 0 0; font-size: 16px;">GV Financial Group</p>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="label">Name:</span>
                    <span class="value">${fullName}</span>
                  </div>
                  <div class="field">
                    <span class="label">Email:</span>
                    <span class="value">${email}</span>
                  </div>
                  <div class="field">
                    <span class="label">Phone:</span>
                    <span class="value">${phone}</span>
                  </div>
                  <div class="field">
                    <span class="label">Location:</span>
                    <span class="value">${cityState}</span>
                  </div>
                  <div class="services">
                    <span class="label">Services Interested:</span>
                    <span class="value">${servicesList}</span>
                  </div>
                  <div class="comments">
                    <span class="label">Comments:</span>
                    <p class="value" style="margin: 5px 0 0 0;">${comments || 'No comments provided'}</p>
                  </div>
                </div>
                <div class="footer">
                  <p>This is an automated message from your website contact form.</p>
                  <p style="margin-top: 5px;">© ${new Date().getFullYear()} GV Financial Group. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });

      console.log('Resend response:', data);

      return NextResponse.json(
        { message: 'Email sent successfully', id: data.id },
        { status: 200 }
      );
    } catch (error: any) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { 
          error: 'Failed to send email', 
          details: error.message,
          code: error.statusCode,
          data: error.data
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        details: error.message,
      },
      { status: 500 }
    );
  }
}