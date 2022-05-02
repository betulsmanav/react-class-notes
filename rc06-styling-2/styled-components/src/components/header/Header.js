import styled from "styled-components";

export default styled.h1`

    color:${(props) => props.baslikRenk || "black"};
    // ! PROPS => || YAPISI : BIR RENK GONDERILIRSEONU KULLAN OZEL BIR RENK TANIMLANMAZSA "YELLOW" KULLAN.
    font-size:1.5rem;
    margin:1rem;

`;