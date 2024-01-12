import styled, {css} from 'styled-components/native';

type Props = {
  darkBackground?: boolean;
};

export const Container = styled.View<Props>`
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  ${({darkBackground}) => {
    if (darkBackground) {
      return css`
        background-color: rgba(0, 0, 0, 0.5);
      `;
    }
  }}
`;
