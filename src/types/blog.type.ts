import { TUser } from "./user.type";

export type TBlog = {
  _id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  authorDetails: TUser;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
