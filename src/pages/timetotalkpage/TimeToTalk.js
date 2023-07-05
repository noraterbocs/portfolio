import { FlexContainer } from 'components/containerComponents/FlexContainer'
import { Icon } from 'components/otherAssets/Icon'
import { NameHeader } from 'components/textComponents/NameHeader'
import { Paragraph } from 'components/textComponents/Paragraph'
import { ProfileImg } from 'components/imageComponents/ProfileImg'
import { SectionContainer } from 'components/containerComponents/SectionContainer'
import { SectionTitle } from 'components/textComponents/SectionTitle'
import React from 'react'
import { Animation } from 'components/otherAssets/Animation'

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
      <a aria-label="Back to the top" href="#root"><Animation src="https://assets5.lottiefiles.com/private_files/lf30_r6s65i6n.json" size="200px" /></a>
    </SectionContainer>
  )
}