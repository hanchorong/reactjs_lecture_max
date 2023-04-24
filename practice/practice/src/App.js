import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);
  const onAddUser = (uName, uAge) => {
    setUserList((prevUser) => {
      return [
        ...prevUser,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <>
      <AddUser onAdd={onAddUser} />
      <UserList onList={userList} />
    </>
  );
};

export default App;
