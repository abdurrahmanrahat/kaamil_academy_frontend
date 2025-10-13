"use server";

import { TServerResponse } from "@/types/action.type";
import { fetchWithAuth } from "./fetchWithAuth";

export const getMeFromDB = async (): Promise<TServerResponse> => {
  try {
    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/users/get-me`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      // 401 or 403 — user not authenticated
      return {
        success: false,
        data: null,
        message:
          res.status === 401 || res.status === 403
            ? "User not authorized"
            : "Failed to fetch user data",
      };
    }

    const data = await res.json();

    return {
      success: data?.success,
      data: data?.data,
      message: data?.message || "Current user find successfully",
    };
  } catch (error: any) {
    console.error("Error fetching user info:", error);
    return {
      success: false,
      data: null,
      message: "Network or server error while fetching user data",
    };
  }
};
