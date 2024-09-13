import { defineStyle , defineStyleConfig, cssVar} from '@chakra-ui/react'

const $startColor = cssVar('skeleton-start-color')
const $endColor = cssVar('skeleton-end-color')


const baseStyle = {
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.300",
};

export const Skeleton = defineStyleConfig({baseStyle})
