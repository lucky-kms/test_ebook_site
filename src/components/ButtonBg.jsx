import React from 'react';
import ButtonStyle from '../assets/css/Button.module.css';

const ButtonBg = ({text, btnSize = 'btn-md', textColor, bgColor}) => {

    const TEXT = text;
    const BTN_SIZE = btnSize;
    const TEXT_COLOR = textColor;
    const BG_COLOR = bgColor;

    return (
        <button type="button" className={`${ButtonStyle.btn} ${ButtonStyle[BTN_SIZE]} ${ButtonStyle[TEXT_COLOR]} ${ButtonStyle[BG_COLOR]}`}>
            <span>{TEXT}</span>
        </button>
    )
}

export default ButtonBg;