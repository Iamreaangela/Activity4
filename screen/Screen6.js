import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Card, Button , Avatar , IconButton} from 'react-native-paper';
 
export default function Screen6() {
  return (
    <View style={styles.container}>
    <Card>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  <Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    left={(props) => <Avatar.Icon {...props} icon="folder" />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />
  <Card>
    <Card.Cover source={{ uri: 'https://picsum.photos/500' }} />
  </Card>
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