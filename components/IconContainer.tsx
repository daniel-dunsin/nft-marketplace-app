import React from "react";
import { Pressable, PressableProps } from "react-native";

export interface Props extends PressableProps {}

export default function IconContainer({ children, ...props }: Props) {
  return (
    <Pressable
      style={{
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 30,
      }}
      {...props}
    >
      {children}
    </Pressable>
  );
}
