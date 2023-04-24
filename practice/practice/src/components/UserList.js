import React from "react";

import Card from "./Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <div>
        <ul>
          {props.onList.map((user) => (
            <li key={user.id}>{`${user.name} (${user.age}) years old`}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
export default UserList;
