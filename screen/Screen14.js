import { View, Text, StyleSheet, Switch } from 'react-native'
import React , { useState}from 'react'
const Screen14 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
     <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
 padding: 5,
 gap: 10,
 justifyContent: 'center',
 alignItems: 'center'
  
  },
  row:{
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-around',
      flexWrap: 'wrap'
  }
}
);
export default Screen14