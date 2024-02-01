import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
  FlatList,
} from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NFT } from "../interfaces/nft.interface";
import { NFTData } from "../assets/data";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../constants/theme.const";
import IconContainer from "../components/IconContainer";
import SingleBid from "../components/SingleBid";

export default function NftDetails() {
  const route: RouteProp<{ params: { id: string } }, "params"> = useRoute();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [readMore, setReadMore] = useState<boolean>(false);

  const id = route.params.id;

  const nft = useMemo((): NFT => {
    const nft = NFTData.find((nft) => nft.id == id);
    return nft as NFT;
  }, [id]);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={{ position: "relative" }}>
        <View
          style={{
            position: "absolute",
            top: 15,
            left: 0,
            width: "100%",
            paddingHorizontal: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: 2,
          }}
        >
          <IconContainer onPress={() => navigation.navigate("Home")}>
            <Entypo
              name="chevron-left"
              size={20}
              style={{ color: COLORS.primary }}
            />
          </IconContainer>

          <IconContainer>
            <Entypo name="heart" color={"red"} size={20} />
          </IconContainer>
        </View>

        {/* Main Components */}

        <View style={{}}>
          <Image
            source={nft.image as ImageSourcePropType}
            style={{ width: "100%", height: "50%", maxHeight: 300 }}
          />

          <View
            style={{
              width: "100%",
              position: "relative",
              top: -20,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              {nft?.bids?.map((bids, index) => {
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
                style={{
                  fontSize: 17,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                12h 30m
              </Text>
            </View>
          </View>

          {/* NFT INFO */}
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {nft?.name}
                </Text>
                <Text style={{ fontSize: 15 }}>by {nft?.creator}</Text>
              </View>

              <View>
                <Text style={{ fontWeight: "bold" }}>$ {nft?.price}</Text>
              </View>
            </View>

            <View style={{ marginTop: 16 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Description
              </Text>
              <Text style={{ fontSize: 15.5, marginTop: 5 }}>
                {nft?.description?.length > 100 ? (
                  readMore ? (
                    <>
                      {nft?.description}{" "}
                      <Text
                        style={{ color: COLORS.primary, fontWeight: "bold" }}
                        onPress={() => setReadMore(false)}
                      >
                        Show Less
                      </Text>
                    </>
                  ) : (
                    <>
                      {nft?.description?.slice(0, 100)}...{" "}
                      <Text
                        style={{ color: COLORS.primary, fontWeight: "bold" }}
                        onPress={() => setReadMore(true)}
                      >
                        Read More
                      </Text>
                    </>
                  )
                ) : (
                  nft?.description
                )}
              </Text>
            </View>

            <View style={{ marginTop: 16 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}
              >
                Current Bid
              </Text>

              {nft?.bids?.map((item) => (
                <SingleBid {...item} key={item.id} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
