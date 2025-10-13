"use server";

import { tagLists } from "@/constants/tag"; // must include "QURAN_LC_BASIC"
import { revalidateTag } from "next/cache";
import { fetchWithAuth } from "./fetchWithAuth";

interface ServerResponse<T = any> {
  success: boolean;
  data: T;
  message: string;
}

/* ============================================
   Get All Students
============================================ */
export const getQuranLCBasicStudentsFromDB = async (
  params?: Record<string, any>
): Promise<ServerResponse> => {
  try {
    const queryParams = params
      ? "?" + new URLSearchParams(params).toString()
      : "";

    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/quran-lc-basic-students${queryParams}`,
      {
        cache: "force-cache",
        next: { tags: [tagLists.QURAN_LC_BASIC] },
      }
    );

    if (!res.ok) {
      return {
        success: false,
        data: [],
        message: "Failed to fetch Quran LC Basic students",
      };
    }

    const data = await res.json();
    return {
      success: data?.success ?? true,
      data: data?.data || [],
      message: data?.message || "Students fetched successfully",
    };
  } catch (error: any) {
    console.error("Error fetching Quran LC Basic students:", error);
    return {
      success: false,
      data: [],
      message: "Network or server error while fetching students",
    };
  }
};

/* ============================================
   2️⃣ Get Single Student
============================================ */
export const getSingleQuranLCBasicStudentFromDB = async (
  studentId: string
): Promise<ServerResponse> => {
  try {
    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/quran-lc-basic-students/${studentId}`,
      {
        cache: "force-cache",
        next: { tags: [tagLists.QURAN_LC_BASIC] },
      }
    );

    if (!res.ok) {
      return {
        success: false,
        data: null,
        message: "Failed to fetch student details",
      };
    }

    const data = await res.json();
    return {
      success: data?.success ?? true,
      data: data?.data || null,
      message: data?.message || "Student fetched successfully",
    };
  } catch (error: any) {
    console.error("Error fetching single Quran LC Basic student:", error);
    return {
      success: false,
      data: null,
      message: "Network or server error while fetching student",
    };
  }
};

/* ============================================
   3️⃣ Add New Student
============================================ */
export const addQuranLCBasicStudentToDB = async (
  studentData: Record<string, any>
): Promise<ServerResponse> => {
  try {
    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/quran-lc-basic-students/create-quran-lc-basic-student`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return {
        success: false,
        data: null,
        message: "Failed to create Quran LC Basic student",
      };
    }

    const data = await res.json();
    revalidateTag(tagLists.QURAN_LC_BASIC);

    return {
      success: data?.success ?? true,
      data: data?.data || null,
      message: data?.message || "Student added successfully",
    };
  } catch (error: any) {
    console.error("Error adding Quran LC Basic student:", error);
    return {
      success: false,
      data: null,
      message: "Network or server error while adding student",
    };
  }
};

/* ============================================
   4️⃣ Update Student
============================================ */
export const updateQuranLCBasicStudentInDB = async (
  studentId: string,
  updatedData: Record<string, any>
): Promise<ServerResponse> => {
  try {
    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/quran-lc-basic-students/${studentId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return {
        success: false,
        data: null,
        message: "Failed to update student",
      };
    }

    const data = await res.json();
    revalidateTag(tagLists.QURAN_LC_BASIC);

    return {
      success: data?.success ?? true,
      data: data?.data || null,
      message: data?.message || "Student updated successfully",
    };
  } catch (error: any) {
    console.error("Error updating Quran LC Basic student:", error);
    return {
      success: false,
      data: null,
      message: "Network or server error while updating student",
    };
  }
};

/* ============================================
   5️⃣ Delete Student
============================================ */
export const deleteQuranLCBasicStudentFromDB = async (
  studentId: string
): Promise<ServerResponse> => {
  try {
    const res = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_BACKED_URL}/quran-lc-basic-students/${studentId}`,
      {
        method: "DELETE",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return {
        success: false,
        data: null,
        message: "Failed to delete student",
      };
    }

    const data = await res.json();
    revalidateTag(tagLists.QURAN_LC_BASIC);

    return {
      success: data?.success ?? true,
      data: data?.data || null,
      message: data?.message || "Student deleted successfully",
    };
  } catch (error: any) {
    console.error("Error deleting Quran LC Basic student:", error);
    return {
      success: false,
      data: null,
      message: "Network or server error while deleting student",
    };
  }
};
