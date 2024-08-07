import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import type { ImageSourcePropType } from "react-native";
import { TabAnimatedIcon } from './TabAnimatedIcon';

interface TabPropType {
  item: {
    icon: ImageSourcePropType;
    title: string,
    id: number
  }
}

interface Props {
  key: number,
  isSelected?: boolean
  data: TabPropType,
}

export const TabItem: React.FC<Props> = (props) => {
  const { isSelected, data } = props;
  return (
    <View style={{ width:'100%', borderWidth: 1, backgroundColor: isSelected ? "rgba(3, 129, 255, 0.03)" : "white", height: 124, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <TabAnimatedIcon icon={data.item.icon} isSelected={isSelected} />
      <Text style={{ marginLeft: 16 }}>{data.item.title}</Text>
    </View>
  );
}