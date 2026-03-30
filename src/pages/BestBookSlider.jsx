import BookSlider, { LogoSlider } from "@/components/slider/BookSlider";
import SliderItem from "@/components/slider/SliderItem";


export default function BestBookSlider({ books, options }) {
    
    return (
        <BookSlider
            items={books}
            options={options}
            renderItem={(book) => <SliderItem book={book} />}
        />
    )
}

export function BookFlowSlider({ books, options, flow=false }) {
    
    return (
        <LogoSlider
            items={books}
            options={options}
            flow={flow}
            renderItem={(book) => <SliderItem book={book} flow={flow} />}
        />
    )
}
