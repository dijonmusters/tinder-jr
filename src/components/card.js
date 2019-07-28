import React from 'react';
import styled from 'styled-components';

const UnstyledButton = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: 'transparent';
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
  &:focus-visible {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }
  &:focus {
    outline: none;
  }
`;

const Face = styled(UnstyledButton)`
  height: 100%;
  flex: 1;
  text-align: center;
  background-color: ${props => (props.active ? '#aaa' : 'transparent')};
  font-size: 3rem;
`;

const Faces = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
`;

const Container = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.1875rem 0px;
`;

const Img = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
`;

const Card = props => {
  return (
    <Container>
      <Img src={props.baby.url} />
      <Faces>
        <Face onClick={() => props.judge('dislike')}>&#128169;</Face>
        <Face onClick={() => props.judge('like')}>&#128526;</Face>
      </Faces>
    </Container>
  );
};

export default Card;
