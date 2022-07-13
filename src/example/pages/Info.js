import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Info = () => {
  const { user } = useContext(UserContext);
  return <div>Info user: {user.name}</div>;
};

export default Info;
