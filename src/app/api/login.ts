import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/app/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username , password } = req.body;

  try {
    const user = await db.user.findFirst({
      where: {
        username: String(username),
      },
    });

    if (!user || user.password !== String(password)) {
      return res.status(401).json({ message: 'Nieprawidłowa nazwa użytkownika lub hasło.' });
    }

    return res.status(200).json({ message: 'Zalogowano pomyślnie!' });
  } catch (error) {
    console.error('Błąd logowania:', error);
    return res.status(500).json({ message: 'Wystąpił błąd podczas logowania.' });
  }
}
