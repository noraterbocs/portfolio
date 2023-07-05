import React from 'react'
import { TfiWorld } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'
import { Button } from 'components/interactiveComponents/Button'
import { FlexContainer } from 'components/containerComponents/FlexContainer'
import { SectionTitle } from 'components/textComponents/SectionTitle'
import { SubTitle } from 'components/textComponents/SubTitle'
import { Paragraph } from 'components/textComponents/Paragraph'
import otherProjects from '../../data/other-projects.json'
import { ContainerOtherProject, ProjectImage, ProjectTechParagraph } from './FeaturedProjectsStyling'

export const OtherProjects = () => {
  return (
    <FlexContainer>
      <SectionTitle>Other projects</SectionTitle>
      <FlexContainer>
        {otherProjects.map((project) => {
          return (
            <ContainerOtherProject key={project.title}>
              <FlexContainer gridArea="featured-project-img" flexDirection="row" justifyContent="flex-start">
                <ProjectImage otherprojects src={project.image} alt={project.title} />
                <SubTitle>{project.title}</SubTitle>
              </FlexContainer>
              <Paragraph gridArea="featured-project-description">{project.text}</Paragraph>
              <FlexContainer margin="10px 0 14px 0" gap="0.3em" flexDirection="row" flexWrap="wrap" gridArea="tech-stack" justifyContent="flex-start">
                {project.tech.map((techstack) => {
                  return (
                    <ProjectTechParagraph>{techstack}</ProjectTechParagraph>
                  )
                })}
              </FlexContainer>
              <FlexContainer otherprojects gridArea="btns" justifyContent="flex-start">
                <a aria-label={`${project.title} - demo`} target="_blank" href={project.demo} rel="noreferrer">
                  <Button otherprojects demo><TfiWorld /></Button>
                </a>
                <a aria-label={`${project.title} - github`} target="_blank" href={project.github} rel="noreferrer">
                  <Button otherprojects github><FaGithub /></Button>
                </a>
              </FlexContainer>
            </ContainerOtherProject>
          )
        })}
      </FlexContainer>
    </FlexContainer>
  )
}