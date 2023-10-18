import * as React from 'react';
import { View , StyleSheet} from 'react-native';
import { Divider, Text } from 'react-native-paper';

export default function Screen10() {
  return (
    <View style={styles.container}>
    <Text>Lemon</Text>
    <Divider />
    <Text>Mango</Text>
    <Divider />
    <Text>Apple</Text>
    <Divider />
    <Text>Banane</Text>
    <Divider />
    <Text>Pineapple</Text>
    <Divider />
    <Text>Guava</Text>
    <Divider />
    <Text>Starapple</Text>
    <Divider />
    <Text>Jack Fruit</Text>
    <Divider />
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