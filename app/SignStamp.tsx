import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { i18n } from '@/locales/i18n';
import { PageTitle } from '@/components/PageTitle';
import { PageTag } from '@/components/PageTag';
import { PageDescription } from '@/components/PageDescription';
import { CustomButton } from '@/components/CustomButton';
import Animated, { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';

const DELAY_ONE = 500;
const DELAY_TWO = 700;

export const SignStamp = () => {
  const bottom = useSharedValue<number>(0);
  const imageOneWidth = useSharedValue<number>(0);
  const imageOneHeight = useSharedValue<number>(0);
  const imageTwoWidth = useSharedValue<number>(0);
  const imageTwoHeight = useSharedValue<number>(0);

  useEffect(() => {
    setTimeout(() => {
      bottom.value = withSpring(bottom.value + 150);
      imageOneWidth.value = withDelay(DELAY_ONE, withSpring(imageOneWidth.value + 120));
      imageOneHeight.value = withDelay(DELAY_ONE, withSpring(imageOneHeight.value + 90));
      imageTwoWidth.value = withDelay(DELAY_TWO, withSpring(imageTwoWidth.value + 141))
      imageTwoHeight.value = withDelay(DELAY_TWO, withSpring(imageTwoHeight.value + 118));
    }, 1000)
  }, [])

  return (
    <View style={styles.container}>
      <PageTag text={i18n.t("pages.signStamp.tag")} />
      <PageTitle text={i18n.t("pages.signStamp.title")} />
      <PageDescription text={i18n.t("pages.signStamp.description")} />
      <CustomButton style={{ marginTop: 40 }} />

      <View style={styles.animatedContainer}>
        <Animated.Image
          source={require("@/assets/images/signature-screen-phone.png")}
          style={{ ...styles.image, bottom }}>
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/signature-screen-sub-1.png")}
          style={{ ...styles.subImageOne, width: imageOneWidth, height: imageOneHeight }}>
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/signature-screen-sub-2.png")}
          style={{ ...styles.subImageTwo, width: imageTwoWidth, height: imageTwoHeight }}>
        </Animated.Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: "100%",
    paddingHorizontal: 24,
    borderWidth: 1,
    alignItems: "center"
  },
  animatedContainer: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  image: {
    objectFit: "scale-down",
    height: 352,
    width: "100%",
    position: "absolute",
  },
  subImageOne: {
    objectFit: "fill",
    position: "absolute",
    left: 0,
    bottom: 260
  },
  subImageTwo: {
    objectFit: "fill",
    position: "absolute",
    right: -12,
    bottom: 280
  }
});