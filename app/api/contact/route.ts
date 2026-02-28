import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Here you can integrate with email services like:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - AWS SES
    
    // For now, we'll log the message and return success
    console.log('Contact form submission:', { name, email, subject, message })

    // You can also store in a database or send to your email
    // Example with mailto (opens user's email client):
    // This is handled on the frontend as a fallback

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
