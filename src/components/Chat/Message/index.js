import styled from 'styled-components';

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />

      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  /* border: 2px solid red; */
  margin: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;

  > img {
    height: 50px;
    border-radius: 8px;
    margin-right: 10px;
  }
`;
const MessageInfo = styled.div`
  > h4 {
    font-weight: 600;
  }

  > h4 > span {
    color: grey;
    font-size: 10px;
    font-weight: 400;
    margin-left: 5px;
  }

  > p {
    font-weight: 400;
    margin-top: 5px;
  }
`;
