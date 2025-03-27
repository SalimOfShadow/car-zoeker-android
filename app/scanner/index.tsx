import { Camera, CameraView } from "expo-camera";
import { Stack } from "expo-router";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Overlay } from "./Overlay";

export default function Home() {
  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Stack.Screen
        options={{
          title: "Overview",
          headerShown: false,
        }}
      />
      {Platform.OS === "android" ? <StatusBar hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          console.log("data", data);
        }}
      />
      <Overlay />
    </SafeAreaView>
  );
}
