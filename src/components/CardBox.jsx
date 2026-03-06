
import CardStyled from '../assets/css/Card.module.css'


const ButtonBg = ({text, subText, children, styleCustom}) => {

    const TEXT = text; // 제목
    const SUBTEXT = subText;  // 부제목
    const CHILDREN = children // 자식
    const STYLECUSTOM = styleCustom // css, inline-style

    return (
        <div className={`${CardStyled.card_box}`}>
            <span className={`${CardStyled.title_h2}`}>{TEXT}</span>

            <p className={`${CardStyled.title_sub}`}>{SUBTEXT}</p>     
            { children? 
                <div style={STYLECUSTOM}>
                    {CHILDREN}
                </div> 
                : null
            }
        </div>
    )
}

export default ButtonBg;