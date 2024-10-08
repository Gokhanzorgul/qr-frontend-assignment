import { Platform, Dimensions } from "react-native";
import type { ScaledSize } from "react-native";

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const isWeb = Platform.OS === "web";

export const window: ScaledSize = isWeb
  ? {
    ...Dimensions.get("window"),
    width: 700,
  }
  : Dimensions.get("window");

  export const PAGE_LODASH_DELAY = 250;