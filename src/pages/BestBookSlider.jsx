import BookSlider, { LogoSlider } from "@/components/slider/BookSlider";
import SliderItem from "@/components/slider/SliderItem";
import { defaultSliderOptions, flowSliderOptions } from "@/components/slider/sliderOptions";

// 기본 슬라이드
export default function BestBookSlider({ books }) {
    
    return (
        <BookSlider
            items={books}
            options={defaultSliderOptions}
            renderItem={(book) => <SliderItem book={book} />}
        />
    )
}

// 흐르는 슬라이드
export function BookFlowSlider({ books, flow=false }) {
    
    return (
        <LogoSlider
            items={books}
            options={flowSliderOptions}
            flow={flow}
            renderItem={(book) => <SliderItem book={book} flow={flow} />}
        />
    )
}
