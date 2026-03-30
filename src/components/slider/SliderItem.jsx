
import { getCoverUrl } from "@/utils/imageMap";
import styled from "styled-components";
import { divice } from "@/assets/css/breakpoint";

export default function SliderItem({ book, flow }) {
    const {id, title, author, coverSrc, coverAlt, description  } = book;

    return (
        <Card>
            <img src={getCoverUrl(coverSrc)}/>
            {
                flow? (<></>) : (<NabSliderTitle>{title}</NabSliderTitle>)
            }
        </Card>
    )
}

const Card = styled.div`

        & img {
            width: 18rem;
            height: 25.8rem;
        }
    
    @media screen and (${divice.mobile}) {
        & img {
            width: 15rem;
            height: 22.8rem;
        }
    }
`

const NabSliderTitle = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
    padding-top: 1.7rem;

    @media screen and (${divice.mobile}) {
        font-size: 1.6rem;
        font-weight: 700;
        padding-top: 1.7rem;

        & img {
            width: 15rem;
        }
    }
`