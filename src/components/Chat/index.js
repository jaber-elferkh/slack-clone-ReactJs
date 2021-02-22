import styled from 'styled-components';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import { selectRoomId } from '../../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase/firebase';
import Message from './Message';
import { useEffect, useRef } from 'react';

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>{`# ${roomDetails?.data().name}`}</strong>
              </h4>
              <StarOutlineRoundedIcon className="star" />
            </HeaderLeft>
            <HeaderRight>
              <PersonAddOutlinedIcon />
              <InfoOutlinedIcon className="info" />
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}

            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-x: scroll;
  background-color: #1a1d21;
`;

const Header = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #2b2a2f;
  background-color: #1a1d21;
  color: #ababad;
  padding: 22px 20px;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > h4 {
    font-size: 18px;
    margin-right: 10px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > .info {
    margin-left: 20px;
  }
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div`
  /* border: 2px solid red; */
  padding-bottom: 160px;
`;
