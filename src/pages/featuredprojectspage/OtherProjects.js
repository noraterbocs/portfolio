import React from 'react'
import { TfiWorld } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'
import { Button } from 'components/interactiveComponents/Button'
import { FlexContainer } from 'components/containerComponents/FlexContainer'
import { SectionTitle } from 'components/textComponents/SectionTitle'
import { SubTitle } from 'components/textComponents/SubTitle'
import { Paragraph } from 'components/textComponents/Paragraph'
import otherProjects from '../../data/other-projects.json'
import { ProjectImage, ProjectTechParagraph } from './FeaturedProjectsStyling'

export const OtherProjects = () => {
  return (
    <FlexContainer>
      <SectionTitle>Other projects</SectionTitle>
      <FlexContainer flexWrap="wrap" flexDirection="row" gap="2em">
        {otherProjects.map((project) => {
          return (
            <FlexContainer otherprojects gap="0" alignSelf="flex-start" alignItems="self-start" key={project.title}>
              <FlexContainer flexDirection="row" justifyContent="flex-start" alignItems="flex-start">
                <ProjectImage otherprojects src={project.image} alt={project.title} />
                <FlexContainer gap="0">
                  <SubTitle>{project.title}</SubTitle>
                  <FlexContainer otherprojects justifyContent="flex-start" flexDirection="row">
                    <a aria-label={`${project.title} - demo`} target="_blank" href={project.demo} rel="noreferrer">
                      <Button otherprojects demo><TfiWorld /></Button>
                    </a>
                    <a aria-label={`${project.title} - github`} target="_blank" href={project.github} rel="noreferrer">
                      <Button otherprojects github><FaGithub /></Button>
                    </a>
                  </FlexContainer>
                </FlexContainer>
              </FlexContainer>
              <Paragraph>{project.text}</Paragraph>
              <FlexContainer margin="10px 0 14px 0" gap="0.3em" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start" alignSelf="flex-start">
                {project.tech.map((techstack) => {
                  return (
                    <ProjectTechParagraph>{techstack}</ProjectTechParagraph>
                  )
                })}
              </FlexContainer>

            </FlexContainer>
          )
        })}
      </FlexContainer>
    </FlexContainer>
  )
}