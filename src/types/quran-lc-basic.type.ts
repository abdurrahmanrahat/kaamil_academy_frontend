export type TQuranLCBasic = {
  _id: string;
  userName: string;
  userGender: "male" | "female";
  dateOfBirth: string; // Consider Date if using JS Date object elsewhere
  profession: string;
  address: string;
  phoneNumber: string;
  whatsAppNumber: string;
  batch: string;
  paymentMethod: string;
  RegFeeNumber: string;
  status: "default" | "completed" | "waiting";
  createdAt: string; // or Date
  updatedAt: string; // or Date
  __v: number;
};
