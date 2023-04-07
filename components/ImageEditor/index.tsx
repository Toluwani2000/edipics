// @ts-nocheck
import { useEffect } from "react";

import Menu from "./Menu";

import { useEditingDatas } from "./useEditingDatas";
import ImageCanvas from "../ImageCanvas";
import { Images } from "@/data/types";

type Props = {
  pic: Images | null | undefined;
};

const IMAGES = [
  // "https://i.imgur.com/24nLu.jpg",
  // "https://images.pexels.com/photos/16132458/pexels-photo-16132458.jpeg",
  "https://dfmarqni2tgyh.cloudfront.net/swapped/20220516/132851_381760_1339.jpg",
  "https://dfmarqni2tgyh.cloudfront.net/upload_images/20220520/k_127767530.jpg",
  // "https://dfmarqni2tgyh.cloudfront.net/upload_images/20220531/demo_small.png",
  // "https://dfmarqni2tgyh.cloudfront.net/swapped/20220516/132851_381760_1339.jpg",
  // "https://dfmarqni2tgyh.cloudfront.net/upload_images/20220520/k_127767530.jpg",
];

const New = [];

export default function ImageEditor({ pic }: Props) {
  const {
    datas,
    index: editingIndex,
    currentData,
    move,
    add,
    setOption,
  } = useEditingDatas();

  useEffect(() => {
    if (pic) {
      // IMAGES[0] = pic?.src.original;
      // console.log(IMAGES);
      IMAGES.splice(0, 0, pic?.src.original);
      New.push(pic?.src.original);
      // console.log(IMAGES);
    }
    add(New);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pic]);

  return (
    <>
      <Menu data={currentData} onChange={setOption} />
      {datas.map((data, index) => (
        <ImageCanvas
          key={data.src}
          {...data}
          isVisible={index === editingIndex}
        />
      ))}
      <button onClick={() => move(-1)}>prev</button>
      index: {editingIndex}
      <button onClick={() => move(+1)}>next</button>
    </>
  );
}
