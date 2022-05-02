// import styled from "styled-components";

// const MyButton = styled.button`
//     background-color: blue;
//     border: none;
//     margin: 2px;
//     color: #fff;
//     padding: 12px 25px;
//     display: inline-block;
//     cursor: pointer;
//     font-size: 18px;
// `;

// export default MyButton
import styled from "styled-components";

export const MyButton = styled.button`
    background-color: ${props=>(props.renk ? "blue" : "purple")} ;
    border: none;
    margin: 2px;
    color: #fff;
    padding: 12px 25px;
    display: inline-block;
    cursor: pointer;
    font-size: 18px;
`;
// BIR COMPONENT ICINDE BIRDEN FAZLA BUTTON (VEYA BASKABIR TAG) TANIMLAYACAKSAK EXPORT DEFAULT KULLANMIYORUZ VE BUTTONLARA AYRI AYRI ISIM VERIP TANIMLIYORUZ DAGA SONRA IMPORT ETTIGIMIZZ SAYFADA TEK TEK {} ICINDE BUTTONLASRI CAGIRIYORUZ.