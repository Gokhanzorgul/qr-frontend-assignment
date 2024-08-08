import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { i18n } from '@/locales/i18n';
import { PageTitle } from '@/components/PageTitle';
import { PageTag } from '@/components/PageTag';
import { PageDescription } from '@/components/PageDescription';
import { CustomButton } from '@/components/CustomButton';
import Animated, { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';
import { HScale, WScale } from '@/utils/layout';

const DELAY = 1500;
const IMAGE_HEIGHT = HScale(466);
const START_VALUE = -IMAGE_HEIGHT;


export const BatchScanning = () => {
  const bottom = useSharedValue<number>(START_VALUE);
  const pageOneAnimation = useSharedValue<number>(START_VALUE);
  const pageTwoAnimation = useSharedValue<number>(START_VALUE);
  const pageThreeAnimation = useSharedValue<number>(START_VALUE);

  useEffect(() => {
    bottom.value = withDelay(DELAY / 2, withSpring(bottom.value + IMAGE_HEIGHT - HScale(80)));
    pageOneAnimation.value = withDelay(DELAY, withSpring(pageOneAnimation.value + HScale(420)));
    pageTwoAnimation.value = withDelay(DELAY + 500, withSpring(pageTwoAnimation.value + HScale(410)));
    pageThreeAnimation.value = withDelay(DELAY + 1000, withSpring(pageThreeAnimation.value + HScale(400)));
  }, [])

  return (
    <View style={styles.container}>
      <PageTag text={i18n.t("pages.batchScanning.tag")} />
      <PageTitle text={i18n.t("pages.batchScanning.title")} />
      <PageDescription text={i18n.t("pages.batchScanning.description")} />
      <CustomButton style={{ marginTop: HScale(20) }} onPress={() => null} />

      <View style={styles.animatedContainer}>
        <Animated.Image
          source={require("@/assets/images/batchScanning/phone.png")}
          style={{ ...styles.image, bottom }}>
        </Animated.Image>

         <Animated.Image
          source={require("@/assets/images/batchScanning/page-three.png")}
          style={{ ...styles.page, bottom: pageOneAnimation, height: HScale(330),width: WScale(180), }}>
        </Animated.Image> 

        <Animated.Image
          source={require("@/assets/images/batchScanning/page-three.png")}
          style={{ ...styles.page, bottom: pageTwoAnimation, height: HScale(320),width: WScale(190), }}>
        </Animated.Image>
 
        <Animated.Image
          source={require("@/assets/images/batchScanning/page-three.png")}
          style={{ ...styles.page, bottom: pageThreeAnimation, height: HScale(310),width: WScale(200), }}>
        </Animated.Image> 
      </View>
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
  page: {
    objectFit: "contain",
    position: "absolute",
  },
});