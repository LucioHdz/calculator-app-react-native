import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import * as Haptics from 'expo-haptics'
import { Pressable, Text } from 'react-native'
interface CalculatorButtonProps {
    children: string,
    onPress: () => void,
    color?: string,
    blackText?: boolean,
    doubleSize?: boolean,
}



const CalculatorButton = ({
    children,
    color = Colors.darkGray,
    blackText = false,
    doubleSize = false,
    onPress }: CalculatorButtonProps) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.7 : 1,
                // agregando efecto de sombra en android
                elevation: 5,
                // agregando efecto de sombra en ios
                shadowColor: "#000",
                width: doubleSize ? 200 : 80,
            })}
            onPress={() => {
                Haptics.selectionAsync()
                onPress()
            }}
        >
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? Colors.darkGray : Colors.textPrimary,

                }}

            >
                {children}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton