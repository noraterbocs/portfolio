import { styled } from 'styled-components'

export const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    width: 100%;
    @media (min-width: 744px) {
        justify-content: space-between;
};
    @media (min-width: 1280px) {
        flex-direction: row-reverse;
        justify-content: stretch;
    }
`;
export const PersonalImgContainer = styled.div`
    align-self:center;
      @media (min-width: 744px) {
              justify-self: end;
        align-self: center;
        grid-area: personal-info-profile-img;
    };
`

export const HeroImg = styled.img`
    @media (min-width: 744px) {
        width: 100%;
        height: 50vh;
    };
    @media (min-width: 1280px) {
        height: 100vh;
        object-fit: cover;
    }
`

export const ContainerHeaderImg = styled.div`
    display: none;
    @media (min-width: 744px) {
        display: block;
        width: 100%
    };
    @media (min-width: 1280px) {
        display: block;
        width: 50vw;
    }
`

export const PersonalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 24px;
    @media (min-width: 744px) {
    display: grid;
        grid-template-columns: 0.1fr 0.8fr;
        grid-template-rows: 0.4fr 0.4fr 0.1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "personal-info-profile-img personal-info-summary"
            "personal-info-paragraph personal-info-paragraph"
            "contact-details contact-details"
            "section-contact section-contact"
            "footer-contact footer-contact";
        };
    @media (min-width: 1280px) {
            padding: 0 48px;
            grid-template-columns: 0.1fr 1fr;
            width: 50vw;
        }
`

export const ParagraphContainer = styled.div`
    @media (min-width: 744px) {
    justify-self: start;
        align-self: center;
        grid-area: personal-info-paragraph;
        };
`

export const Summary = styled.p`
 font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 20px 0;
    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
        margin: 40px 0;
    }
`

