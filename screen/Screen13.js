import { View, Text } from 'react-native'
import React from 'react'
import { Menu } from 'react-native-paper';
export default function Screen13() {
  return (
    <View>
    <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
    <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
    <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Cut" disabled />
    <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Copy" disabled />
    <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
    </View>
  )
}