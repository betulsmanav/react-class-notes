import React,{memo} from "react";
import cw from "../assets/cw_logo.png";

// ! 3. kullanim = comp. burada  sarmallamiyoru export kisminda sarmalliyoruz
const Header =({ img }) => {
  console.log("header render");
  return (
    <div className="header">
      <img src={img ? img : cw} alt="cw-logo" style={{margin:'1rem', mawHeight:"200px"}} />
    </div>
  );
}

// !2. kullanim
// import React,{memo} from "react";==>> busekilde import edicez

// const Header =memo (({ img }) => {
//   console.log("header render");
//   return (
//     <div className="header">
//       <img src={img ? img : cw} alt="cw-logo" style={{margin:'1rem', mawHeight:"200px"}} />
//     </div>
//   );
// })


// !react.memo 1. kullanim
// import etmeden  React.memo diye cagirma
// *react.memo ile header comp. hafizaya aldi degisiklik yoksa render etmiyor. sadece ihtiyac olduugunda render ettircez
// const Header =React.memo (({ img }) => {
//   console.log("header render");
//   return (
//     <div className="header">
//       <img src={img ? img : cw} alt="cw-logo" style={{margin:'1rem', mawHeight:"200px"}} />
//     </div>
//   );
// })

// ! 1 ve 2. kullanimda export
// export default Header;

// ! 3.kullanimda
export default memo(Header);
