import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme.const";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash() {
  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={"large"} color={COLORS.primary} />
      </View>
    </SafeAreaView>
  );
}
