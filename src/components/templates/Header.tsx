import { MapPin } from 'phosphor-react'

import { Location } from '@/components/atoms/Location'
import { Text } from '@/components/atoms/Text'

import { PageContainer } from '../molecules/PageContainer'

interface HeaderProps {
  cityName: string | undefined
}

export const Header = ({ cityName }: HeaderProps) => {
  return (
    <PageContainer as="header">
      <Text size="l" font="baloo" weight="xbold" color="logo" as="h1">
        SkySync
      </Text>
      {cityName && (
        <Location>
          <MapPin size={16} weight="fill" /> {cityName}
        </Location>
      )}
    </PageContainer>
  )
}
