"use client"

import { Link } from "@chakra-ui/next-js"
import { IoIosMenu } from "react-icons/io"
import { MdShoppingCart } from "react-icons/md"
import { IoIosNotifications } from "react-icons/io"
import { MdOutlineTimelapse } from "react-icons/md"
import {
	Flex,
	Container,
	Heading,
	Input,
	Button,
	Box,
	useBreakpointValue,
} from "@chakra-ui/react"
import Image from "next/image"

const ICON_SIZE = 20
const ICON_COLOR = "#1B1B1B"
const PRIMARY_COLOR = "var(--chakra-colors-brand-500)"

export function Header() {
	const iconSize = useBreakpointValue({
		base: ICON_SIZE,
		md: 24,
	})

	const iconProps = {
		color: ICON_COLOR,
		size: iconSize,
		opacity: 0.6,
	}

	return (
		<Container py="8px">
			<Flex
				justifyContent={"space-between"}
				alignItems={"center"}
				borderBottom={{ base: "1px solid", md: "none" }}
				borderBottomColor="rgba(0, 0, 0, 0.05)"
				h={"56px"}
				px={4}
			>
				<Flex
					alignItems={"center"}
					gap={3}
				>
					<Box hideFrom={"md"}>
						<IoIosMenu
							color={PRIMARY_COLOR}
							size={25}
						/>
					</Box>
					<Flex
						gap={2}
						alignItems={"center"}
					>
						<Image
							src={"/logo.svg"}
							width={37}
							height={37}
							alt="my courses io"
						/>
						<Heading fontSize={15.37}>MyCourse.io</Heading>
					</Flex>
				</Flex>
				<Flex
					hideBelow={"md"}
					flex={1}
					justifyContent={"center"}
				>
					<Input
						placeholder="Search for course"
						width={"100%"}
						maxWidth={"400px"}
						backgroundColor={"white.90"}
					/>
				</Flex>
				<Flex
					alignItems={"center"}
					gap={4}
				>
					<Link
						href="#"
						hideBelow={"lg"}
					>
						Become Instructor
					</Link>
					<MdShoppingCart {...iconProps} />
					<Box hideFrom={"lg"}>
						<IoIosNotifications {...iconProps} />
					</Box>
					<Button
						variant="outline"
						hideBelow={"lg"}
					>
						Login
					</Button>
					<Button
						leftIcon={<MdOutlineTimelapse />}
						hideBelow={"lg"}
					>
						Sign Up
					</Button>
				</Flex>
			</Flex>
		</Container>
	)
}
