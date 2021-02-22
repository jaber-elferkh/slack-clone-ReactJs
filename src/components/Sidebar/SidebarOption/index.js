import React from 'react';
import styled from 'styled-components';

import { db } from '../../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../../../features/appSlice';

const SideBarOption = ({ title, Icon, addChannelOption, id }) => {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

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

  :hover {
    color: white;
  }
`;

const SidebarOptionLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0.7;
  > h3 {
    font-weight: 600;
    font-size: 13px;
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
