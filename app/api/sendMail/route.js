import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { username, contact, email, message } = body;

  try {
    const htmlBody = `
        <div>
            <h1>New Enquiry From Stimulant Healthcare Private Limited Website. Please contact on following details for a follow-up.</h1>  
            <h3>Name: ${username ? username : "NA"}</h3>
            <h3>Contact Number: ${contact ? contact : "NA"}</h3>
            <h3>Email: ${email ? email : "NA"}</h3>
            <h3>Message: ${message ? message : "NA"}</h3>
        </div>
        `;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const messageToSend = {
      from: process.env.USER_EMAIL,
      to: "saumitra.vilankar77@gmail.com",

      subject: "New Enquiry From Stimulant Healthcare Private Limited Website.",
      text: "",
      html: `${htmlBody}`,
    };

    await transporter.sendMail(messageToSend).then((info) => {
      console.log("Email sent: %s", info.messageId);
    });

    return NextResponse.json(
      {
        Message: `Email sent successfully.`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        Message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
