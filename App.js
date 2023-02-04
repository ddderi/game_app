import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import Home from "./components/Home";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
