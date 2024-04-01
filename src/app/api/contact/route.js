// src/app/api/contact.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Gelen verileri kontrol edin
    if (!email || !subject || !message) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    try {
      // Verileri işleyin (örneğin, e-posta gönderme gibi)
      // Burada yapılacak işlemleri ekleyin.

      // Başarılı yanıt gönderin
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
