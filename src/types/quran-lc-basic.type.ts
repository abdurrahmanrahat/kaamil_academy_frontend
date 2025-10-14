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
  status: "pending" | "completed";
  createdAt: string; // or Date
  updatedAt: string; // or Date
  isDeleted: boolean;
  __v: number;
};
