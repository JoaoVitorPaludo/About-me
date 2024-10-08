import styled from 'styled-components'

export const AboutMeDialogContainer = styled.div`
  background-color: ${(props) => props.theme['background-500']};
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  height: 85vh;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`
export const AboutMeDialogHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h2 {
    color: ${(props) => props.theme['base-text-color']};
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
  }
  svg {
    color: ${(props) => props.theme['base-icon-color']};
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      color: ${(props) => props.theme['second-text-color']};
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
    }
  }
`

export const AboutMeDialogMain = styled.main`
  flex: 1;
  display: flex;
  gap: 1rem;
`
export const AboutMeDialogSection = styled.section`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 5px ${(props) => props.theme['second-text-color']};
    border-style: outset;
  }

  p {
    flex: 1;
    width: 100%;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    color: ${(props) => props.theme['base-text-color']};
    line-height: 1.6;
  }
`
