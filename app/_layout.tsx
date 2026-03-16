import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';

const RootLayout = () => {


  const isAndroid = Platform.OS === "android";
  if (isAndroid) {
  }

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
      <StatusBar style='light' />
    </View>
  )
}

export default RootLayout
