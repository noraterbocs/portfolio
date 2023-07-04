/* eslint-disable max-len */
import { Button } from 'components/Button'
import { SectionTitle } from 'components/SectionTitle'
import { AiOutlineRead } from 'react-icons/ai'
import React from 'react'
import { Image } from 'components/Image'
import { FlexContainer } from 'components/FlexContainer'
import { Paragraph } from 'components/Paragraph'
import { SubTitle } from 'components/SubTitle'
import { Date } from 'components/Date'
import { SectionContainer } from 'components/SectionContainer'
import { BackgroundColor } from 'components/BackgroundColor'

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