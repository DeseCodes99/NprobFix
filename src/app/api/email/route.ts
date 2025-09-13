import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (
    !data.name ||
    data.name.length < 6 ||
    data.name.lenght > 40 ||
    !data.requirements
  ) {
    return NextResponse.json({
      error: true,
      message: "Name and requirements can not be empty",
      status: 400,
    });
  }

  async function sendEmail() {
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "dejanlatinoski2@gmail.com",
          pass: "qikxkylmamgajikv",
        },
      });

      const selfMailOptions = {
        from: "dejanlatinoski2@gmail.com",
        to: "dejanlatinoski2@gmail.com",
        subject: "New Proposal",
        text: `We got new proposal from ${data.name}: ${data.requirements}`,
      };

      const userMailOptions = {
        from: "dejanlatinoski2@gmail.com",
        to: `${data.name}`,
        subject: "nProbFix Company team",
        text: `Hello dear ${data.name} we got your requerements, our team will contact you as soon as possible`,
      };

      const selfInfo = await transporter.sendMail(selfMailOptions);
      const userInfo = await transporter.sendMail(userMailOptions);

      if (selfInfo.accepted.length > 0 && userInfo.accepted.length > 0) {
        return NextResponse.json({
          error: false,
          message: "Emails were sent successfully",
          status: 200,
        });
      } else {
        return NextResponse.json({
          error: true,
          message: "Emails were not sent",
          status: 500,
        });
      }
    } catch (error) {
      NextResponse.json({
        error: true,
        message: "email was not sent",
        status: "500",
      });
    }
  }

  return await sendEmail();
}
