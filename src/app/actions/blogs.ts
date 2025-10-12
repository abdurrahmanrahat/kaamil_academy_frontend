"use server";

import { tagLists } from "@/constants/tag"; // ensure "blog" tag is included
import { revalidateTag } from "next/cache";
import { fetchWithAuth } from "./fetchWithAuth";

export const getAllBlogsFromDB = async (params?: Record<string, any>) => {
  try {
    const queryParams = params
      ? "?" + new URLSearchParams(params).toString()
      : "";

    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/blogs${queryParams}`,
      {
        cache: "force-cache",
        next: { tags: [tagLists.BLOG] },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching blogs:", error);
    throw new Error(
      error.message || "Something went wrong while fetching blogs."
    );
  }
};

export const getSingleBlogFromDB = async (blogId: string) => {
  try {
    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/blogs/${blogId}`,
      {
        cache: "force-cache",
        next: { tags: [tagLists.BLOG] },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch blog. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching single blog:", error);
    throw new Error(
      error.message || "Something went wrong while fetching blog."
    );
  }
};

export const addBlogToDB = async (blogData: Record<string, any>) => {
  try {
    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/blogs/create-blog`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to create blog. Status: ${res.status}`);
    }

    const data = await res.json();

    // revalidate the blog list after adding
    revalidateTag(tagLists.BLOG);

    return data;
  } catch (error: any) {
    console.error("Error adding blog:", error);
    throw new Error(error.message || "Something went wrong while adding blog.");
  }
};

export const updateBlogInDB = async (
  blogId: string,
  updatedData: Record<string, any>
) => {
  try {
    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/blogs/${blogId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to update blog. Status: ${res.status}`);
    }

    const data = await res.json();

    revalidateTag(tagLists.BLOG);

    return data;
  } catch (error: any) {
    console.error("Error updating blog:", error);
    throw new Error(
      error.message || "Something went wrong while updating blog."
    );
  }
};

export const deleteBlogFromDB = async (blogId: string) => {
  try {
    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/blogs/${blogId}`,
      {
        method: "DELETE",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to delete blog. Status: ${res.status}`);
    }

    const data = await res.json();

    revalidateTag(tagLists.BLOG);

    return data;
  } catch (error: any) {
    console.error("Error deleting blog:", error);
    throw new Error(
      error.message || "Something went wrong while deleting blog."
    );
  }
};
