import { styled } from 'styled-components';
import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap:1em;
    @media (min-width: 744px) {
        justify-self: start;
        align-self: stretch;
        grid-area: section-contact;
        justify-content: start;
        gap: 41px;
        padding: 40px 0;
    }
`

const AnchorIcon = styled.a`
color: #D0D0D0;
font-size: 2em;
    &&:hover {
    color: var(--header-color);
    cursor:pointer
    }
`

export const Icon = () => {
  const data = [
    { id: 'email',
      ariaLabel: 'email link',
      href: 'mailto:nora.terbocs@gmail.com',
      icon: AiOutlineMail },
    { id: 'linkedin',
      ariaLabel: 'linkedin link',
      href: 'https://www.linkedin.com/in/noraterbocs/',
      icon: FaLinkedinIn },
    { id: 'github',
      ariaLabel: 'github link',
      href: 'https://github.com/noraterbocs',
      icon: FaGithub }
  ];
  return (
    <ContainerContact>
      {data.map((icon) => {
        const IconComponent = icon.icon;
        return (
          <AnchorIcon
            key={icon.id}
            aria-label={icon.ariaLabel}
            target="_blank"
            href={icon.href}
            rel="noreferrer">
            <IconComponent />
          </AnchorIcon>
        )
      })}
    </ContainerContact>
  )
}