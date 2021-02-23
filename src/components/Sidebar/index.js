import React from 'react';
import styled from 'styled-components';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import SideBarOption from './SidebarOption';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import AddIcon from '@material-ui/icons/Add';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
  const [channels] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h3>FWC</h3>
          <ArrowDropDownTwoToneIcon className="arrowDown" />
        </SidebarInfo>
        <CreateOutlinedIcon />
      </SidebarHeader>

      <SideBarOption title="Threads" Icon={SendOutlinedIcon} />
      <SideBarOption title="Mentions & Reactions" Icon={LabelOutlinedIcon} />
      {/* <Line className="line"></Line> */}
      <SideBarOption title="Channels" Icon={ArrowRightRoundedIcon} />
      {/* <Line className="line"></Line> */}
      <SideBarOption title="Add Channel" Icon={AddIcon} addChannelOption />

      {channels?.docs.map((doc) => (
        <SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  /* outline: 2px solid red; */
  flex: 0.3;
  border-top: 1px solid #2b2a2f;
  background-color: var(--slack-color);
  color: #fefefe;
  max-width: 260px;
`;

const Line = styled.div`
  border: 1px solid #2b2a30;
  margin: 10px 0;
`;

const SidebarHeader = styled.div`
  /* outline: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #2b2a2f;

  > .MuiSvgIcon-root {
    background-color: white;
    color: var(--slack-color);
    padding: 7px;
    border-radius: 50px;
    cursor: pointer;
  }
`;

const SidebarInfo = styled.div`
  /* outline: 2px solid red; */
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;

  > h3 {
    font-size: 20px;
  }
`;
