import { globalStyles } from '@/styles/global-styles'
import { Text, TextProps } from 'react-native'

interface ThemeTextProps extends TextProps {
    children: string,
    variant?: "h1" | "h2",

}

const ThemeText = ({ children, variant = "h1", ...rest }: ThemeTextProps) => {
    return (
        <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest}
            style={[
                { fontFamily: "Open Sans", color: "white" },
                variant === "h1" && globalStyles.calculatorText,
                variant === "h2" && globalStyles.calculatorResult,
            ]}
        >{children}</Text>
    )
}

export default ThemeText