import type { NextApiRequest, NextApiResponse } from "next";
import * as Etebase from 'etebase';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const etebase = await Etebase.Account.login(process.env.ETEBASE_USERNAME!, process.env.ETEBASE_PASSWORD!)
  
  console.log('req', req.body)
  res.status(200);
};

export default create;