import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Friends from "./../Friends/Friends";
 
const Home = () => {

    const [friends , setFriends] = useState([]);

  useEffect(()=>{
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(res => res.json())
.then(data => setFriends(data))

  },[])
  console.log(friends)
    return (
        <div>
            {
                
                    friends.map(friend => <Friends key={friend.id} fr={friend}></Friends>)
                  
            }
        </div>
    );
};

export default Home;