import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  //console.log(req);
  //const { body } = req;
  //console.log(body);
  //const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: "<ahmetyavuzm@gmail..com>",
      to: ["<ahmetyavuzm@gmail.com>"],
      subject: subject,
      react: (
        <>
          <h1>{""}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted:</p>
          <p>{""}</p>
        </>
      ),
    });
    console.log(data);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
