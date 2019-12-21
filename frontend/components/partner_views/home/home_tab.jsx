import React from "react";
import styled from "styled-components";

export default function HomeTab(props) {
  // in these styled definitions, 'props' refers to the props that are passed
  // to the Tab component in the return function of this overall functional
  // component

  const Tab = styled.div`
    border: 1px solid pink;
    display: flex;
    background-color: ${props => (props.active ? "steelblue" : "white")};
  `;

  const Label = styled.div`
    border: 1px solid black;
    align-content: center;
    margin: auto;
  `;

  return (
    <>
      {/* below, props refers to the props passed to the HomeTab
        functional component */}
      <Tab active={props.active}>
        <Label>{props.id}</Label>
      </Tab>
    </>
  );
}
