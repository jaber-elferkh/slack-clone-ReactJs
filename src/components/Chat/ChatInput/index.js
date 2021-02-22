import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../../firebase/firebase';
import firebase from 'firebase';

const ChatInput = ({ channelId, channelName, chatRef }) => {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    console.log(channelId);

    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Jaber El-Ferkh',
      userImage:
        'https://cdn.dribbble.com/users/4188520/avatars/normal/9900dca40da904199c378fc64ed92c87.jpg?1580805196',
    });

    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });

    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  /* border: 1px solid red; */
  bottom: 30px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    border: 2px solid yellow;
    position: fixed;
    width: 80%;
    bottom: 30px;
    outline: 0;
    border: 1px solid #ababad;
    border-radius: 5px;
    background-color: var(--slack-color);
    padding: 20px;
  }

  > form > input[placeholder] {
    color: #ababad;
  }

  > form > .MuiButtonBase-root {
    cursor: not-allowed;
    pointer-events: auto;
    display: none;
  }
`;
