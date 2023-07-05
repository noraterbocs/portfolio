/* eslint-disable max-len */
import { Button } from 'components/interactiveComponents/Button'
import { SectionTitle } from 'components/textComponents/SectionTitle'
import { AiOutlineRead } from 'react-icons/ai'
import React from 'react'
import { Image } from 'components/imageComponents/Image'
import { FlexContainer } from 'components/containerComponents/FlexContainer'
import { Paragraph } from 'components/textComponents/Paragraph'
import { SubTitle } from 'components/textComponents/SubTitle'
import { Date } from 'components/textComponents/Date'
import { SectionContainer } from 'components/containerComponents/SectionContainer'
import { BackgroundColor } from 'components/otherAssets/BackgroundColor'

export const MyWords = () => {
  return (
    <SectionContainer>
      <BackgroundColor backgroundColor="#FCEDEA" />
      <SectionTitle>My words</SectionTitle>
      <div className="subsection-mywords">

        <FlexContainer flexDirection="row" className="mywords-img">
          <Image src="images/career_journey.png" alt="career journey picture" />
        </FlexContainer>

        <div className="subsection-mywords-summary">
          <Date>2023-03-26</Date>
          <SubTitle>Moving beyond meeting challenges to finding fulfilment in my career</SubTitle>
          <Paragraph>I write about my journey how I have been looking for fulfilment in my career and getting to know
                        my strength and preferences along the way.
          </Paragraph>
        </div>

        <a
          className="button read-article-btn"
          target="_blank"
          aria-label="Link to the article about my career journey"
          href="https://medium.com/@nora.terbocs/discovering-my-passion-8cef10ac21f8"
          rel="noreferrer">
          <Button> <AiOutlineRead /> Read article</Button>
        </a>
      </div>
    </SectionContainer>
  )
}