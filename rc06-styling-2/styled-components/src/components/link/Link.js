import styled,{css} from "styled-components";

export default styled.a`
// ! a tag i icin style yaziyoruz.
  font-size: 2rem;
  transition: ease 0.25s all;
  text-decoration: none;
  color: black;

  // ? PROPS LA CSS YAZIYORUZ
  // ! IPMPORTT {CSS} TANIMLAMAYI UNUTMA
  ${(props) =>
  props.secondary &&
  // * PROPS=> && YAPISI : SECONDARY GORDUGUN ZAMAN BU KODLARI KULLAN DIYORUZ.
    css`
      background-color: aqua;
      border-radius: 8px;
      padding: 8px;
      :hover{
          font-size:3rem;
          opacity:0.8;
        }
  `}
`;