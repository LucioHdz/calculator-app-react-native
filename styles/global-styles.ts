import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        padding: 10,
        justifyContent: "flex-end",
    },
    calculatorText: {
        fontSize: 70,
        textAlign: "right",
        fontWeight: "400",
        color: Colors.textPrimary,
    },

    calculatorResult: {
        fontSize: 40,
        marginBottom:40,
        textAlign: "right",
        fontWeight: "300",
        color: Colors.textSecondary,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontFamily: "Open Sans",
    },
});