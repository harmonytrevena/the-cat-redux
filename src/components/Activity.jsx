import React, { useState } from "react";
import { connect } from "react-redux";
import { setActivity } from "../redux/actions";
import { setName } from "../redux/actions";

// Component Styling

import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  :disabled {
    opacity: 0.5;
  }
  :hover {
    box-shadow: 0 0 10px grey;
  }

  ${props => props.primary && css`
    background: black;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "black"};
  background: whitesmoke;
  border: none;
  border-radius: 3px;
`;

// Functional Component Starts Here

const Activity = ({ name, activity, setActivity, setName }) => {
    const [inputName, setInputName] = useState("");

    const _updateInput = input => {
        setInputName(input);
    };

    const _handleUpdateName = () => {
        setName(inputName)
        setInputName('')
    };

    return (
        <Container>
            <h1>What is the cat doing now??</h1>
            <p>{name} is {activity}.</p>
            <Button type="button" onClick={() => setActivity("eating")}>
                Eating
            </Button>
            <Button type="button" onClick={() => setActivity("napping")}>
                Napping
            </Button>
            <Button type="button" onClick={() => setActivity("playing")}>
                Playing
            </Button>
            <br />
            <Input
                onChange={e => _updateInput(e.target.value)}
                value={inputName}
            />
            <Button primary onClick={_handleUpdateName}>
                Update Cat
            </Button>
        </Container>
    )
};

const mapStateToProps = state => {
    const { name, activity } = state;
    return (
        name, 
        activity
    );
};

export default connect(mapStateToProps, {setActivity, setName})(Activity);