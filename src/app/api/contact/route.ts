import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Valid name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "Valid phone number is required." },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email address is required." },
        { status: 400 }
      );
    }

    // Environment variables setup for production email integration
    const contactEmail = process.env.CONTACT_EMAIL || "luxoticinfrastructure@gmail.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;

    // Log payload for server debugging in development
    console.log("[API CONTACT RECEIVE]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      projectType,
      message,
      targetRecipient: contactEmail,
      configuredSMTP: Boolean(smtpHost && smtpUser && smtpPass),
    });

    /* 
      Production Email Sending Driver Architecture:
      If SMTP variables are present, connect via Nodemailer / Resend / Sendgrid API:
      
      if (smtpHost && smtpUser && smtpPass) {
        await sendSmtpMail({ to: contactEmail, subject: `New Enquiry from ${name}`, html: ... });
      }
    */

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        data: {
          receivedAt: new Date().toISOString(),
          referenceId: `LX-${Math.floor(100000 + Math.random() * 900000)}`,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[API CONTACT ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}
