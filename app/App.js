import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import "./global.css"   
import {
  StyleSheet, 
  View, 
} from "react-native";
import { Main } from "../components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context"; 
// import { verifyInstallation } from 'nativewind';

// const icon = require("./assets/icon.png");

export default function App() {
  // verifyInstallation();
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="Dark" />
        {/* SafeAreaView funciona solo para IOS */}
         {/* <SafeAreaView style={{ marigin: 12 }}>  */}
          <Main />
        {/* </SafeAreaView> */}
      </View>
    </SafeAreaProvider>    
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1, //ocupa todo la pantalla verticalmente
    backgroundColor: "#555",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    // padding: 12,
  },
  container: {
    flex: 1, // Ocupa toda la pantalla verticalmente
    backgroundColor: "#555",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
