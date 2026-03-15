import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles  = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-end",
    },
    calculatorText: {
        fontSize: 70,
        textAlign: "right",
        fontWeight: "400",
        color: Colors.textPrimary,
    },

    calculatorResult:{
        fontSize: 40,
        textAlign: "right",
        fontWeight: "300",
        color: Colors.textSecondary,
    }
    
});