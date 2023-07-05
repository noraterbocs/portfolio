import React from 'react'
import { SectionTitle } from 'components/textComponents/SectionTitle'
import { SectionContainer } from 'components/containerComponents/SectionContainer'
import { BackgroundColor } from 'components/otherAssets/BackgroundColor'
import { Highlighter } from 'components/otherAssets/Highlighter'
import { Paragraph } from 'components/textComponents/Paragraph'

export const Tech = () => {
  return (
    <SectionContainer tech>
      <BackgroundColor backgroundColor="#EDFFFF" />
      <SectionTitle>Tech</SectionTitle>
      <Paragraph lineHeight="40px">HTML, CSS, <Highlighter backgroundColor="#EB5577">JavaScript,</Highlighter> ES6, JSX,
        <Highlighter backgroundColor="var(--header-color)">React, </Highlighter>
                React Hooks, React Router, Styled Components,
                Redux, Node.js, Express API,
                Mongo DB, Web Accessibility,
                API:s,
        <Highlighter backgroundColor="#2483E0">mob-programming,</Highlighter> pair-programming, Github.
      </Paragraph>
    </SectionContainer>
  )
}