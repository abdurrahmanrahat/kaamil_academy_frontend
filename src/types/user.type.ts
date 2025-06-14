export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  details: {
    name: string;
    education: string;
    photoURL: string;
    mobileNumber: string;
    whatsAppNumber: string;
    profession: string;
    gender: string;
    address: string;
    dateOfBirth: string;
  };
  isDeleted: boolean;
  __v: number;
};

export type TResponseUser = {
  name: string;
  email: string;
  role: "user" | "admin";
  exp: number;
  iat: number;
};

// export type TDecodedUser = {
//   name: string;
//   email: string;
//   role: "user" | "admin";
// };
