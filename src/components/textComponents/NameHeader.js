import { styled } from 'styled-components';
import React from 'react';

const ContainerNameHeader = styled.div`
      @media (min-width: 744px) {
     justify-self: start;
        align-self: center;
        grid-area: personal-info-summary;
      }
`
const Name = styled.h3`
    color: var(--header-color);
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    @media (min-width: 375px) {
        color: var(--header-color);
        font-size: 28px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: left;
    }
`
const JobTitle = styled.h2`
    font-size: 24px;
    font-weight: 900;
    text-align: left;
    @media (min-width: 375px) {
        font-size: 32px;
        font-weight: 900;
        line-height: 43px;
        letter-spacing: 0em;
        text-align: left;
    }
`
const SecondaryJobtitle = styled.h4`
    font-size: 16px;
    @media (min-width: 375px) {
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--secondary-color)
    }
`

export const NameHeader = () => {
  return (
    <ContainerNameHeader>
      <Name>Nora Terbocs</Name>
      <JobTitle>Frontend developer</JobTitle>
      <SecondaryJobtitle>+ project manager</SecondaryJobtitle>
    </ContainerNameHeader>
  )
}