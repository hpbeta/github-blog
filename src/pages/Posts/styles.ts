import styled from "styled-components";

export const ContainerIssue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 900px;

  @media (max-width: 820px) {
    width: 800px;
  }

  @media (max-width: 393px) {
      width: 500px;

    }
`;

export const ContainerIssueInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #112131;
  width: 440px;
  height: 250px;
  padding: 32px;
  border-radius: 10px;
  margin-bottom: 20px;

  p {
    color: #afc2d4;
    line-height: 22px;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    h2 {
      font-size: 18px;
      margin-bottom: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      font-size: 10px;
      color: #afc2d4;
      white-space: nowrap;
    }
  }

  @media (max-width: 430px) {
      width: 400px;
      
  }

  @media (max-width: 393px) {
      width: 350px;

    }

 
`;
