import Input from '../assets/css/Input.module.css';
import styled from "styled-components";


const InputTextFiled = ({placeHolderText, btnText, onClickFn, onChangeFn, inputname = "", inputvalue = ""}) => {

    const PLACEHOLDERTEXT = placeHolderText; // 안내문구
    const BTNTEXT = btnText; // 버튼이름
    const ONCLICKFN = onClickFn; // 이벤트
    const ONCHANGE = onChangeFn; // 이벤트
    const NAME = inputname;
    const VALUE = inputvalue;

    
    return (
        <InputBox>
            <input type="text" 
                name={NAME} 
                value={VALUE} 
                onChange={ONCHANGE} 
                placeholder={PLACEHOLDERTEXT} 
                className={`${Input.inputText}`}
            />
            <button onClick={ONCLICKFN}>{btnText}</button>
        </InputBox>
    )
}

const InputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > input {
        min-width: auto;
        flex: 1 1 auto;
    }

    & > button {
        width: auto;
        min-width: 80px;
        height: 32px;
        background-color: #111;
        color: #fff;
        line-height: .925;
        font-size: 14px;
        font-weight: 700;
    }

    & > input ~ button {
        margin-left: 10px;
    }
`

export default InputTextFiled;