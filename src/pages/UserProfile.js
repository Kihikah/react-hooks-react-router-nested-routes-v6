//import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  //const [user, setUser] = useState({});
  const users = useOutletContext();
  const params = useParams();

  const user = users.find(user => user.id === parseInt(params.id));
  //const userId = params.id;

  // useEffect(() =>{
  //   fetch(`http://localhost:4000/users/${userId}`)
  //   .then(r => r.json())
  //   .then(data => setUser(data))
  //   .catch(error => console.error(error));
  // }, [userId]);

  if(!user){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;