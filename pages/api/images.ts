// import { basicFetch } from "../../data/fetchFunctions";
// import type { NextApiRequest, NextApiResponse } from "next";
// import type { Images } from "../../data/types";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Images>
// ) {
//   // const { page, search } = req.query; // Grab search params

//   const endpoint = "";

//   const data = await basicFetch<Images>(endpoint);

//   res.status(200).json(data);
// }

import axios from "axios";

const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;

const UNSPLASH_ROOT = "https://api.unsplash.com";

export const getPhotosByQuery = async () => {
  const { data } = await axios.get(
    `https://api.unsplash.com/photos?page=&client_id=OVfd2cLYLZKFFpYMVIM0Uk9BczpAU2-1wGRM-JlW1lU&per_page=50`
  );
  return data;
};
