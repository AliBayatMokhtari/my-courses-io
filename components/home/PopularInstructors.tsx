"use client"

import { Box, Grid, GridItem, Skeleton } from "@chakra-ui/react"
import { HomePageSection } from "./HomePageSection"
import { CourseGridItem } from "./CourseGridItem"
import { useEffect, useState } from "react"
import { PopularInstructorGridItem } from "./PopularInstructorGridItem"
import { Swiper, SwiperSlide } from "swiper/react"

const popularInstructors = [
	{
		imgUrl: "/instructor.png",
		title: "Alexander Bastian",
		expertise: "Expert Mobile Engineer",
	},
	{
		imgUrl: "/instructor.png",
		title: "Alexander Bastian",
		expertise: "Expert Mobile Engineer",
	},
	{
		imgUrl: "/instructor.png",
		title: "Alexander Bastian",
		expertise: "Expert Mobile Engineer",
	},
	{
		imgUrl: "/instructor.png",
		title: "Alexander Bastian",
		expertise: "Expert Mobile Engineer",
	},
]

export function PopularInstructors() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(false)
	}, [])

	const content = loading ? (
		<Grid
			templateColumns="repeat(3, 1fr)"
			gap={5}
			mt={4}
		>
			{Array.from({ length: 3 }).map((_, idx) => (
				<GridItem
					w="100%"
					key={idx}
				>
					<Skeleton
						width="100%"
						height={181}
						borderRadius={23}
					/>
				</GridItem>
			))}
		</Grid>
	) : (
		<Grid
			templateColumns="repeat(4, 1fr)"
			gap={5}
			mt={4}
		>
			{popularInstructors.map((instructor, idx) => (
				<GridItem
					w="100%"
					key={idx}
				>
					<PopularInstructorGridItem {...instructor} />
				</GridItem>
			))}
		</Grid>
	)

	return (
		<HomePageSection
			title="Popular Instructor"
			subtitle="We know the best things for You.  Top picks for You."
		>
			<Box hideBelow={"md"}>{content}</Box>
			<Box
				hideFrom={"md"}
				mt={4}
			>
				<Swiper
					spaceBetween={8}
					slidesPerView={1.5}
					breakpoints={{
						576: {
							slidesPerView: 2.5,
						},
					}}
					slidesPerGroup={2}
					freeMode
				>
					{popularInstructors.map((instructor, idx) => (
						<SwiperSlide key={idx}>
							<PopularInstructorGridItem {...instructor} />
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</HomePageSection>
	)
}
