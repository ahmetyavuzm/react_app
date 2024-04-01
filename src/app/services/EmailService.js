import { NextResponse } from "next/server";

const RESEND_API_KEY="re_URUJ3VrR_L6jVRA5NmP25s5ttokvAq9Su";
const FROM_EMAIL="mail@yavuzmutlu.com";

const fromEmail = FROM_EMAIL;



const sendMail = async (data) =>{

 const res = await fetch('https://react-app-five-zeta.vercel.app', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    
    const data = await res.json();
    console.log(data);
    return true;
  }
}


export default { sendMail };