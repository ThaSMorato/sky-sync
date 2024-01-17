import { ComponentProps, ReactNode } from 'react'

import { PageContainer as PageComponentContainer, PageContent } from './styles'

interface PageContainerInterface
  extends ComponentProps<typeof PageComponentContainer> {
  children: ReactNode
  as?: string
}

export const PageContainer = ({
  children,
  ...props
}: PageContainerInterface) => {
  return (
    <PageComponentContainer {...props}>
      <PageContent>{children}</PageContent>
    </PageComponentContainer>
  )
}
