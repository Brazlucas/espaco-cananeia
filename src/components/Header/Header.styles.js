// import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2px 50px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  z-index: 9999;
  background-color: #000;

  -webkit-transition: all 0.5s ease;
  -moz-transition: position 10s;
  -ms-transition: position 10s;
  -o-transition: position 10s;
  transition: all 0.5s ease;

  @media screen and (max-width: 767px) {
    padding: 1px 1px;
  }

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    animation: smoothScroll 1s forwards;
  }

  .noFixed {
    position: relative !important;
    top: 0;
    left: 0;
    animation: smoothScroll 1s forwards;
  }
  @keyframes smoothScroll {
    0% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const Logo = styled.img`
  width: 110px;
  height: 110px;

  @media screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderItem = styled.div`
  font-family: Times;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  transition: 0.6s;
  border-bottom: 2px solid transparent;
  -webkit-transform:translateY(0px);
  -moz-transform:translateY(0px);
  transform:translateY(0px) -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  :hover {
    -webkit-transform:translateY(-200%);
    -moz-transform:translateY(-200%);
    transform:translateY(-20%);
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    transition: 0.6s;
    border-bottom: 2px solid #E0B246;
  }
`;

export const Action = styled.div`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background: #E0B246;
  border: 2px solid #E0B246;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const IconsWrapper = styled.div`
  color: #fff;
  margin-right: 15px;
  padding: 1px;
  gap: 10px;
  display: flex !important;
`

export const OutlinedAction = styled.div`
  padding: 10px 15px;
  font-size: 14px;
  font-family: Times;
  border-radius: 4px;
  background: #000;
  border: 2px solid #E0B246;
  color: #fff;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.5s;
  -webkit-transform:translateY(0px);
  -moz-transform:translateY(0px);
  transform:translateY(0px) -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: #C79E36;
    border: 2px solid #E0B246;
    color: #fff;
    transition: 0.5s;
    opacity: 1;
    -webkit-transform:translateY(-200%);
    -moz-transform:translateY(-200%);
    transform:translateY(-10%);
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
`;