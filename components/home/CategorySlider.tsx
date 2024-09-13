"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"
import { Box, Center, Skeleton } from "@chakra-ui/react"

const HEIGHT = 37
const WIDTH = 168

function CategoryItem({
	title,
	isActive,
}: {
	title: string
	isActive: boolean
}) {
	return (
		<Center
			height={HEIGHT}
			borderRadius={12}
			border={"1px solid"}
			borderColor={isActive ? "brand.500" : "rgba(27, 27, 27, 0.1)"}
			color={isActive ? "brand.500" : "rgba(27, 27, 27, 0.6)"}
			fontSize={14}
			cursor={"pointer"}
		>
			{title}
		</Center>
	)
}

interface CategorySliderProps {
	items: Array<{ title: string; href: string }>
}

export default function CategorySlider({ items }: CategorySliderProps) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted)
		return (
			<Box
				overflow={"hidden"}
				hideBelow="md"
				width={"100%"}
				sx={{ textWrap: "nowrap" }}
				my={5}
			>
				{Array.from({ length: 10 }).map((_, idx) => (
					<Skeleton
						key={idx}
						height={HEIGHT}
						width={WIDTH}
						borderRadius={12}
						display={"inline-block"}
						ms={idx === 0 ? 0 : 2}
					/>
				))}
			</Box>
		)

	return (
		<Box
			my={5}
			hideBelow={"md"}
		>
			<Swiper
				spaceBetween={8}
				slidesPerView={4.5}
				slidesPerGroup={2}
				freeMode
			>
				{items.map((item, idx) => (
					<SwiperSlide key={idx}>
						<CategoryItem
							title={item.title}
							isActive={idx === 0}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}
