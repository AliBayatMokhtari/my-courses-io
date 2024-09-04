"use client"

import { Link } from "@chakra-ui/next-js"
import {
  Flex,
  Spacer,
  Container,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react"
import Image from "next/image"

export function Header() {
  return (
    <Container py="8px">
      <Flex alignItems="center">
        <Flex
          alignItems="center"
          gap="6.8px"
        >
          <Image
            src="logo.svg"
            alt="MyCourses.io"
            priority
            width={43}
            height={43}
          />
          <Heading
            fontSize="17.79px"
            fontWeight="extrabold"
          >
            MyCourse.io
          </Heading>
        </Flex>
        <Spacer />
        <Input
          bg="white.90"
          placeholder="Search for course"
          width="400px"
        />
        <Spacer />
        <Flex
          alignItems="center"
          gap="20px"
        >
          <Link href="#">Become Instructor</Link>
          <Button
            variant="outline"
            colorScheme="black"
            size="sm"
            w="63px"
          >
            Login
          </Button>
          <Button
            size="sm"
            w="99px"
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}
