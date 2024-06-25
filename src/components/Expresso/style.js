import styled from "styled-components";

const GoodBtn = styled.button`
  background-color: lightgreen;
  width: 250px;
  height: 120px;
  font-size: 50px;
  font-weight: bold;
  color: rgb(17, 17, 17);
  border: 1px solid forestgreen;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: forestgreen;
    transition: 0.3s;
  }
`;

const NeutralBtn = styled.button`
  background-color: yellow;
  width: 250px;
  height: 120px;
  font-size: 50px;
  font-weight: bold;
  color: rgb(17, 17, 17);
  border: 1px solid rgb(255, 187, 0);
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 187, 0);
    transition: 0.3s;
  }
`;

const BadBtn = styled.button`
  background-color: rgb(250, 94, 94);
  width: 250px;
  height: 120px;
  font-size: 50px;
  font-weight: bold;
  color: rgb(17, 17, 17);
  border: 1px solid rgb(212, 0, 0);
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgb(212, 0, 0);
    transition: 0.3s;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 70px;
  margin-bottom: 100px;
`;

const Heading = styled.h1`
  color: white;
  text-align: center;
  padding-top: 30px;
  font-size: 50px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  display: flex;
  color: white;
  font-weight: bold;
  font-size: 32px;
`;

const RenderFeedback = styled.ul`
  padding-left: 20px;
`;

export {
  GoodBtn,
  Heading,
  NeutralBtn,
  BadBtn,
  ButtonsContainer,
  ListItem,
  RenderFeedback,
};
