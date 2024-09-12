"use client"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { CSSProperties } from "react"

const styles: CSSProperties = {
	padding: "1rem",
}

export default function CategorySlider() {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3.4}
			slidesPerGroup={2}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide style={{ backgroundColor: "blue", ...styles }}>
				Slide 1
			</SwiperSlide>
			<SwiperSlide style={{ backgroundColor: "red", ...styles }}>
				Slide 2
			</SwiperSlide>
			<SwiperSlide style={{ backgroundColor: "yellow", ...styles }}>
				Slide 3
			</SwiperSlide>
			<SwiperSlide style={{ backgroundColor: "brown", ...styles }}>
				Slide 4
			</SwiperSlide>
		</Swiper>
	)
}
