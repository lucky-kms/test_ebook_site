import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link, useOutletContext,  } from 'react-router-dom';

// 컴포넌트
import ButtonBg from '../components/ButtonBg';
import CardBox from '../components/CardBox';
import ListTable from '../components/ListTable';
import BookListInline from "../components/BookListInline";
import CardStyled from "../assets/css/Card.module.css";
import InputTextFiled from '../components/InputTextFiled';
import MenuList from "../components/layout/Gnb";
import Select from "../components/Select";
// import MainComponent from '../pages/MainComponent';
import BestBookSlider, { BookFlowSlider } from "./BestBookSlider";

// 이미지, 속성, 스타일
import styled from 'styled-components';
import cardImg from '../assets/images/home-issuing2.svg';
import { divice } from '../assets/css/breakpoint';

// 페이지
import Pay from '../pages/Pay';

// 데이타, json, js
import { books } from "../datas/bestBooks";
import { newBook, eventBook, flowLogo } from "../datas/bookEventData";
import Productpage from "./Productpage";



// data
const users = [
    { id: "u1", name: "토큰 이코노미", price: "40,000", createAt: "2026-02-01"},
    { id: "u2", name: "한 권의 디지털 자산",  price: "20,000", createAt: "2026-01-18"},
    { id: "u3", name: "셔터우의 세 자매",  price: "23,000", createAt: "2026-01-17"},
    { id: "u4", name: "어른의 기분 관리법",  price: "30,000", createAt: "2026-01-16"},
    { id: "u5", name: "코스피 1만 넥스트 레벨",  price: "25,000", createAt: "2026-01-15"},
    { id: "u6", name: "자몽 살구 클럽",  price: "30,000", createAt: "2026-01-14"},
    { id: "u7", name: "싯다르타",  price: "20,000", createAt: "2026-01-13"},
    { id: "u8", name: "주식 투자 무작정 따라하기",  price: "20,000", createAt: "2026-01-12"},
    { id: "u9", name: "쓰는 사람",  price: "20,000", createAt: "2026-01-11"},
    { id: "u10", name: "미식가의 메뉴판",  price: "20,000", createAt: "2026-01-10"},
    { id: "u11", name: "자작나무 숲",  price: "30,000", createAt: "2026-01-09"},
];

const categoryOptions = [
    { value: "all", label: "전체" },
    { value: "novel", label: "소설" },
    { value: "it", label: "IT" },
    { value: "essay", label: "에세이" },
];

const sortOptions = [
    { value: "latest", label: "최신순" },
    { value: "popular", label: "인기순" },
    { value: "priceLow", label: "가격 낮은순" },
];

// columns
const columns = [
    {
        id : "name",
        header: "이름",
        sortable: true,
        accessor: (r) => r.name,
    },
    {
        id : "price",
        header: "가격",
        sortable: true,
        accessor: (r) => r.price,
        align: "right"
    },
    {
        id: "createAt",
        header: "대여일",
        sortable: true,
        sortValue: r => new Date(r.createAt),
        cell: r => new Date(r.createAt).toLocaleDateString(),
    },
]

