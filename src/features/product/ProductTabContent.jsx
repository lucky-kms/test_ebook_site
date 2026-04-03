import { Link } from "react-router-dom";
import styled from "styled-components";
import { detailEvent, benefitEvent, saleEvent} from "./EventProductData";


const CardList = ({items}) => {
    return (
        <ul className="cardBlock">
            {
                items.map((item) => {
                    return (
                    <li key={item.id}>
                        <Link to="/event/eventbook1" className="cardRound">
                            <h3>{item.content}</h3>
                            <p>{item.sub}</p>
                        </Link>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default function ProducttabContent({ activeKey }) {
    if(activeKey === "detail") {
        
        return (
            <FlexEvnetBlock>
                <h2>쇼핑 지원금 받고 구매하세요.</h2>
                <div className="cardBlockWrap">
                    <CardList items={detailEvent} />
                </div>
            </FlexEvnetBlock>
        )
        
    }

    if(activeKey === "review") {
        return (
            <FlexEvnetBlock>
                <h2>지금 제일 인기 있는 이벤트를 만나보세요.</h2>
                <div className="cardBlockWrap">
                    <CardList items={benefitEvent} />
                </div>
            </FlexEvnetBlock>
        )
    }

    if(activeKey === "qna") {
        return  (
            <FlexEvnetBlock>
                <h2>결제 수단 별 혜택 확인하고<br />알뜰한 쇼핑을 즐겨보세요!</h2>
                <div className="cardBlockWrap">
                    <CardList items={saleEvent} />
                </div>
            </FlexEvnetBlock>
        )
    }

    return null;
}

const FlexEvnetBlock = styled.div`
    & h2 {
        text-align: center;
        font-size: 2.2rem;
        font-weight: 700;
        color: #333;
        padding: 7rem 2rem 4rem;
    }
    
    & .cardBlock{
        display: flex;
        align-items: center;
        justify-content:
        space-between;
        flex-wrap: wrap;
        font-size: 1.4rem;
        gap: 2rem;
    }

    & .cardBlock>li{
        width: calc(100% / 2 - 1rem);
        border:1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        
        & .cardRound {
            display: block;
            padding: 1rem;
            background-color: #fefefe;
        }

        & h3 {
            font-size: 1.6rem;
            font-weight: 700;
            padding-bottom: 1rem ;
        }
    }
`