import { StaticImageData } from "next/image";

export type TReview = {
  id: string;
  name: string;
  photo: StaticImageData;
  message: string;
};
