import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { ImageSourcePropType } from "react-native";
import { TabAnimatedIcon } from './TabAnimatedIcon';

interface TabPropType {
  icon: ImageSourcePropType;
  title: string,
  id: number,
}

interface TabItemPropTypes {
  key: number,
  isSelected: boolean
  data: TabPropType,
  width: number
}

export const TabItem = (props: TabItemPropTypes) => {
  const { isSelected, data, width } = props;
  return (
    <View style={{ minWidth: width, backgroundColor: isSelected ? "rgb(248, 251, 255)" : "#fff", ...styles.container }}>
      <TabAnimatedIcon icon={data.icon} isSelected={isSelected} />
      <Text style={{ marginLeft: 16 }}>{data.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 124,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
})