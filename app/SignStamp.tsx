import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';

import { i18n } from '@/locales/i18n';
import { PageTitle } from '@/components/PageTitle';
import { PageTag } from '@/components/PageTag';
import { PageDescription } from '@/components/PageDescription';
import { CustomButton } from '@/components/CustomButton';
import { HScale, WScale } from '@/utils/layout';

const DELAY_ONE = 500;
const DELAY_TWO = 700;

const IMAGE_HEIGHT = HScale(466);

export const SignStamp = () => {
  const bottom = useSharedValue<number>(-IMAGE_HEIGHT);
  const imageOneWidth = useSharedValue<number>(0);
  const imageOneHeight = useSharedValue<number>(0);
  const imageTwoWidth = useSharedValue<number>(0);
  const imageTwoHeight = useSharedValue<number>(0);

  useEffect(() => {
    setTimeout(() => {
      bottom.value = withSpring(bottom.value + IMAGE_HEIGHT - HScale(60));
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
      <CustomButton style={{ marginTop: HScale(20) }} onPress={() => null} />

      <View style={styles.animatedContainer}>
        <Animated.Image
          source={require("@/assets/images/signStamp/phone.png")}
          style={{ ...styles.image, bottom }}>
        </Animated.Image>
      </View>
      <Animated.Image
        source={require("@/assets/images/signStamp/signature-screen-sub-1.png")}
        style={{ ...styles.subImageOne, width: imageOneWidth, height: imageOneHeight }}>
      </Animated.Image>
      <Animated.Image
        source={require("@/assets/images/signStamp/signature-screen-sub-2.png")}
        style={{ ...styles.subImageTwo, width: imageTwoWidth, height: imageTwoHeight }}>
      </Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: WScale(24),
    alignItems: "center"
  },
  animatedContainer: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: WScale(230),
    height: IMAGE_HEIGHT,
    objectFit: "contain",
    position: "absolute",
  },
  subImageOne: {
    objectFit: "fill",
    position: "absolute",
    left: WScale(24),
    bottom: HScale(80),
  },
  subImageTwo: {
    objectFit: "fill",
    position: "absolute",
    right: WScale(24),
    bottom: HScale(100)
  }
});