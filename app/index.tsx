import { globalStyles } from "@/styles/global-styles";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={globalStyles.calculatorContainer}
    >
      <Text style={globalStyles.calculatorText} 
      numberOfLines={1}
      adjustsFontSizeToFit
      >50 x 50</Text>
      <Text style={globalStyles.calculatorResult}>2500</Text>
    </View>
  );
}
