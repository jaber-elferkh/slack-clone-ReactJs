import React from 'react';
import styled from 'styled-components';

import { db } from '../../../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const SideBarOption = ({ title, Icon, addChannelOption }) => {
  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      <SidebarOptionLeft>
        {Icon && <Icon style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>#</span> {title}
          </SidebarOptionChannel>
        )}
      </SidebarOptionLeft>
      {/* <SidebarOptionRight>
        <MoreVertTwoToneIcon />
        <AddIcon />
      </SidebarOptionRight> */}
    </SidebarOptionContainer>
  );
};

export default SideBarOption;

const SidebarOptionContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ababad;
  cursor: pointer;
`;

const SidebarOptionLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0.7;
  > h3 {
    font-weight: 400;
    font-size: 14px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 8px 10px;
  font-weight: 300;

  > span {
    /* border: 2px solid red; */
    padding: 5px 10px;
  }
`;
