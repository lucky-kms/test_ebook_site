import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import  "swiper/css";
import "@/assets/css/common.css";

export default function BookSlider({ items, options, renderItem }) {
    
    return (
        <Swiper {...options} modules={[Navigation]} className="navSwiperWrap">
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    {renderItem(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export function LogoSlider({ items, options, renderItem, flow }) {
    
    return (
        <Swiper {...options} className="flowSwiperWrap">
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    {renderItem(item, flow)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}


