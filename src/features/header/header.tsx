import { useState } from 'react';
import styled from 'styled-components';
import { Burger } from '../burger/burger';
import { Initials } from '#ui/user/unitials';
import { Username } from '#ui/user/username';

export const Header = () => {
  const onClick = () => console.log('Button clicked!');
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };
  const userName = 'artem';
  const userSecondName = 'kakora';

  return (
    <HeaderWrapper >
      <Navigation onClick={toggleBurger}>
        <Burger
          items={[
            { id: '1', title: 'Artem Kakora' },
            { id: '2', title: 'Artem Kakora' },
          ]}
          onClick={onClick}
        />
        <SearchWrapper 
        style={{ visibility: !burgerOpen ? 'visible' : 'hidden' }}>
          <InputHeader
            type="text"
            placeholder="Search..."
            style={{ visibility: !burgerOpen ? 'visible' : 'hidden' }}
          />
          <BtnClose
            type="button"
            style={{ visibility: !burgerOpen ? 'visible' : 'hidden' }}
          >
            X
          </BtnClose>
          <SearchImg src={require('../../image/search.png')} alt="search" />
        </SearchWrapper>
      </Navigation>
      <UserNameWrapper>
        <Initials firstName={userName} secondName={userSecondName} />
        <Username firstName={userName} secondName={userSecondName} />
      </UserNameWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #283ca4;
  height: 70px;
  padding: 0 15px;
  margin-bottom: 15px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const SearchWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  background-color: #6e7ce9;
  margin-left: 100px;
`;
const InputHeader = styled.input`
  all: unset;
  height: 70px;
  width: 700px;
  color: white;
  border: none;
  margin-left: 30px;

  &::placeholder {
    color: lightgray;
    font-size: 18px;
  }
`;

const BtnClose = styled.button`
  border: none;
  background-color: #6e7ce9;
  width: 70px;
  height: 70px;
  cursor: pointer;
  font-size: 16px;
  color: white;
`;

const SearchImg = styled.img`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #283ca4;
  padding: 23px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNameWrapper = styled.div`
  margin-right: 25px;
  font-size: 24px;
  font-weight: 600;
`;
