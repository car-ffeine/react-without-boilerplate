import { useState } from 'react';
import { styled } from 'styled-components';

const Button = styled.button`
  z-index: 999;
  position: fixed;
  top: 200px;
  left: 100px;
`;

const ComponentForTest = () => {
  const [text, setText] = useState('ㅎㅇㅎㅇ');

  const onClick = () => {
    setText('하이하이');
  };

  return <Button onClick={onClick}>{text}</Button>;
};

export default ComponentForTest;
