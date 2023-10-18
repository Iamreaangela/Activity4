import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { HelperText, TextInput,  IconButton, MD3Colors  } from 'react-native-paper';
import { ScrollView } from 'react-native';
export default function Screen11() {
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);
 
   const hasErrors = () => {
     return !text.includes('@');
   };
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text>HelperText</Text>
       <TextInput label="Name" value={text} onChangeText={onChangeText} />
      <HelperText type="info" visible={hasErrors()}>
        Name is invalid!
      </HelperText>
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
      <TextInput label="Password" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Password is invalid!
      </HelperText>
      <Text>IconButton</Text>
      <Text>Default</Text>
      <IconButton
    icon="camera"
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />
 <Text>Outlined</Text>
<IconButton
    icon="home" mode='outlined'
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />
   <Text>Contained</Text>
   <IconButton
    icon="camera" mode='contained'
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />
 <Text>Contained-tonal</Text>
<IconButton
    icon="heart" mode='contained-tonal'
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />

    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
     flexGrow: 1,
   padding: 5,
   gap: 10
    
    },
    row:{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-around'
    },
    title: {
        textAlign: 'center',
      },
}
);