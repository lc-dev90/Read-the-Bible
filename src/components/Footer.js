import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Foot> Made by Holy Spirit and Luiz Cláudio</Foot>;
};

export default Footer;

const Foot = styled.footer`
  background: #241f1f;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
`;
