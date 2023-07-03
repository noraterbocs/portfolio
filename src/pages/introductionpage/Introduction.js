/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { NameHeader } from 'components/NameHeader';
import { ProfileImg } from 'components/ProfileImg'
import React from 'react'
import { Icon } from 'components/Icon';
import { ContainerHeader, ContainerHeaderImg, HeroImg, ParagraphContainer, PersonalImgContainer, PersonalInfoContainer, Summary } from './IntroductionStyling';

export const Introduction = () => {
  return (
    <ContainerHeader>
      <ContainerHeaderImg>
        <HeroImg src="images/header-img.png" alt="main-image" />
      </ContainerHeaderImg>
      <PersonalInfoContainer>
        <PersonalImgContainer>
          <ProfileImg src="images/profileImg.png" alt="profile-image" />
        </PersonalImgContainer>
        <NameHeader />
        <ParagraphContainer class="personal-info-paragraph">
          <Summary>
                    Hey there! I'm a frontend developer aspiring to become a fullstack developer. I
                    started learning coding by
                    taking free online courses and making small projects during my free time. I gained hands-on
                    experience in creating and maintaining Javascript applications while working in a product team in
                    customer service operations.
                    Besides that, I've also
                    managed IT projects within data migration and process design. Later on, I joined a web development
                    bootcamp to round up my knowledge. As a project manager and frontend
                    developer, I'm great at tackling
                    problems and
                    simplifying complex tasks.
                    Furthermore, I have demonstrated a consistent ability to manage my time efficiently while
                    maintaining clear and
                    effective communication with stakeholders across diverse functions and departments.
          </Summary>
        </ParagraphContainer>
        <Icon />
      </PersonalInfoContainer>
      {/* <div className="center section-scroll section">
        <a aria-label="arrow down" href="#main">
          <i className="fa-solid fa-arrow-down fa-2x" />
        </a>
        <p>Let's scroll</p>
      </div> */}
    </ContainerHeader>
  )
}