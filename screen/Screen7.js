import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Checkbox ,Chip } from 'react-native-paper';
export default function Screen7() {
    const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
   
     <Text>Chip</Text>
 <View style={styles.row}>
<Chip icon="information" onPress={() => console.log('Pressed')}>Information</Chip>
<Chip icon="camera" onPress={() => console.log('Pressed')}>Capture</Chip>
<Chip icon="heart" mode='outlined' onPress={() => console.log('Pressed')}>Follow</Chip>
<Chip icon="home" mode='outlined' onPress={() => console.log('Pressed')}>Home</Chip>
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