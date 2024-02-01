import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import SearchInput from "./SearchInput";

export default function HomeHeader() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            height={60}
            style={{ objectFit: "contain", width: 100 }}
          />

          <Image
            source={require("../assets/images/person01.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "#ece9e9", fontSize: 15, fontWeight: "400" }}>
            Hello User 👋🏼
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "white",
              fontWeight: "600",
              marginTop: 8,
            }}
          >
            Let's find masterpiece art
          </Text>
        </View>

        <View style={{ marginTop: 45 }}>
          <SearchInput />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
