import React from "react";

export default props => {
  return (
    <>
      {props.list.map(user=>
      (
        <tr key={user.login.uuid}>
         <td><img src={user.picture.thumbnail} alt="headshot for {user.name.first}"/></td>
          <td>{user.name.first} {user.name.last}</td>
          <td>{user.email}</td>
          <td>{user.cell}</td>
          <td>{user.location.city}</td>
          <td>{user.location.country}</td>
        </tr>
      )
      )}
    </>
  );
};
