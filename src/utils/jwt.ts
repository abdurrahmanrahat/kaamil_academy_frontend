import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  return jwtDecode(token);
};

// token expiration check
export const isTokenExpired = (token: string) => {
  if (!token) return true;

  const decoded = decodedToken(token);
  const currentTime = Math.floor(Date.now() / 1000);

  return decoded.exp ? decoded.exp < currentTime : true;
};
