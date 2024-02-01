import React from "react";
import { Bid } from "../interfaces/nft.interface";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { COLORS } from "../constants/theme.const";

interface Props extends Bid {}

export default function SingleBid(props: Props) {
  return (
    <View
      style={{
        marginVertical: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 13,
      }}
    >
      <View>
        <Image
          source={props?.image as ImageSourcePropType}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: "center",
            width: "100%",
            color: COLORS.primary,
            fontWeight: "bold",
          }}
        >
          Bid placed by {props?.name}
        </Text>
        <Text style={{ textAlign: "center", width: "100%" }}>
          {props?.date}
        </Text>
      </View>

      <View>
        <Text
          style={{ fontSize: 15, fontWeight: "bold", color: COLORS.primary }}
        >
          $ {props?.price}
        </Text>
      </View>
    </View>
  );
}
