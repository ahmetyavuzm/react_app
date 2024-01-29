import { Resend } from "resend";
import { NextResponse } from "next/server";

const RESEND_API_KEY="re_URUJ3VrR_L6jVRA5NmP25s5ttokvAq9Su";
const FROM_EMAIL="mail@yavuzmutlu.com";

const resend = new Resend(RESEND_API_KEY);
const fromEmail = FROM_EMAIL;

export async function POST(req, res) {
  const body =  await req.json()
  const {email, subject , message} = body;
 
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: "ahmetyavuzm@gmail.com",
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me! {email}</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
