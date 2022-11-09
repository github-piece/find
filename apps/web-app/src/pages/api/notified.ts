import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const notified = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = JSON.parse(req.body);
  try {
    await prisma.waitlist.upsert({
      where: {
        email
      },
      update: {
        email
      },
      create: {
        email
      }
    });
    res.send({ success: true });
  } catch (err) {
    res.send({ success: false });
  }
};

export default notified;
