import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { email, phoneNumber, suburb, description } = data;

    // Basic validation
    if (!email || !description) {
      return NextResponse.json({
        error: true,
        message: "Email and description cannot be empty",
        status: 400,
      });
    }

    // Create transporter using Gmail (make sure to use an App Password!)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "dejanlatinoski2@gmail.com", // your Gmail
        pass: "qikxkylmamgajikv", // your Gmail App Password
      },
    });

    // Email to yourself (you receive the user's message)
    const selfMailOptions = {
      from: "dejanlatinoski2@gmail.com",
      to: "dejanlatinoski2@gmail.com",
      subject: "New Proposal from Website",
      text: `
        New contact form submission:

        Email: ${email}
        Phone Number: ${phoneNumber || "N/A"}
        Suburb: ${suburb || "N/A"}
        Description: ${description}
      `,
    };

    // Send email
    const info = await transporter.sendMail(selfMailOptions);

    console.log("Email sent:", info.response);

    return NextResponse.json({
      error: false,
      message: "Your message was sent successfully! ✅",
      status: 200,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({
      error: true,
      message: "There was an error sending your message.",
      status: 500,
    });
  }
}
