import React, { useEffect } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export const CustomButton = (props) => {
  const opacity = useSharedValue<number>(0);
  const { onPress, title = 'Learn More', style } = props;

  useEffect(() => {
    opacity.value = withSpring(1);
  }, [])

  return (
    <Animated.View style={{opacity}}>
      <Pressable style={{ ...styles.button, ...style }} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 1.48,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 14.81,
    lineHeight: 17.68,
    fontWeight: 400,
    color: '#0B122A',
  },
});