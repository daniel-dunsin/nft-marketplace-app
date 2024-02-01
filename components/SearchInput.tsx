import React from "react";
import { TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/theme.const";

export default function SearchInput() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 18,
        padding: 8,
        borderRadius: 10,
        backgroundColor: COLORS.gray,
        alignItems: "center",
      }}
    >
      <FontAwesome name="search" size={20} />
      <TextInput placeholder="Search NFT" />
    </View>
  );
}
