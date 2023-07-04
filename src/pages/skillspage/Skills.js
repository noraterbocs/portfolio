import { FlexContainer } from 'components/FlexContainer'
import { SectionContainer } from 'components/SectionContainer'
import { SectionTitle } from 'components/SectionTitle'
import React from 'react'
import { Paragraph } from 'components/Paragraph'
import { SubTitle } from 'components/SubTitle'
import { BackgroundColor } from 'components/BackgroundColor'
import { Highlighter } from 'components/Highlighter'
import skillsData from '../../data/skills.json'

export const Skills = () => {
  return (
    <SectionContainer>
      <BackgroundColor backgroundColor="#FDF2E4" />
      <SectionTitle>Skills</SectionTitle>
      <FlexContainer flexWrap="wrap" flexDirection="row" gap="2em" alignItems="flex-start">
        {skillsData.map((skillData) => {
          return (
            <FlexContainer gap="0" key={skillData.category}>
              <SubTitle>
                <Highlighter backgroundColor={skillData.color}>{skillData.category}</Highlighter>
              </SubTitle>
              {skillData.list.map((skill) => (
                <Paragraph key={skill}>{skill}</Paragraph>
              ))}
            </FlexContainer>
          )
        })}
      </FlexContainer>
    </SectionContainer>
  )
}