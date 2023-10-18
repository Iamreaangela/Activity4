import { Image , Text, StyleSheet , View} from 'react-native';
import React from 'react'
import { Button} from 'react-native-paper';

export default function Screen5() {
  return (
    <View style={styles.container}>
     <Text>Text Button (text)</Text>
      <View style={styles.row}>
       <Button icon="camera" mode="text" onPress={() => console.log('Pressed')}>
   Camera
  </Button>
  <Button icon="home" mode="outlined" onPress={() => console.log('Pressed')}>
   Home
  </Button>
  <Button icon="heart" mode="elevated" onPress={() => console.log('Pressed')}>
   Heart
  </Button>
  <Button icon="folder" mode="contained-tonal" onPress={() => console.log('Pressed')}>
   Folder
  </Button>
  </View>
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
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
}
);