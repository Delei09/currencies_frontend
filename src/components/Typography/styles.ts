import styled from 'styled-components';

type TypographyProps = {
  font?: string;
  color?: string;
};

export const TitleS = styled.h2<TypographyProps>`
  font-size: ${({ font }) => font ?? 24}px;
  font-weight: 400;
  color: ${({ color, theme }) => color ?? theme.color.black};
  font-family: ${({ font, theme }) => font ?? theme.fonts.primary};
`;

export const TitleBoldS = styled.h2<TypographyProps>`
  font-size: ${({ font }) => font ?? 24}px;
  font-weight: 700;
  color: ${({ color, theme }) => color ?? theme.color.black};
  font-family: ${({ font, theme }) => font ?? theme.fonts.primary};
`;

export const DescriptionS = styled.h2<TypographyProps>`
  font-size: ${({ font }) => font ?? 16}px;
  font-weight: 400;
  color: ${({ color, theme }) => color ?? theme.color.black};
  font-family: ${({ font, theme }) => font ?? theme.fonts.primary};
`;

export const DescriptionBoldS = styled.h2<TypographyProps>`
  font-size: ${({ font }) => font ?? 16}px;
  font-weight: 700;
  color: ${({ color, theme }) => color ?? theme.color.black};
  font-family: ${({ font, theme }) => font ?? theme.fonts.primary};
`;
