import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  items: Array<{
    id: string;
    title: string;
  }>;

  onClick: () => void;
};

export const Burger: React.FC<Props> = ({ items }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <>
      <BurgerWrapper onClick={toggleBurger}>
        <BurgerLine
          style={{ transform: burgerOpen ? 'rotate(45deg)' : 'rotate(0)' }}
        ></BurgerLine>
        <BurgerLine
          style={{transform: burgerOpen ? 'translateX(-200%)' : 'translateX(0)'}}
        ></BurgerLine>
        <BurgerLine
          style={{ transform: burgerOpen ? 'rotate(-45deg)' : 'rotate(0)' }}
        ></BurgerLine>
      </BurgerWrapper>
      <ListWrapper style={{left: burgerOpen ? 0 : -500 }}>
        {items.map(({ id, title }) => (
          <ListLineWrapper key={id}>{title}</ListLineWrapper>
        ))}
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.ul`
  all: unset;
  position: absolute;
  top: 70px;
  left: -500px;
  z-index: 30;
  width: 200px;
  height: 400px;
  border-radius: 0;
  background-color: #283ca4;
  transition: all 0.5s linear;
`;

const ListLineWrapper = styled.li`
  all: unset;
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  background-color: #283ca4;
  color: white;
`;

const BurgerWrapper = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  cursor: pointer;
`;

const BurgerLine = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 10px;
  background-color: white;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;
