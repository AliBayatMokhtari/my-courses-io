import { extendTheme } from "@chakra-ui/react"
import { Button } from "./styles/button.styles"
import { Container } from "./styles/container.styles"
import { Input } from "./styles/input.styles"

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-gilroy)",
    body: "var(--font-gilroy)",
  },
  colors: {
    white: {
      90: "#F9F9F9",
    },
    brand: {
      "500": "#3DCBB1",
    },
  },
  components: {
    Container,
    Button: Button,
    Input: Input,
  },
})
