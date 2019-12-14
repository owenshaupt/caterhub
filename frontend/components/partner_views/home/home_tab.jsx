import React from "react";
import styled from "styled-components";

export default function HomeTab(props) {
  const Tab = styled.div`
    border: 1px solid pink;
    display: flex;
  `;

  const Label = styled.div`
    border: 1px solid black;
    align-content: center;
    margin: auto;
  `;

  return (
    <>
      <Tab>
        <Label>{props.label}</Label>
      </Tab>
    </>
  );
}
