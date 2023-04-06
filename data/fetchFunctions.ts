import { Images } from "./types";

export const basicFetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error("Something went wrong...");

  const data = await response.json();

  console.log(data);

  return data;
};

export const fetchImages = async (search = "", page = 1): Promise<Images> => {
  return await basicFetch(
    // ` https://api.unsplash.com/search/photos?client_id=${process.env.ACCESS_KEY}&query=${query}`
    ` https://api.unsplash.com/photos?page=&client_id=OVfd2cLYLZKFFpYMVIM0Uk9BczpAU2-1wGRM-JlW1lU`
  );
};
