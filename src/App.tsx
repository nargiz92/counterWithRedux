import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Button from "./Button";
import {
    incrementValueAC,
    InitStType,
    maxValueAC, resetValueAC,
    setValueAC,
    startValueAC
} from "./redux/CounterReducer";
import {AppRootStateType} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const {
        initialValue,
        resetValue,
        startValue,
        maxValue
    } = useSelector<AppRootStateType, InitStType>(state => state.counter)
    const isSettingsError = startValue === maxValue || maxValue < startValue || startValue < 0
    const [editMode, setEditMode] = useState(false)
    let dispatch = useDispatch();
    const onIncrementHandler = () => {

        dispatch(incrementValueAC())
    }
    const onChangeStartValueonInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (!editMode) setEditMode(true)
        dispatch(startValueAC(e.currentTarget.valueAsNumber))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (!editMode) setEditMode(true)
        dispatch(maxValueAC(e.currentTarget.valueAsNumber))
    }

    const onSetValue = () => {
        setEditMode(false)
        dispatch(setValueAC(startValue))

    }
    const onResetValue = () => {
        dispatch(resetValueAC())
    }

    const inputClass = `input ${(startValue >= maxValue || startValue < 0) ? 'errorClass' : ''}`
    return (
        <div className="App">
            <div className={'set'}>
                <div className={'screenInput'}>
                    <p><input type={"number"} onChange={onChangeStartValueonInput} value={startValue}
                              className={inputClass}/></p>
                    <p><input type={"number"} onChange={onChangeMaxValue} value={maxValue} className={inputClass}/></p>
                </div>
                <div className={'setButton'}>
                    <Button callback={onSetValue} title={'Set'} disabled={isSettingsError || !editMode}/>
                </div>
            </div>
            <div className={'counter'}>
                <div className={'screenOfCounter'}>
                    <h1 className={(maxValue === initialValue || isSettingsError) ? 'red' : 'regularClass'}>{isSettingsError ? 'Incorrect values' : editMode ? 'enter values and press "set"' : initialValue}</h1>
                </div>
                <div className={'buttonPlaces'}>
                    <Button callback={onIncrementHandler} title={'inc'}
                            disabled={maxValue === initialValue || editMode}/>
                    <Button callback={onResetValue} title={'reset'} disabled={startValue === initialValue || editMode}/>
                </div>
            </div>
        </div>
    );
}

export default App;
