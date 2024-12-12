import styled from "styled-components";

export const ContainerSearch = styled.div`
  margin: 72px 0 48px 0;
  width: 900px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: #c4d4e3;
    }
    span {
      color: #7b96b2;
    }
  }

  input {
    width: 100%;
    margin-top: 15px;
    padding: 12px 16px;
    border: none;
    border: 1px solid #1c2f41;
    border-radius: 5px;
    background-color: #071422;
    outline: none;
    color: #ffffff;
  }

  @media (max-width: 820px) {
    width: 800px;
  }

  @media (max-width: 430px) {
      width: 400px;     
  }

  @media (max-width: 393px) {
      width: 350px;
      
  }
`;
