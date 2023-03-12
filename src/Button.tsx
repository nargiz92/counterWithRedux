import React from 'react';
import s from './button.module.css'

type ButtonPropsType={
    callback:()=>void
    title:string
    disabled:boolean
}
const Button = (props:ButtonPropsType) => {
   const onClickHandler=()=>{
       props.callback()
   }

    return (
        <div>
            <button onClick={onClickHandler} disabled={props.disabled} className={s.button}>{props.title}</button>
        </div>
    );
};

export default Button;