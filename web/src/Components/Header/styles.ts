import styled from "styled-components";


const Nav = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

const Logo = styled.img`
  max-width: 250px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export { Logo, Nav };
