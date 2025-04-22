//import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { Outlet, useOutletContext, } from "react-router-dom";
//import NavBar from "../components/NavBar";

function Home() {
  const users = useOutletContext();
  const userList = users.map(user => <UserCard key={user.id} user={user}/>);

  // useEffect(() =>{
  //   fetch("http://localhost:4000/users")
  //     .then(r => r.json())
  //     .then(data => setUsers(data))
  //     .catch(error => console.error(error));
  // }, []);
  

  return (
    <>
      {/* 
        <header>
          <NavBar />
        </header> 
    */}
      <main>
        <h1>Home!</h1>
        <Outlet context={users}/>
        {userList}
      </main>
    </>
  );
};

export default Home;