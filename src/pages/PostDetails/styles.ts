import styled from "styled-components";

export const Container = styled.div`
  background-color: #0b1b2b;
  width: 864px;
  padding: 32px;
  border-radius: 10px;
  margin-top: 50px;

  @media (max-width: 820px) {
    width: 800px;
    margin-top: -80px;
  }
  @media (max-width: 480px) {
    width: 400px;
    margin-top: -80px;
  }

  @media (max-width: 393px) {
    width: 350px;
  }
`;

export const ContainerNavigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #3294f8;
  }
`;

export const ContainerInfo = styled.div`
  h2 {
    margin: 20px 0 12px 0;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #7b96b2;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  width: 814px;
  line-height: 22px;
  text-align: justify;

  @media (width: 820px) {
    width: 700px;
  }
  @media (max-width: 480px) {
    width: 400px;
  }

  @media (max-width: 393px) {
    width: 350px;
  }
`;
