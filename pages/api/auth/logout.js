import { clearTokenCookie } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  clearTokenCookie(res);

  res.status(200).json({ message: 'Successfully logged out' });
}
