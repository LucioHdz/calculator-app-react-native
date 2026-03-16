import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { Colors } from '@/constants/Colors';

const RootLayout = () => {
  
  
  const isAndroid = Platform.OS === "android";
  if (isAndroid) {
    NavigationBar.setBackgroundColorAsync(Colors.background);
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
      <StatusBar style='auto' />
    </View>
  )
}

export default RootLayout
