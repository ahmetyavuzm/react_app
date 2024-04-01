"use server"
import { Resend } from "resend";
import { NextResponse } from "next/server";

const RESEND_API_KEY="re_URUJ3VrR_L6jVRA5NmP25s5ttokvAq9Su";
const FROM_EMAIL="mail@yavuzmutlu.com";

const resend = new Resend(RESEND_API_KEY);

export async function POST(req, res) {
  try {

    const body =  await req.json();
    console.log(body);
    const {email, subject , message} = body ;

    const data1 = await resend.emails.send({
      from: FROM_EMAIL,
      to: "ahmetyavuzm@gmail.com",
      subject: subject,
      react: (
        <>
          <p>From: {email}</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    

    const data2 = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "I have received your message!",
      react: (
        <>
          <p>Thank you for reaching out to me. I will get back to you as soon as possible. Stay safe and take care.</p>
        </>
      ),
    });


    

    return NextResponse.json({sendMe: data1, sendBack: data2});
  } catch (error) {
    return NextResponse.json({ error});
  }
}
