import React from 'react'
import { TfiWorld } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'
import { Button } from 'components/Button'
import { FlexContainer } from 'components/FlexContainer'
import { SectionTitle } from 'components/SectionTitle'
import projects from '../../data/other-projects.json'
import { ContainerProject, ContainerProjects, ProjectImage, ProjectTechParagraph, ProjectText, ProjectTitle } from './FeaturedProjectsStyling'

export const FeaturedProjects = () => {
  return (
    <ContainerProjects>
      <SectionTitle>Featured projects</SectionTitle>
      {projects.map((project) => {
        return (
          <ContainerProject key={project.image}>
            <FlexContainer flexDirection="row" gridArea="featured-project-img">
              <ProjectImage src={project.image} alt={project.title} />
            </FlexContainer>
            <FlexContainer gridArea="featured-project-description">
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectText>{project.text}</ProjectText>
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
    </ContainerProjects>
  )
}