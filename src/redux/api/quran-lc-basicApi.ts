import { baseApi } from "./baseApi";

const quranLCBasicApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuranLCBasicStudents: builder.query({
      query: (args: Record<string, any>) => {
        return {
          url: "/quran-lc-basic-students",
          method: "GET",
          params: args,
        };
      },
      providesTags: ["quran-lc-basic"],
    }),
    getSingleQuranLCBasicStudent: builder.query({
      query: (studentId: string) => ({
        url: `/quran-lc-basic-students/${studentId}`,
        method: "GET",
      }),
      providesTags: ["quran-lc-basic"],
    }),
    addQuranLCBasicStudent: builder.mutation({
      query: (studentInfo) => ({
        url: "/quran-lc-basic-students/create-quran-lc-basic-student",
        method: "POST",
        body: studentInfo,
      }),
      invalidatesTags: ["quran-lc-basic"],
    }),
    updateQuranLCBasicStudent: builder.mutation({
      query: (payload) => {
        return {
          url: `/quran-lc-basic-students/${payload.studentId}`,
          method: "PATCH",
          body: payload.updatedData,
        };
      },
      invalidatesTags: ["quran-lc-basic"],
    }),
    deleteQuranLCBasicStudent: builder.mutation({
      query: (studentId) => ({
        url: `/quran-lc-basic-students/${studentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["quran-lc-basic"],
    }),
  }),
});

export const {
  useAddQuranLCBasicStudentMutation,
  useGetQuranLCBasicStudentsQuery,
  useGetSingleQuranLCBasicStudentQuery,
  useUpdateQuranLCBasicStudentMutation,
  useDeleteQuranLCBasicStudentMutation,
} = quranLCBasicApi;
