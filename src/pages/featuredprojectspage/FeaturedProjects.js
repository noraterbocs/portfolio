import React from 'react'
import { TfiWorld } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'
import { Button } from 'components/interactiveComponents/Button'
import { FlexContainer } from 'components/containerComponents/FlexContainer'
import { SectionTitle } from 'components/textComponents/SectionTitle'
import { SubTitle } from 'components/textComponents/SubTitle'
import { Paragraph } from 'components/textComponents/Paragraph'
import { SectionContainer } from 'components/containerComponents/SectionContainer'
import { BackgroundColor } from 'components/otherAssets/BackgroundColor'
import mainProjects from '../../data/main-projects.json'
import { ContainerProject, ProjectImage, ProjectTechParagraph } from './FeaturedProjectsStyling'

export const FeaturedProjects = () => {
  return (
    <SectionContainer>
      <BackgroundColor backgroundColor="#d7ecff" />
      <SectionTitle>Main projects</SectionTitle>
      {mainProjects.map((project) => {
        return (
          <ContainerProject key={project.image}>
            <FlexContainer flexDirection="row" gridArea="featured-project-img">
              <ProjectImage src={project.image} alt={project.title} />
            </FlexContainer>
            <FlexContainer gridArea="featured-project-description">
              <SubTitle>{project.title}</SubTitle>
              <Paragraph>{project.text}</Paragraph>
            </FlexContainer>
            <FlexContainer gridArea="tech-stack" margin="10px 0 14px 0" gap="0.3em" flexDirection="row" flexWrap="wrap">
              {project.tech.map((techstack) => {
                return (
                  <ProjectTechParagraph>{techstack}</ProjectTechParagraph>
                )
              })}
            </FlexContainer>
            <a aria-label={`${project.title} - demo`} target="_blank" href={project.demo} rel="noreferrer">
              <Button demo gridArea="livedemo-btn"><TfiWorld /> Live demo</Button>
            </a>
            <a aria-label={`${project.title} - github`} target="_blank" href={project.github} rel="noreferrer">
              <Button github gridArea="github-btn"><FaGithub /> View the code</Button>
            </a>
          </ContainerProject>
        )
      })}
    </SectionContainer>
  )
}