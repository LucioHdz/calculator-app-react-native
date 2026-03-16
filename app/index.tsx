import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

export default function Index() {
  const {
    // Properties
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber,
    clean,
    toggleSign,
    deleteLastEntry,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
    calculateResult,

  } = useCalculator();
  return (
    <View
      style={globalStyles.calculatorContainer}
    >

      <View style={{ paddingBottom: 20, paddingHorizontal: 30 }}>
        <ThemeText variant="h1"> {formula}</ThemeText>
        {formula === prevNumber ?

          <ThemeText variant="h2"> </ThemeText> :
          <ThemeText variant="h2"> {prevNumber} </ThemeText>
        }
      </View>

      {/* primera fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => clean()}
          blackText
          color={Colors.lightGray}
        > C </CalculatorButton>

        <CalculatorButton
          onPress={() => toggleSign()}
          blackText
          color={Colors.lightGray}
        > +/- </CalculatorButton>

        <CalculatorButton
          onPress={() => deleteLastEntry()}
          blackText
          color={Colors.lightGray}
        > del </CalculatorButton>

        <CalculatorButton
          onPress={() => divideOperation()}
          color={Colors.orange}
        > ÷ </CalculatorButton>
      </View>

      {/* segunda fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber("7")}
        > 7 </CalculatorButton>

        <CalculatorButton
          onPress={() => buildNumber("8")}
        > 8 </CalculatorButton>

        <CalculatorButton
          onPress={() => buildNumber("9")}
        > 9 </CalculatorButton>

        <CalculatorButton
          onPress={() => multiplyOperation()}
          color={Colors.orange}
        > x </CalculatorButton>
      </View>

      {/* tercera fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber("4")}
        > 4 </CalculatorButton>

        <CalculatorButton
          onPress={() => buildNumber("5")}
        > 5 </CalculatorButton>

        <CalculatorButton
          onPress={() => buildNumber("6")}
        > 6 </CalculatorButton>

        <CalculatorButton
          onPress={() => substractOperation()}
          color={Colors.orange}
        > - </CalculatorButton>
      </View>

      {/* cuarta fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber("1")}
        > 1 </CalculatorButton>

        <CalculatorButton
          onPress={() => buildNumber("2")}
        > 2 </CalculatorButton>

        <CalculatorButton
          onPress={() => buildNumber("3")}
        > 3 </CalculatorButton>

        <CalculatorButton
          onPress={() => addOperation()}
          color={Colors.orange}
        > + </CalculatorButton>
      </View>

      {/* quinta fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber("0")}
          blackText
          color={Colors.lightGray}
          doubleSize
        > 0 </CalculatorButton>

        <CalculatorButton
          onPress={() => buildNumber(".")}
        > . </CalculatorButton>

        <CalculatorButton
          onPress={() => calculateResult()}
          color={Colors.orange}
        > = </CalculatorButton>
      </View>

    </View>
  );
}
