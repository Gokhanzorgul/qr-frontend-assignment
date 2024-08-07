import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";


import { TabItem } from "@/components/TabItem";
import { window } from "@/utils";
import { Router } from './Router';
import { i18n } from '@/locales/i18n';

const PAGE_WIDTH = window.width;

const data = [
  { id: 0, icon: require('@/assets/images/document-scanner-icon.png'), title: i18n.t("pages.documentScanner.tag") },
  { id: 1, icon: require('@/assets/images/certified-icon.png'), title: i18n.t("pages.signStamp.tag") },
  { id: 2, icon: require('@/assets/images/qr-icon.png'), title: i18n.t("pages.batchScanning.tag") },
  { id: 3, icon: require('@/assets/images/unique-page-icon.png'), title: i18n.t("pages.advancedFilters.tag") },
  { id: 4, icon: require('@/assets/images/export-icon.png'), title: i18n.t("pages.exportShare.tag") },
];

function Index() {
  const [pageIndex, setPageIndex] = useState(4);
  const ref = useRef<ICarouselInstance>(null);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH * 0.75,
    // height: PAGE_WIDTH / 2,
    height: window.height / 4,
  } as const;

  return (
    <View style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Router selectedPageIndex={pageIndex} />
      <Carousel
        {...baseOptions}
        loop={false}
        ref={ref}
        style={{ width: "100%", backgroundColor: "white", position: "absolute", bottom: 0 }}
        data={data}
        pagingEnabled={true}
        onSnapToItem={index => setPageIndex(index)}
        renderItem={(data) => (
          <TabItem key={data.index} isSelected={data.index === pageIndex} data={data} />
        )}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
      />
    </View>
  );
}

export default Index;