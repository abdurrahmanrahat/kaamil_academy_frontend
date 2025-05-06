import { baseApi } from "./baseApi";

const bkashApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBkashPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/bkash/create-payment",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags: ["bkash"],
    }),
  }),
});

export const { useAddBkashPaymentMutation } = bkashApi;
