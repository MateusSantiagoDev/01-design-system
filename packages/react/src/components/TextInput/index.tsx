import { ComponentProps, forwardRef, ElementRef } from 'react'
import * as S from './styles'

export interface TextInputProps extends ComponentProps<typeof S.Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof S.Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <S.Container>
        {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input ref={ref} {...props} />
      </S.Container>
    )
  },
)

TextInput.displayName = 'TextInput'
