import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import { COLORS } from "../constants/theme.const";
import NFTList from "../components/NFTList";

export default function Home() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={{ height: "100%" }}>
          <View>
            <HomeHeader />
            <NFTList />
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}
          >
            <View
              style={{
                height: "50%",
                maxHeight: 350,
                backgroundColor: COLORS.primary,
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
