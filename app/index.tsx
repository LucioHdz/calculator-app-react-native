import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={globalStyles.calculatorContainer}
    >

      <View style={{ paddingBottom: 20, paddingHorizontal: 30 }}>
        <ThemeText variant="h1"> 50 x 50 </ThemeText>
        <ThemeText variant="h2"> 2500 </ThemeText>
      </View>

      {/* primera fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => { }}
          blackText
          color={Colors.lightGray}
        > AC </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
          blackText
          color={Colors.lightGray}
        > +/- </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
          blackText
          color={Colors.lightGray}
        > del </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
          color={Colors.orange}
        > ÷ </CalculatorButton>
      </View>

      {/* segunda fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => { }}
        > 7 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
        > 8 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
        > 9 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
          color={Colors.orange}
        > x </CalculatorButton>
      </View>

      {/* tercera fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => { }}
        > 4 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
        > 5 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
        > 6 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
          color={Colors.orange}
        > - </CalculatorButton>
      </View>

      {/* cuarta fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => { }}
        > 1 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
        > 2 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
        > 3 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
          color={Colors.orange}
        > + </CalculatorButton>
      </View>

      {/* quinta fila */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => { }}
          blackText
          color={Colors.lightGray}
          doubleSize
        > 0 </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
        > . </CalculatorButton>

        <CalculatorButton
          onPress={() => { }}
          color={Colors.orange}
        > = </CalculatorButton>
      </View>

    </View>
  );
}
