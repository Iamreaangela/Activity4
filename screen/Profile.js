import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
      style={styles.container}
      source={{ uri: 'https://google.dev' }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
