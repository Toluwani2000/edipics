import ImageEditor from "@/components/ImageEditor";
import { Images } from "@/data/types";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";

type Props = {};

const Editor = (props: Props) => {
  const [pic, setPic] = useState<Images | null>();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const images = localStorage.getItem("imgs");

    const i = JSON.parse(images as string);
    // console.log(i.id); )
    const found = i.find((obj: Images) => {
      return obj.id.toString() === id?.toString();
    });

    setPic(found);
  }, [id]);

  return (
    <div>
      <ImageEditor pic={pic} />
    </div>
  );
};

export default Editor;
