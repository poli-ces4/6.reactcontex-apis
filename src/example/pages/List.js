import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const List = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div>List age:{user?.age}</div>
      <button onClick={() => setUser({ name: "Pedro", age: 20 })}>
        Registar
      </button>
    </>
  );
};

export default List;
