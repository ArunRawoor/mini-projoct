// import {useState , useEffect} from 'react'

// function UserData() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Simulate an API call
//     const fetchUserData = async () => {
//       // Replace this with your actual API call
//       const response = await fetch('https://jsonplaceholder.typicode.com/user');
//       const data = await response.json();
//       setUsers(data);
//       console.log(data);
//     };


//       fetchUserData();
//   }, []);




//   return (
//     <div>
//         <h1>User Data</h1>
      
//           {users.map((user) => (
//             <div key={user.id}>
//               <h2>UserName: {user.name}</h2>
//               <p>Email: {user.email}</p>
//               <p>Latitude: {user.address.geo.lat}</p>
//               <p>Longitude: {user.address.geo.lng}</p>

//             </div>
//           ))}
//     </div>
//   )
// }

// export default UserData





import { useState, useEffect } from 'react';

function UserData({userId}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    
    const fetchUser = async () => { 
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/user/${userId}`,
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Only update state if component is still mounted
        setUser(data);
        setError(null);
        
      } catch (err) {
        console.log('this is for the ref in console to debugg',err);
        setError(err.message);
        setUser(null);  
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
    
  }, [userId]);
  
  if (loading) return <div>Loading user {userId}...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data found</div>;
  
  return (
    <div>
      <h2>User ID :{user.id}</h2>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company?.name}</p>
    </div>
  );
}

export default UserData;