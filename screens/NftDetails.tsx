import { View, Text } from "react-native";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { NFT } from "../interfaces/nft.interface";
import { NFTData } from "../assets/data";

export default function NftDetails() {
  const route: RouteProp<{ params: { id: string } }, "params"> = useRoute();

  const id = route.params.id;

  const nft = useMemo((): NFT => {
    const nft = NFTData.find((nft) => nft.id == id);
    return nft as NFT;
  }, [id]);

  return <SafeAreaView></SafeAreaView>;
}
