import * as S from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

// {Array.from({ length: size }, (_, index) => index + 1)} = criando
// um array do zero
export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <S.Container>
      <S.label>
        Passo {currentStep} de {size}
      </S.label>

      <S.Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return <S.Step key={step} active={currentStep >= step} />
        })}
      </S.Steps>
    </S.Container>
  )
}

MultiStep.displayName = 'MultiStep'
