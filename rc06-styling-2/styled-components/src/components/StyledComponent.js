import React from "react";
import { MyButton } from "./button/MyButton";
import Header from "./header/Header";
import Link from "./link/Link";
import Wrapper from "./wrapper/Wrapper";

const StyledComponent = () => {
  return (
    <>
      <Wrapper bgColor="bisque">

        <Header>
          MERHABA COHORT-10 (burada default rengi aldi)</Header>
        
        <Header baslikRenk="green">
          MERHABA COHORT-10 (burada rengi ben sectim)
        </Header>



        <Link
          href="https://clarusway.com/"
          target="_blank"
          rel="noopener"
          secondary>
          CLARUSWAY
        </Link>

        

        <MyButton renk>mavi buton(renk sartini kullandim)</MyButton>
        <MyButton>mor buton(renk sartini kullanmadim)</MyButton>

      </Wrapper>
    </>
  );
};

export default StyledComponent;
