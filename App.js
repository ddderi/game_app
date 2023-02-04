import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Loggedout } from "./ui-components";

<Loggedout />;

Amplify.configure(awsconfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Loggedout />
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
