import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b1b2b;
  width: 900px;
  border-radius: 10px;
  margin-top: -80px;
  padding: 30px;
  gap: 30px;

  @media (max-width: 820px) {
    width: 800px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 400px;
    height: 400px;
  }

  @media (max-width: 393px) {
      width: 350px;
      
  }
`;

export const ContainerInfo = styled.div`
  h3 {
    color: #e7edf4;
    margin-bottom: 8px;
  }

  p {
    color: #afc2d4;
    margin-bottom: 24px;
    line-height: 25px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 10px;  
  }
  }

  li {
    display: flex;
    align-items: center; 
  }

  span {
    margin-left: 10px;
  }

  @media (max-width:480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerLink = styled.div`
  a {
    color: #3294f8;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: -47px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const ImageAvatar = styled.img`
  width: 120px;

  @media (max-width: 480px) {
      margin-top: 20px;
  }
`;
