export type Pic = {
  path: string;
  id: string;
  Links: {
    download: string;
  };
};

export type Images = {
  // page: number;
  // results: Pic[];
  // total_pages: number;
  // total_results: number;
  id: number;
  alt: string;
  src: {
    original: string;
  };
};
