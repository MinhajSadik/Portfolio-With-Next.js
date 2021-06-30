import { NextApiRequest, NextApiResponse } from "next";
import { service } from "../../data";
// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  //by default get request

  console.log(service);

  res.status(200).json({ service });
};
