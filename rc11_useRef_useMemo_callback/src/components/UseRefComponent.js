import React from "react";
import { useEffect,useRef } from "react";
import { useState } from "react";

const UseRefComponent = () => {
  const [value, setValue] = useState(0)
  console.log(value);

  const inputRef = useRef(null);
  const divRef = useRef(null);
  
  const valueRef = useRef(0)
  console.log("valueRef",valueRef);

  //! useRef birinci kullanım
  //! DOM elementlerine ulaşmamızı sağlar

  // useEffect(() => {
    // document.querySelector('input').focus()
    // console.log(document.querySelector('input'));
  // }, []);
  
  // console.log(inputRef);

  useEffect(() => {
    // inputRef.current.focus();
    // inputRef.current.parentNode.style.backgroundColor="red"
  }, []);

 const changeBGColor = () => {
  //  divRef.current.style.backgroundColor = "orange"

  //?random arkaplan ayarlama
   
  //  const colors = ["orange", "pink", "purple", "red", "#00ff00", "rgb(150,150,150)"]
  //  const random = Math.trunc(Math.random() * (colors.length));
  //  console.log(random);
  //  divRef.current.style.backgroundColor = colors[random]
   
  //  ? input alanina girilen degeri arkaplan yapma
  //  console.log(inputRef.current.value);
  //  divRef.current.style.backgroundColor =inputRef.current.value
  }

  
  //!useRef ikinci kullanım
  //! hafızada yeri değişmeyen bir obje oluşturur
  
  const increase = () => {
    setValue(value+1)
    valueRef.current +=1
  }




  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
       {/* sayfa yuklendiginde  inputun fokuslanmasi icin =>autoFocus  
       disana dokundugunda focustan cik =>onBlur
       inputun type ini degistirip renk secebiliriz ====> type="color" */}
      <input  ref={inputRef}   placeholder="Enter text..." />
      <button onClick={changeBGColor}>ChangeBGColor</button>
      <button onClick={increase}>increase</button>
    </div>
  );
};

export default UseRefComponent;
