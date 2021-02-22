import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <MenuIcon className="menu" />
        <AccessTimeIcon className="time" />
      </HeaderLeft>

      <HeaderSearch>
        <input type="text" placeholder="Search Slack" />
      </HeaderSearch>

      <HeaderRight>
        <HeaderAvatar />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  /* outline: 2px solid red; */
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  color: #ababad;

  > .time {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderSearch = styled.div`
  /* outline: 2px solid red; */
  flex: 0.4;
  border-radius: 5px;
  background-color: #1f1e23;
  border: 1px solid #ababad;
  display: flex;
  align-items: center;
  padding: 5px 10px;

  > input {
    background-color: transparent;
    border: none;
    outline: none;
    min-width: 30vw;
  }

  > input[placeholder] {
    color: #ababad;
  }
`;

const HeaderRight = styled.div`
  /* outline: 2px solid red; */
  flex: 0.3;
  margin-right: 20px;
  align-items: flex-end;
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-left: auto;
  width: 40px;
  height: 40px;

  :hover {
    opacity: 0.5;
  }
`;
