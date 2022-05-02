import React, { useState, useEffect } from 'react';

const UseEffectComp = () => {

  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)
  
  useEffect(() => {
    console.log("useEffect!")
    //* count !=0 && alert(`new notification, total ${count}`)

    // let timer = setTimeout(() => {
    //   alert("hello")
    // },3000)
    return () => {
      // console.log('functional comp. unmount');
      // clearTimeout(timer)
    }//!clean up fun. component oldugunde yapilacak islemleri yaziyoruz.
  },[count])
  // []bagimlilik degiskeni iicin kullaniliyor.
    
  console.log("func comp. rendered!");
  const increase = () => setCount(count + 1)
  const increaseAge = () => setAge(age + 1);

  return (
    <div className="function">

      <h2>Functional Component</h2>

      <p>Count:{count}</p>
      <button onClick={increase}>Increase Count</button>

      <p>Age:{age}</p>
      <button onClick={increaseAge}>IncreaseAge</button>

    </div>
  )
}

export default UseEffectComp
