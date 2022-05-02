import styled from "styled-components";

export default styled.div`
// !kapsayici bir div icin comp. olusturduk.
  background-color: ${(props)=> props.bgColor || "white"};
  margin: auto;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;