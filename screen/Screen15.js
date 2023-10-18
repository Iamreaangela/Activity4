import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Checkbox, TextInput, ProgressBar, MD3Colors , Button, Snackbar , ToggleButton } from 'react-native-paper';
export default function Screen15() {
    const [text, setText] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const [value, setValue] = React.useState('left');
  return (
    <View style={styles.container}>
    
    <Text>TextInput</Text>
    <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      right={<TextInput.Affix text="/100" />}
    />
      <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
    />
    <Text>ProgressBar</Text>
      <ProgressBar progress={0.1} color={MD3Colors.error50} />
      <ProgressBar progress={0.8} color={MD3Colors.error50} />
      <Text>Snackbar</Text>
      <Button mode='outlined' onPress={onToggleSnackBar}>{visible ? 'Hide SnackBar' : 'Show SnackBar'}</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>

      <Text>ToggleButton</Text>
      <ToggleButton.Group
      onValueChange={value => setValue(value)}
      value={value}>
      <ToggleButton icon="format-align-left" value="left" />
      <ToggleButton icon="format-align-right" value="right" />
    </ToggleButton.Group>

    <Text>Checkbox</Text>
      <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
     <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
     <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
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