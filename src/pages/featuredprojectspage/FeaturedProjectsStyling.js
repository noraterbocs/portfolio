import { styled } from 'styled-components'

export const ContainerProjects = styled.section`
padding: 0 24px;
max-width: 414px;
    @media (min-width: 744px) {
    max-width: 820px;
    }
@media (min-width: 1280px) {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
export const ContainerProject = styled.div`
 padding: 24px 0 18px 0;
 a {
    text-decoration: none;
}
    @media (min-width: 744px) {
        display: grid;
        grid-template-columns: 0.8fr 1fr 1fr;
        grid-template-rows: 0.5fr 0.1fr 0.2fr;
        gap: 0 24px;
        grid-template-areas:
            "featured-project-img featured-project-description featured-project-description"
            "featured-project-img tech-stack tech-stack"
            "featured-project-img livedemo-btn github-btn";
    }
`
export const ProjectTechParagraph = styled.p`
  font-family: var(--primary-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    background-color: #000000;
    color: #FFFFFF;
    padding: 2px 6px;
`
export const ProjectImage = styled.img`
    height: ${(props) => (props.otherprojects ? '128px' : '300px')};
    padding: 0 0 12px 0;
    width: ${(props) => (props.otherprojects ? '100px' : '300px')};
    object-fit: cover;
    object-position: center;
    align-self: flex-start;
    @media (min-width: 744px) {
        height: ${(props) => (props.otherprojects ? '128px' : '280px')};
        padding: 0 0 12px 0;
        width: ${(props) => (props.otherprojects ? '100px' : '280px')};
    }
`