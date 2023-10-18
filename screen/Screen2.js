import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Avatar, Divider } from 'react-native-paper';
export default function Screen2() {
  return (
    <View style={styles.container}>
    <Text>Icon</Text>
    <View style={styles.row}>
      <Avatar.Icon size={60} icon="home" />
      <Avatar.Icon size={60} icon="home" />
      <Avatar.Icon size={60} icon="home" />
      </View>
      <Divider/>
      <Text>Image</Text>
    <View style={styles.row}>
    <Avatar.Image size={60} source={require('../assets/favicon.png')} />
    <Avatar.Image size={60} source={require('../assets/favicon.png')} />
    <Avatar.Image size={60} source={require('../assets/favicon.png')} />
      </View>
      <Divider/>
      <Text>Text</Text>
    <View style={styles.row}>
    <Avatar.Text size={60} label="A" />
    <Avatar.Text size={60} label="B" />
    <Avatar.Text size={60} label="C" />
      </View>
      <Divider/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
   padding: 5,
   gap: 10
    
    },
    row:{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-around'
    }
}
);