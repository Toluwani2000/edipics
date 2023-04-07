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

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const UNSPLASH_ROOT = "https://api.unsplash.com";

export const getPhotosByQuery = async () => {
  const { data } = await axios.get(
    `https://api.pexels.com/v1/curated?page=1&per_page=50`,
    {
      headers: {
        Authorization: apiKey,
      },
    }
  );

  return data.photos;
};
