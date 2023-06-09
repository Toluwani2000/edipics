import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { images } from "./api/data";
import Modal from "@/components/Modal";
import axios from "axios";
// import { useFetchImages } from "@/data/fetchHooks";
import { getPhotosByQuery } from "./api/images";
import { Images } from "@/data/types";
import { setLocalStorage } from "@/helpers";
import Image from "next/image";

type Props = {};

const Gallery = (props: Props) => {
  // const localPics = localStorage.getItem("imgs");

  // const i = JSON.parse(localPics as string);
  // const [pics, setPics] = useState<[] | null>(i);
  const [pics, setPics] = useState<[] | null>();

  const [showModal, setShowModal] = useState({
    state: false,
    image: {} as Images,
  });

  useEffect(() => {
    getPhotosByQuery()
      .then((p) => {
        console.log(p);
        setPics(p);
      })
      .catch((e: Error | "") => console.log(e));
  }, []);

  if (pics !== null) {
    setLocalStorage("imgs", pics);
  }

  return (
    <div>
      <Head>
        <title>EdiPIcs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="bg-white dark:bg-gray-900   ">
          <div className=" container mx-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pics?.map((image: Images) => (
                <>
                  <div key={image.id} className="cursor-pointer">
                    {/* @ts-ignore */}
                    <img
                      className=" max-w-full rounded-lg"
                      src={image.src?.original}
                      alt=""
                    />
                    <div className="flex flex-col space-y-4 pt-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                      <a
                        href={`editor/${image.id}`}
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                      >
                        Edit
                        <svg
                          aria-hidden="true"
                          className="ml-2 -mr-1 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                      <button
                        //   href="#"

                        onClick={() => setShowModal({ state: true, image })}
                        data-modal-target="authentication-modal"
                        data-modal-toggle="authentication-modal"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                      >
                        Request Edit
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
