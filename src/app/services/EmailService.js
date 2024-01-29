import { NextResponse } from "next/server";

const RESEND_API_KEY="re_URUJ3VrR_L6jVRA5NmP25s5ttokvAq9Su";
const FROM_EMAIL="mail@yavuzmutlu.com";

const fromEmail = FROM_EMAIL;

export const sendMail = async (data) =>{

 const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: ['ahmetyavuzm@gmail.com'],
      subject: data,
      html: <>
        <h1>{data.subject}</h1>
        <p>Thank you for contacting me! {data.email}</p>
        <p>New message submitted:</p>
        <p>{data.message}</p>
      </>,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}
