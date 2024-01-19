import sunImage from '@/assets/fadein_img.svg'
import { Text } from '@/components/atoms/Text'

import { PageContainer } from '../../molecules/PageContainer'
import { HeroContainer, HeroFigure, HeroTextContainer } from './styles'

export const Hero = () => {
  return (
    <PageContainer background="header" pad="noPadTop">
      <HeroContainer>
        <HeroTextContainer>
          <Text
            color="title"
            size="titleXL"
            font="baloo"
            weight="xbold"
            lineHeight="tall"
          >
            Discover the real-time weather!
          </Text>
          <Text color="subtitle" size="xl" lineHeight="tall" weight="bold">
            Plan your day with confidence, be prepared for any weather changes.
          </Text>
        </HeroTextContainer>
        <HeroFigure>
          <img src={sunImage} alt="" />
        </HeroFigure>
      </HeroContainer>
    </PageContainer>
  )
}
