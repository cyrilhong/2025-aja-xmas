import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// 定义动画关键帧
const clr = keyframes`
  0% {
    background: #f6f0e4;
    clip-path: polygon(13% 0%, 100% 8%, 100% 100%, 11% 90%);
  }
  50% {
    /* background: red; // 可以选择在中间阶段保持相同的颜色 */
    clip-path: polygon(13% 0%, 100% 8%, 100% 100%, 11% 90%);
  }
  100% {
    background: #FDF0E6;
    clip-path: polygon(13% 0%, 100% 8%, 100% 100%, 13% 100%);
  }
`;

const fold = keyframes`
  0% {
    clip-path: polygon(20% 0, 100% 8%, 100% 100%, 0 93%);
  }
  75% {
    transform: rotateY(-180deg);
  }
  100% {
    background: #FDF0E6;
    transform: rotateY(-180deg);
    clip-path: polygon(20% 0, 100% 8%, 100% 100%, 0 100%);
  }
`;

const fold2 = keyframes`
  0% {
    opacity: 1;
    background: #f6f0e4;
    transform: rotateX(0deg);
  }
  /* 25% {
    opacity: 1;
    background: #f6f0e4;
  }
    */
  50% {
    
  }
  100% {
    background: #ffe7d5;
    transform: rotateX(180deg);
    clip-path: polygon(13% 0%, 100% 8%, 100% 100%, 13% 100%);
  }
`;

const show = keyframes`
  100% {
    opacity: 1;
  }
`;

const grow = keyframes`
  100% {
    width: 170px;
    height: 170px;
    border-radius: 10%;
    left: -10px;
    bottom: -10px;
    background: rgba(137, 179, 181, 0.8);
  }
`;

// 样式化组件
const Stage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  perspective: 800px;
`;

const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  opacity: 0;
  animation: ${show} 0.5s 3s ease forwards;
`;

const Box = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  background: #FDF0E6;
  /* border: 25px solid #F8F3E8; */
  box-shadow: 0 0 40px rgba(0,0,0,0.07);
  overflow: hidden;

  &:nth-child(1) {
    background: #FDF0E6;
    left: 0;
    /* clip-path: polygon(13% 0%, 100% 8%, 100% 100%, 11% 90%); */
    transition: all .5s ease;
    transform-origin: 0 0;
    animation: ${clr} 4s 4s ease forwards;
    clip-path: polygon(13% 0%, 100% 8%, 100% 100%, 11% 90%);
  }

  &:nth-child(2) {
    background: #E7E1DC;
    /* border-radius: 0 5px 0 0; */
    left: 0;
    border-left: none;
    border-bottom: none;
    transform-origin: right;
    clip-path: polygon(20% 0, 100% 8%, 100% 100%, 0 93%);
    transition: all .5s ease;
    /* transform: rotateY(180deg); */
    animation: ${fold} 4s 4s ease forwards;
  }

  &:nth-child(3) {
    /* display: none; */
    background: #f6f0e4;
    top: 0;
    width: 400px;
    transition: all .5s ease;
    transform-origin: bottom;
    clip-path: polygon(13% 0%, 100% 8%, 100% 100%, 11% 90%);
    animation: ${fold2} 4s 4s ease forwards; 
    /* 延遲開始 4s */
  }

  &:nth-child(4) {
    background: #f6f0e4;
    top: 0;
    left: 300px;
    transition: all .5s ease;
    clip-path: polygon( 100% 8%,13% 0%,  11% 90%,100% 100%);
    transform-origin: bottom right;
    animation: ${fold2} 1s 5s ease forwards; 
    /* 延遲開始 4s */
  }
`;


const AnimatedBox = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.background = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Stage>
      <Frame>
        <Box>
        </Box>
        <Box>
        </Box>
        <Box>
        </Box>
        <Box>
        </Box>
      </Frame>
    </Stage>
  );
};

export default AnimatedBox;
