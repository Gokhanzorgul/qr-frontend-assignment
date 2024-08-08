import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalContext } from '@/context/GlobalContext';
import { Router } from './Router';
import { NavigationBar } from '@/components/NavigationBar';

function Index() {
  const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0);

  return (
    <GlobalContext.Provider value={{ selectedPageIndex, setSelectedPageIndex }}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
        {/* This line was made to hide animation transitions. */}
        <View style={styles.ghostBottomBar}/>
        <NavigationBar />
      </View>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  ghostBottomBar: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    bottom: -50
  }
})

export default Index;