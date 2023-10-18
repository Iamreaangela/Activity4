import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { List ,  MD3Colors , Divider } from 'react-native-paper';
import { ScrollView } from 'react-native';
export default function Screen12() {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  return (
    <ScrollView contentContainerStyle={styles.container} >
    <Text>List.Accordion</Text>
     <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
    <Divider/>
    <Text>List.AccordionGroup</Text>
    <List.AccordionGroup>
    <List.Accordion title="Accordion 1" id="1">
      <List.Item title="Item 1" />
    </List.Accordion>
    <List.Accordion title="Accordion 2" id="2">
      <List.Item title="Item 2" />
    </List.Accordion>
    <View>
      <Text>
        List.Accordion can be wrapped because implementation uses React.Context.
      </Text>
      <List.Accordion title="Accordion 3" id="3">
        <List.Item title="Item 3" />
      </List.Accordion>
    </View>
  </List.AccordionGroup>
  <Divider/>
  <Text>List.Icon</Text>
  <List.Icon color={MD3Colors.tertiary70} icon="folder" />
    <List.Icon color={MD3Colors.tertiary70} icon="equal" />
    <List.Icon color={MD3Colors.tertiary70} icon="calendar" />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
   
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