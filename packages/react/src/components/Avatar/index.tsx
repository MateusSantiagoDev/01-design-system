import { User } from 'phosphor-react'
import * as S from './styles'
import { ComponentProps } from 'react'

export type AvatarProps = ComponentProps<typeof S.Image>

export function Avatar(props: AvatarProps) {
  return (
    <S.Container>
      <S.Image {...props} />

      <S.Fallback delayMs={600}>
        <User />
      </S.Fallback>
    </S.Container>
  )
}

Avatar.displayName = 'Avatar'
