import { View, ViewProps } from "react-native"
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles"

export function FlexView({ direction, flex = 1, gap, padding, style, children, ...props }: ViewProps & {
  flex?: number
  gap?: number
  padding?: number
} & UnistylesVariants<typeof styles>) {
  styles.useVariants({ direction })
  return <View style={[styles.root(flex, gap, padding), style]} {...props}>{children}</View>
}

export const styles = StyleSheet.create({
  root: (flex: number = 1, gap: number = 0, padding: number = 0) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: flex,
    variants: {
      direction: {
        column: {
          flexDirection: 'column',
        },
        row: {
          flexDirection: 'row',
        },
        'column-reverse': {
          flexDirection: 'column-reverse',
        },
        'row-reverse': {
          flexDirection: 'row-reverse',
        },
      },
    },
    gap,
    padding,
  }),
})
