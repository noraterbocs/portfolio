import { FlexContainer } from 'components/containerComponents/FlexContainer'
import { SectionContainer } from 'components/containerComponents/SectionContainer'
import { SectionTitle } from 'components/textComponents/SectionTitle'
import React from 'react'
import { Paragraph } from 'components/textComponents/Paragraph'
import { SubTitle } from 'components/textComponents/SubTitle'
import { BackgroundColor } from 'components/otherAssets/BackgroundColor'
import { Highlighter } from 'components/otherAssets/Highlighter'
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