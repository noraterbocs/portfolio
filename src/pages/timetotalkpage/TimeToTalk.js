import { FlexContainer } from 'components/FlexContainer'
import { Icon } from 'components/Icon'
import { NameHeader } from 'components/NameHeader'
import { Paragraph } from 'components/Paragraph'
import { ProfileImg } from 'components/ProfileImg'
import { SectionContainer } from 'components/SectionContainer'
import { SectionTitle } from 'components/SectionTitle'
import React from 'react'

export const TimeToTalk = () => {
  return (
    <SectionContainer>
      <SectionTitle>Time to talk</SectionTitle>

      <FlexContainer>
        <ProfileImg src="images/profileImg.png" alt="profile-image" />
        <NameHeader />
      </FlexContainer>

      <FlexContainer>
        <Paragraph>nora.terbocs@gmail.com</Paragraph>
        <Icon />
      </FlexContainer>

    </SectionContainer>
  )
}