// function
const Main = () => {
    const { setActiveTarget } = useOutletContext();

    const bestRef = useRef(null);
    const newRef = useRef(null);
    const eventRef = useRef(null);
    const payRef = useRef(null);
    const fundingRef = useRef(null);

    useEffect(() => {
        const sections = [
            bestRef.current, 
            newRef.current, 
            eventRef.current, 
            payRef.current, 
            fundingRef.current, 
        ].filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

                if(visibleEntry?.target?.id) {
                    setActiveTarget(visibleEntry.target.id);
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0.2, 0.4, 0.6],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, [setActiveTarget])

    const styleCustom = {
        textAlign: "center"
    }

    const clickPopup = () => {
        alert("클릭 팝업 노출");
    }

    // useState
    const [inputVal, setInput] = useState({
        name: "username",
        value: "",
    });

    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("latest");

    const query = useMemo(() => ({category, sort}), [category, sort])

    // 구조 분해 변수 값 할당
    const {name, value} = inputVal;

    const onChangeFn = (e) => {
        setInput({
            ...inputVal,
            value: e.target.value
        });
    }

    return (
        <>
            <Wrap>
            
                <Section id="best_book" ref={bestRef}>
                    <div className="inner">
                        <div style={{position: "relative", zIndex:10,}}>
                            <TitleH2>안녕하세요 E-BOOK 도서 대여 오신것을 환영합니다.</TitleH2>

                            {/* <Text_sub></Text_sub> */}

                            <CardFlex>  {/** 회원가입 페이지 연결, 이벤트 페이지 연결 */}
                                <ButtonBg text="회원가입" btnSize='btn_md' textColor='text_white' bgColor='bg_black' />
                                <ButtonBg text="이벤트" btnSize='btn_md' textColor='text_bg' bgColor='bg_white' />
                            </CardFlex>

                {/* 도서 공간 , 버튼 기능 - 좋아요, 구독, 북마크, 인기아이템 */}
                            <CardFlex className="section01Card">
                                {/* card1 */}
                                <CardBox text="신규도서 & 검색"> 
                                    <InputTextFiled
                                        inputname={name}
                                        inputvalue={value}
                                        onClickFn={clickPopup} 
                                        onChangeFn={onChangeFn}
                                        placeHolderText={"검색명을 입력해주세요"} 
                                        btnText={"검색"} 
                                    />

                                    <p><span style={{display:"inline-block", fontSize:"1.6rem", fontWeight:"700", paddingTop: "1rem"}}> 입력값 확인 :</span>{` ${value}`}</p>

                                    <div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h3 style={{fontSize:"1.6rem"}}>이 달의 추천도서 BEST 3</h3>
                                        <BookListInline books={books} />
                                        
                                        {/* <p>1번 - 대여, 구매 ( 클릭시 대여, 구매 팝업 띄우기)</p>
                                        <p>2번 - 대여, 구매</p>
                                        <p>3번 - 대여, 구매</p> */}
                                    </div>
                                </CardBox>
                                
                                {/* card2 */}
                                <CardBox styleCustom={styleCustom} text="구매 & 결재" subText="상세한 결제 정보, 빠른 정산, 그리고 완벽한 투명성을 통해 결제를 수락하세요." >
                                    <Link to="/pick" style={{display:"inline-block"}}><img src={cardImg} /></Link>
                                </CardBox>

                                {/* card3 */}
                                <CardBox text="대여 목록" subText="대여 목록, 기간을 확인하세요.">
                                    <ListTable
                                        columns={columns}
                                        data={users}
                                        rowKey={(r) => r.id}
                                        pageSize={5}
                                        onRowClick={(row) => console.log("clicked:", row)}
                                    />
                                </CardBox>
                            </CardFlex>

                            {/* <CardFlex>
                                sdsdsdsssssssssssssss
                            </CardFlex> */}
                        </div>

                        {/* BG */}
                        <BgWrap>
                            <div className="bgFront bgY"></div>
                            <div className="bgG"></div>
                            <div className="bgB"></div>
                        </BgWrap>
                    </div>

                    <div className="swiperPosition">
                        <BookFlowSlider 
                            books={flowLogo}
                            flow={true}
                        />
                    </div>
                </Section> 

                <Section id="new_book" ref={newRef}>
                    <TitleH2 style={{position:"relative", zIndex:"1"}}>신상품</TitleH2>
                    {/* 스아이프 연결 , 협찬사 로고 흐르는 텍스트 */ }
                    <div className="inner">
                        <BestBookSlider 
                            books={newBook}
                        />
                    </div>
                </Section>

                <Section id="event_book" ref={eventRef} className="sectionEvent">
                    <TitleH2>이벤트</TitleH2>
                    {/* 이벤트 컴포넌트 new */}
                    <div className="inner">
                        <Productpage />
                    </div>

                    {/* <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                            <Select
                                options={categoryOptions}
                                value={category}
                                onChange={setCategory}
                                placeholder="카테고리"
                                searchable
                            />

                            <Select
                                options={sortOptions}
                                value={sort}
                                onChange={setSort}
                                placeholder="정렬"
                            />
                        <span style={{ marginLeft: 10, opacity: 0.7}}>
                            state : {JSON.stringify(query)}
                        </span>
                    </div> */}
                        
                </Section>

                <Section id="pick" ref={payRef}>
                    <TitleH2>MD Pick</TitleH2>

                    <div className="inner">
                        <BestBookSlider 
                            books={eventBook}
                        />
                    </div>
                </Section>

                <Section id="straight_funding" ref={fundingRef}>
                    <TitleH2>바로펀딩</TitleH2>
                    {/* 펀딩 탭 컴포넌트 new */}
                    <div className="inner">
                        <BestBookSlider 
                            books={newBook}
                        />
                    </div>
                </Section>
            </Wrap>
        </>
    )
}

// style
// 랜딩 페이지 여기 안에서 레이아웃 디자인은 style-components 로 작업
// 컴포넌트 구성 디자인은 module.css 로 구성
const Wrap = styled.div`
    width: 100%;
`

const TitleH2 = styled.h2`
    font-size: 3.2rem;
    font-weight: 700;
    color: #111;
    line-height:1.2;
    padding: 15rem 2rem 5rem;
    text-align: center;

    @media screen and (${divice.tablet}) {
        font-size: 2.2rem;
        padding: 4rem 2rem 3rem;
    }
`;

const Section = styled.section`
    width: 100%;
    height: 100%;
    min-height: 70rem;
    background-color: #fff;
    
    & .inner {
        max-width: 1280px;
        margin: 0 auto;
    }

    & .swiperPosition {
        position: relative;
        z-index: 10;
    }

    &.sectionEvent {
        min-height: 70rem;
        padding:0 0 10rem;
        background-color: #efefef;
    }

    @media screen and (${divice.mobile}) {
        min-height: auto;
        margin: 10rem 0;
        min-height: 30rem;

        &:first-of-type {
            margin:0;
        }

        &.sectionEvent {
            min-height: auto;
            padding:0 0 7rem;
        }
    }
    
`;

const CardFlexCurrent = styled.div`
    display: flex;
    place-items: center;
    gap: 10;
`;

const CardFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > div { 
        margin: 1rem;
        min-height:46.897rem;
        max-height:auto;
    }

    & > button + button {
        margin:0 2rem;
    }

    & ~ & {
        margin-top: 10rem ;
        @media screen and (${divice.tablet}) {
            margin-top: 4rem ;
        }
    }

    &.section01Card {
        @media screen and (${divice.tablet}) {
            flex-wrap: wrap;
        }
    }
`;


const BgWrap = styled.div`
    width:100%;
    height: 140rem;
    position: absolute;
    top:-5rem;
    left: 0;
    overflow: hidden;
    z-index: 1;

    & .bgFront {
        height: 80rem;
        width: 80rem;
        position: absolute;
        border-radius: 50%;
        filter: blur(12rem);
    }

    & .bgY {
        background: rgba(255, 255, 37, .8);
        top: 30rem;
        left: -20rem;
    }
    & .bgG {
        background: rgba(0, 255, 240, .8);
        height: 80rem;
        width: 80rem;
        top: 30rem;
        right: -20rem;
        position: absolute;
        border-radius: 50%;
        filter: blur(12rem);
    }
    & .bgB {
        height: 800px;
        width: 800px;
        position: absolute;
        border-radius: 50%;
        filter: blur(12rem);
        background: #55f5a3;
        top: 40rem;
        left: 50%;
        transform: translateX(-50%);
    }
`

export default Main