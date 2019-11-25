import React, { ReactNode } from 'react'
import { TextProps, Text } from 'react-native'
import { useTheme } from './CountryTheme'

export const CountryText = ({ style, ...restProps }: TextProps & { children: ReactNode }) => {
  const { fontFamily, fontSize, onBackgroundTextColor } = useTheme()
  return (
    <Text
      {...restProps}
      style={[{ fontFamily, fontSize, color: onBackgroundTextColor }, style]}
    />
  )
}
