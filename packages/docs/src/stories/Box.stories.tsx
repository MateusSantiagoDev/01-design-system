import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@devsystem-ui/react'

export default {
  title: 'SurFaces/Box',
  component: Box,

  args: {
    children: <Text>Elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
