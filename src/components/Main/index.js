import styled from 'styled-components';

const Main = styled.main`
  display: Flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  width: 100vw;
  height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default Main;
