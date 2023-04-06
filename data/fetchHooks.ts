// import { useInfiniteQuery } from "@tanstack/react-query";
// import { fetchImages } from "./fetchFunctions";
// import { Images } from "./types";

// export const useFetchImages = (search: string) => {
//   return useInfiniteQuery(
//     ["images", search],
//     ({ pageParam = 1 }) => fetchImages(search, pageParam),
//     {
//       getNextPageParam: (lastPage: Images) => {
//         if (lastPage.page < lastPage.total_pages) {
//           return lastPage.page + 1;
//         }
//         return undefined;
//       },
//       refetchOnWindowFocus: false,
//     }
//   );
// };
