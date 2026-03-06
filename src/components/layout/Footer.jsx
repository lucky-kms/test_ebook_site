import React, { useState } from "react";
// component
import SelectBox from "../SelectBox";
import { familyOptions, snsOptions } from "../../datas/selectData";

// style, images
import { styled } from "styled-components";
import logoWhite from "@/assets/images/logo-white.svg";

export default function Footer() {

    const [family, setFamily] = useState("placeholder");
    const [sns, snsOption] = useState("placeholder")

    const handleChange = e => {
        const selectValue = e.target.value;
        setFamily(selectValue);
    }

    const handleChangeSns = e => {
        const selectValue = e.target.value;
        snsOption(selectValue);
    }

    return (
        <StyledFooter>
            <div className="inner">
                <div className="footer_left">
                    <img src={logoWhite} className="footer_logo" />

                    {/* <div className="footer_menu">

                    </div> */}

                    <p>
                        <span>주)교보문고 서울특별시 종로구 종로1</span>
                        <span>대표이사 : 허정도</span>
                        <span>사업자등록번호 : 102-81-11670</span>
                        <span>사업자정보확인대표전화(발신자부담) : 1544-1900(교보문고) ・ 1661-1112(핫트랙스)</span>
                        <span>FAX : 0502-987-5711(지역번호 공통)서울특별시 </span>
                        <span>통신판매업신고번호 : 제 653호</span>
                    </p>
                </div>

                <div className="footer_right">
                    <div className="right_inner">
                        <SelectWrap>
                            <SelectBox
                                options={familyOptions}
                                name="footerFamilySel1"
                                value={family}
                                placeholderText="family site"
                                onChange={handleChange}
                            />
                        </SelectWrap>

                        <SelectWrap>
                            <SelectBox
                                options={snsOptions}
                                name="footerSnsSel2"
                                value={sns}
                                placeholderText="SNS 바로가기"
                                onChange={handleChangeSns}
                            />
                        </SelectWrap>
                    </div>
                </div>
                

                <div className="footer_bottom">
                    <p>@ {new Date().getFullYear()} E-BOOK. ALL rigths reserved.</p>                    
                </div>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: var(--bg-b1);
    color: var(--text-w1);
    padding: 50px;
    min-height: 500px;

    & .inner {
        max-width: 1280px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
    }

    & .footer_logo {
        width: 200px;
    }

    & .footer_left {
        max-width: 60%;
    }

    & .footer_right {
        min-width: 40%;

        & .right_inner {
            display: flex;
            align-items: center;
            justify-content: flex-state;
            
            & * + * {
                margin-left: 10px;
            }
        }
    }

    & .footer_bottom {
        width: 100%;

        & p {
            padding: 20px 0;
        }
    }
`;

const SelectWrap = styled.div`
    & select {
        width: 200px;
        height: 32px;
    }
`