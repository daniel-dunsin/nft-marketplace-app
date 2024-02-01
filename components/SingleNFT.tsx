import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import React from "react";
import { NFT } from "../interfaces/nft.interface";
import { COLORS } from "../constants/theme.const";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

interface Props extends NFT {}

export default function SingleNFT(props: Props) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("NFTDetails", { id: props.id });
      }}
      style={{
        width: "100%",
        marginVertical: 20,
        shadowColor: COLORS.gray,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 20,
      }}
    >
      <Image
        source={props.image as ImageSourcePropType}
        style={{
          width: "100%",
          objectFit: "cover",
          height: 250,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View
        style={{
          position: "relative",
          paddingHorizontal: 10,
          backgroundColor: COLORS.white,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 15,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: "0%",
            transform: [{ translateY: -20 }],
            zIndex: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            left: 0,
            paddingHorizontal: 2,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            {props?.bids?.map((bids, index) => {
              return (
                <Image
                  source={bids.image as ImageSourcePropType}
                  key={index}
                  style={{
                    width: 40,
                    height: 40,
                    transform: [{ translateX: -5 * index }],
                  }}
                />
              );
            })}
          </View>

          <View
            style={{
              padding: 8,
              borderRadius: 10,
              backgroundColor: COLORS.white,
            }}
          >
            <Text style={{ textAlign: "center" }}>Ending in</Text>
            <Text
              style={{ fontSize: 17, textAlign: "center", fontWeight: "bold" }}
            >
              12h 30m
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              {props?.name}
            </Text>
            <Text>by {props?.creator}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 18,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "500" }}>${props?.price}</Text>

            <Pressable
              style={{
                paddingHorizontal: 16,
                paddingVertical: 10,
                backgroundColor: COLORS.primary,
                borderRadius: 28,
              }}
            >
              <Text style={{ color: COLORS.white }}>Place a bid</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
