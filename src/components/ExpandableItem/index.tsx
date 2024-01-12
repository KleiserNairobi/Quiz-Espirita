import React, {useState} from 'react';
import Icon from 'react-native-remix-icon';
import {TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';
import {
  ButtonHelp,
  ButtonHelpBoxTitle,
  ButtonHelpBoxTitleWrapper,
  ButtonHelpContent,
  ButtonHelpTitle,
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  content: string;
};

export function ExpandableItem({title, content, ...rest}: Props) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  function toggleExpansion() {
    setExpanded(!expanded);
  }

  return (
    <ButtonHelp onPress={toggleExpansion} {...rest}>
      <ButtonHelpBoxTitle>
        <ButtonHelpBoxTitleWrapper>
          <ButtonHelpTitle>{title}</ButtonHelpTitle>
        </ButtonHelpBoxTitleWrapper>
        <Icon
          name={expanded ? 'arrow-up-s-line' : 'arrow-down-s-line'}
          color={theme.colors.titleNormal}
          size={verticalScale(24)}
        />
      </ButtonHelpBoxTitle>
      {expanded && <ButtonHelpContent>{content}</ButtonHelpContent>}
    </ButtonHelp>
  );
}
