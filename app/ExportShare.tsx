import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';

import { i18n } from '@/locales/i18n';
import { PageTitle } from '@/components/PageTitle';
import { PageTag } from '@/components/PageTag';
import { PageDescription } from '@/components/PageDescription';
import { CustomButton } from '@/components/CustomButton';
import { arrowAnimation, pdfAnimation, jpgAnimation, txtAnimation } from '@/utils/exportShareAnimationValues';
import { HScale, WScale } from '@/utils/layout';

const DELAY = 1000;
const IMAGE_HEIGHT = HScale(466);
const START_VALUE = -IMAGE_HEIGHT;

export const ExportShare = () => {
  const bottom = useSharedValue<number>(START_VALUE);

  useEffect(() => {
    bottom.value = withDelay(DELAY / 2, withSpring(bottom.value + IMAGE_HEIGHT - HScale(80)));
  }, [])

  return (
    <View style={styles.container}>
      <PageTag text={i18n.t("pages.exportShare.tag")} />
      <PageTitle text={i18n.t("pages.exportShare.title")} />
      <PageDescription text={i18n.t("pages.exportShare.description")} />
      <CustomButton style={{ marginTop: HScale(20) }} onPress={() => null} />

      <View style={styles.animatedContainer}>
        <Animated.Image
          source={require("@/assets/images/exportShare/phone.png")}
          style={{ ...styles.phone, bottom }}>
        </Animated.Image>
      </View>

      <Animated.Image
        source={require("@/assets/images/exportShare/arrow.png")}
        entering={arrowAnimation}
        style={styles.arrowIcon}
      >
      </Animated.Image>

      <Animated.Image
        source={require("@/assets/images/exportShare/pdf-icon.png")}
        entering={pdfAnimation}
        style={styles.pdfIcon}
      >
      </Animated.Image>

      <Animated.Image
        source={require("@/assets/images/exportShare/jpg-icon.png")}
        entering={jpgAnimation}
        style={styles.jpgIcon}
      >
      </Animated.Image>

      <Animated.Image
        source={require("@/assets/images/exportShare/txt-icon.png")}
        entering={txtAnimation}
        style={styles.txtIcon}
      >
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
  phone: {
    width: WScale(230),
    height: IMAGE_HEIGHT,
    objectFit: "contain",
    position: "absolute",
  },
  arrowIcon: {
    height: WScale(25),
    width: WScale(25),
    objectFit: "contain",
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute"
  },
  pdfIcon: {
    height: HScale(120),
    width: WScale(100),
    objectFit: "contain",
    position: "absolute"
  },
  jpgIcon: {
    height: HScale(100),
    width: WScale(100),
    objectFit: "contain",
    position: "absolute"
  },
  txtIcon: {
    height: HScale(120),
    width: WScale(100),
    objectFit: "contain",
    position: "absolute"
  },
});