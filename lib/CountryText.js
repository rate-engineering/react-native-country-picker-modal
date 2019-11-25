import React from 'react';
import { Text } from 'react-native';
import { useTheme } from './CountryTheme';
export const CountryText = ({ style, ...restProps }) => {
    const { fontFamily, fontSize, onBackgroundTextColor } = useTheme();
    return (React.createElement(Text, Object.assign({}, restProps, { style: [{ fontFamily, fontSize, color: onBackgroundTextColor }, style] })));
};
//# sourceMappingURL=CountryText.js.map