import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const RootLayout = () => {
  const [loaded] = useFonts({
    "Open Sans": require("../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      {/* <Text>asdsadasd</Text> */}
      <Slot />
      <StatusBar style='auto' />
    </View>
  )
}

export default RootLayout
