import { useEffect, useState } from "react";

const useSelectPlaceholder = () => {
  const [genderPlaceholder, setGenderPlaceholder] = useState("User gender");
  const [batchPlaceholder, setBatchPlaceholder] = useState("Select batch");
  const [userStatusPlaceholder, setUserStatusPlaceholder] =
    useState("User status");
  const [userRolePlaceholder, setUserRolePlaceholder] = useState("User role");
  const [allStudentsPlaceholder, setAllStudentsPlaceholder] =
    useState("All Students");

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth < 768) {
        setGenderPlaceholder("Gender");
        setBatchPlaceholder("Batch");
        setUserStatusPlaceholder("Status");
        setUserRolePlaceholder("Role");
        setAllStudentsPlaceholder("All");
      } else {
        setGenderPlaceholder("User gender");
        setBatchPlaceholder("Select batch");
        setUserStatusPlaceholder("User status");
        setUserRolePlaceholder("User role");
        setAllStudentsPlaceholder("All Students");
      }
    };

    updatePlaceholder(); // Set initial value
    window.addEventListener("resize", updatePlaceholder);

    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  const allSelectPlaceholders = {
    genderPlaceholder,
    batchPlaceholder,
    userStatusPlaceholder,
    userRolePlaceholder,
    allStudentsPlaceholder,
  };

  return allSelectPlaceholders;
};

export default useSelectPlaceholder;
