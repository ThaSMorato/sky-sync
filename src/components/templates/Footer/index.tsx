import { GithubLogo, LinkedinLogo } from 'phosphor-react'

import { Text } from '@/components/atoms/Text'
import { PageContainer } from '@/components/molecules/PageContainer'

import { FooterActions, FooterAnchor, FooterCotainer } from './styles'

export const Footer = () => {
  return (
    <PageContainer as="footer" pad="noPadTop">
      <FooterCotainer>
        <Text size="l" font="roboto" weight="bold" color="footer">
          © 2024, Desenvolvido por Thales Morato
        </Text>
        <FooterActions>
          <FooterAnchor
            target="_blank"
            href="https://www.linkedin.com/in/thalesmorato/"
            rel="nofollow noopener norefence"
          >
            <LinkedinLogo size={32} />
          </FooterAnchor>
          <FooterAnchor
            target="_blank"
            href="https://github.com/ThaSMorato"
            rel="nofollow noopener norefence"
          >
            <GithubLogo size={32} />
          </FooterAnchor>
        </FooterActions>
      </FooterCotainer>
    </PageContainer>
  )
}
