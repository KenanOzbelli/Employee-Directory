import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import TableBody from '../tableBody';
import SearchBar from  '../searchBar';
const Directory = props => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm]=useState("")
  useEffect(() => {
    API.getUsers().then(({ results }) => {
      setUsers(results);
    });
  }, []);

  users.sort((a, b) =>{
    if (a.name.first < b.name.first) {
      return -1;
    }
    if (a.name.first > b.name.first) {
      return 1;
    }
   return 0;
  });

  const handler =(term)=>{
    setSearchTerm(term)
  }
  const activeList = users.filter(user=>{
      return user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return (
    <>
       <div style={{background:"navy"}}>
        <header>
            <h1 style={{textAlign:"center", padding:"30px", margin:"0", color:"white"}}>Employee Directory</h1>
            <h4 style={{margin:"0 auto", color:"red",textAlign:"center", padding:"1rem"}}>Employee list</h4>
        </header>
     </div>
     <div style={{margin:"0 60px 0 60px"}}>
        <SearchBar handler={handler} term={searchTerm}/>
    </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
          <th scope="col">Image</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody style={{background: "white"}}>
            <TableBody list={activeList}/>
        </tbody>
      </table>
    </>
  );
};

export default Directory;
