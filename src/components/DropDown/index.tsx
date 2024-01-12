import React from 'react';
import DropDownPicker, {
  DropDownPickerProps,
} from 'react-native-dropdown-picker';
import Icon from 'react-native-remix-icon';
import {RFValue} from 'react-native-responsive-fontsize';
import {scale} from 'react-native-size-matters';
import {useTheme} from 'styled-components/native';

type Props = DropDownPickerProps<any>;

export function DropDown({...rest}: Props) {
  const theme = useTheme();
  return (
    <DropDownPicker
      {...rest}
      showTickIcon={false}
      placeholderStyle={{color: theme.colors.inputPlaceholder}}
      labelStyle={{color: theme.colors.titleNormal}}
      listItemLabelStyle={{color: theme.colors.titleNormal}}
      selectedItemLabelStyle={{color: theme.colors.primary}}
      dropDownContainerStyle={{
        backgroundColor: theme.colors.terciary,
        borderColor: theme.colors.optionNormalBorder,
      }}
      textStyle={{
        fontFamily: theme.fontFamily.nunito.regular,
        fontSize: RFValue(theme.fontSize.sm),
      }}
      style={{
        backgroundColor: theme.colors.terciary,
        borderColor: theme.colors.optionNormalBorder,
        zIndex: 10,
      }}
      ArrowUpIconComponent={() => (
        <Icon
          name={'arrow-up-s-line'}
          color={theme.colors.titleNormal}
          size={scale(24)}
        />
      )}
      ArrowDownIconComponent={() => (
        <Icon
          name={'arrow-down-s-line'}
          color={theme.colors.titleNormal}
          size={scale(24)}
        />
      )}
    />
  );
}
