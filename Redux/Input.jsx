import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { myAction } from './Action';

export default function Input() {

    const [state, setState] = useState();
    const dispatch = useDispatch();

    function addText(e) {
        setState(e.target.value)
    }

    function Add() {
        dispatch(myAction(state))
    }

    return (
        <div>
            <br />
            <input type="text" value={state} onChange={addText} />
            <button onClick={Add}>Add</button>
        </div>
    )
}
