import { TUser } from "./user.type";

export type TBlog = {
  _id: string;
  blogTitle: string;
  blogImage: string;
  blogDescription: string;
  blogTags: string[];
  authorDetails: TUser;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
