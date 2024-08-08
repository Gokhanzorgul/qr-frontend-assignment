import React, { useContext, useRef, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import { TabItem } from './TabItem';
import { i18n } from '@/locales/i18n';
import { GlobalContext } from '@/context/GlobalContext';

const CARD_WIDTH = 301;

const tabs = [
  { id: 0, icon: require('@/assets/images/document-scanner-icon.png'), title: i18n.t("pages.documentScanner.tag") },
  { id: 1, icon: require('@/assets/images/certified-icon.png'), title: i18n.t("pages.signStamp.tag") },
  { id: 2, icon: require('@/assets/images/qr-icon.png'), title: i18n.t("pages.batchScanning.tag") },
  { id: 3, icon: require('@/assets/images/unique-page-icon.png'), title: i18n.t("pages.advancedFilters.tag") },
  { id: 4, icon: require('@/assets/images/export-icon.png'), title: i18n.t("pages.exportShare.tag") },
];


export const NavigationBar = () => {
  const { selectedPageIndex, setSelectedPageIndex } = useContext(GlobalContext);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setSelectedPageIndex(Math.round(parseFloat(String(event.nativeEvent.contentOffset.x / CARD_WIDTH))))
  }
  return (
    <View style={styles.container}>
      <ScrollView
        onMomentumScrollEnd={(e) => handleOnScroll(e)}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        decelerationRate={0}
        snapToInterval={CARD_WIDTH}
        snapToAlignment='center'
      >
        {
          tabs.map((tab) => <TabItem width={CARD_WIDTH} key={tab.id} isSelected={tab.id === selectedPageIndex} data={tab} />)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex:2,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: "rgba(50,50,50,0.05)",
    paddingHorizontal: 0,
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})