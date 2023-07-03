import React from 'react'
import { SectionTitle } from 'components/SectionTitle'
import { ContainerTech, Paragraph, Span } from './TechStyling'

export const Tech = () => {
  return (
    <ContainerTech>
      <SectionTitle>Tech</SectionTitle>
      <Paragraph>HTML, CSS, <Span backgroundColor="#EB5577">JavaScript,</Span> ES6, JSX,
        <Span backgroundColor="var(--header-color)">React, </Span>
                React Hooks, React Router, Styled Components,
                Redux, Node.js, Express API,
                Mongo DB, Web Accessibility,
                API:s,
        <Span backgroundColor="#2483E0">mob-programming,</Span> pair-programming, Github.
      </Paragraph>
    </ContainerTech>
  )
}