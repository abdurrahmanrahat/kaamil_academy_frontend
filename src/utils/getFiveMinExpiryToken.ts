import jwt from "jsonwebtoken";

export const getFiveMinExpiryToken = (paymentForId: string) => {
  const jwtPayload = {
    paymentForId,
  };

  // jwt token
  const verificationToken = jwt.sign(
    jwtPayload,
    process.env.NEXT_PUBLIC_JWT_SECRET as string,
    {
      expiresIn: "5m",
    }
  );

  return verificationToken;
};
