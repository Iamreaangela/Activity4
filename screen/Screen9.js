import { View , StyleSheet} from 'react-native'

import * as React from 'react';
import { Dialog, Portal, Text} from 'react-native-paper';
export default function Screen9() {
    const [visible, setVisible] = React.useState(true);

    const hideDialog = () => setVisible(false);

  return (
  <View>
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>Warning</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">Please Update Your App</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>
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
    },
    title: {
        textAlign: 'center',
      },
}
);