import React, { useState } from "react";
import { connect } from "react-redux";
import { setActivity } from "../redux/actions";
import { setName } from "../redux/actions";

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
        <>
            <h1>What is the cat doing now??</h1>
            <p>{name} is {activity}.</p>
            <button type="button" onClick={() => setActivity("eating")}>
                Eating
            </button>
            <button type="button" onClick={() => setActivity("napping")}>
                Napping
            </button>
            <button type="button" onClick={() => setActivity("playing")}>
                Playing
            </button>
            <br />
            <input
                onChange={e => _updateInput(e.target.value)}
                value={inputName}
            />
            <button className="update-name" onClick={_handleUpdateName}>
                Update Cat
            </button>
        </>
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