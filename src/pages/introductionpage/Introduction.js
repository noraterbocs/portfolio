/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { NameHeader } from 'components/textComponents/NameHeader';
import { ProfileImg } from 'components/imageComponents/ProfileImg'
import React from 'react'
import { Icon } from 'components/otherAssets/Icon';
import { Animation } from 'components/otherAssets/Animation';
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
      <Animation size="200px" src="https://assets7.lottiefiles.com/datafiles/TECfNlBjjBlUhNg/data.json" />
    </ContainerHeader>
  )
}