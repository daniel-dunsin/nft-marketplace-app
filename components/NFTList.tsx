import { View, Text, FlatList } from "react-native";
import React from "react";
import { NFTData } from "../assets/data";
import SingleNFT from "./SingleNFT";

export default function NFTList() {
  return (
    <FlatList
      data={NFTData}
      renderItem={({ item }) => <SingleNFT {...item} />}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        marginHorizontal: "2.5%",
      }}
    />
  );
}
