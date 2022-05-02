import React from 'react'
import { useState } from 'react';

// ! hooklari loop lari conditionlarin icinde cagiramazsin fonk. icinden cagiramazsin
// ! sadece componentlerin icinden kullanilabilir.

const UseStateComp = () => {

  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1)
  // const increase=()=>setCount(count => count+1) yukaridaki ile ayni islemi yapar.
  
  const [age, setAge] = useState(4);
  const increaseAge = () => setAge(age + 1);

  const [user, setUser] = useState({ name: "Felix", age: "25", email: "felix@jjj.com" });
  const updateUser=()=>setUser({...user,name: 'Betul'})


  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count:{count}</p>
      <button onClick={increase}>Increase Count</button>
      <p>Age:{age}</p>
      <button onClick={increaseAge}>IncreaseAge</button>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  )
}

export default UseStateComp;
