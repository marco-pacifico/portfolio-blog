import styled from 'styled-components'

export default function Home() {
  return (
    <>
        <Name>Hello, I'm Marco Pacifico</Name>
        <Welcome>Welcome to my design portfolio and blog</Welcome>
    </>
  )
}

const Name = styled.h1`
  font-size: var(--fontSizeFluid9);
  font-weight: 300;
`
const Welcome = styled.p`
  font-size: var(--fontSizeFluid5);
  font-weight: 400;
`