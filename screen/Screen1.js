import { View, Text } from "react-native";
import React from "react";
import { Button, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import {
  Searchbar,
  FAB,
  Portal,
  PaperProvider,
  Avatar,
  ProgressBar,
  MD3Colors,
} from "react-native-paper";
export default function Screen1({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [state, setState] = React.useState({ open: false });
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? "calendar-today" : "plus"}
          actions={[
            { icon: "plus", onPress: () => console.log("Pressed add") },
            {
              icon: "star",
              label: "Star",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "email",
              label: "Email",
              onPress: () => console.log("Pressed email"),
            },
            {
              icon: "bell",
              label: "Remind",
              onPress: () => console.log("Pressed notifications"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
          style={{ }}
        />
      </Portal>
      <Video
  ref={video}
  style={styles.video}
  source={{
    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  }}
  useNativeControls
  resizeMode={Video.CONTAIN}
  isLooping
  onPlaybackStatusUpdate={(status) => {
    if (status.isPlaying && !status.isLoaded) {
      // Video is ready to play, and it's not already playing
      video.current.playAsync();
    }
    setStatus(() => status);
  }}
/>
      <View style={styles.containers}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Avatar")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Avatar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Badge")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Badge</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Banner")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Banner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Button")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Card")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Chip")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Chip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DataTable")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Data Table</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dialog")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Dialog</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Divider")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Divider</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HelperText")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>HelperText</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("List")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Menu")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Segmented")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>Switch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TextInput")}
        >
          <View style={styles.st}></View>
          <Image
            source={require("../assets/components.png")}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.buttonText}>More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 5,
    gap: 10,
    flexWrap: "wrap",
    flexDirection: "column",
  },
  containers2: {
    flexGrow: 1,
    padding: 5,
    gap: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#FFF2D8",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  containers1: {
    flexDirection: "column",
    width: 250,
  },
  containers: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#FFF2D8",
    height: 100,
    borderRadius: 5,
    borderRadius: 5,
    elevation: 5,
    flexDirection: "column",
    width: "50%",
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    paddingLeft: 10,
    textAlign: "center",
    backgroundColor: '#113946',
    width: '100%'
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttonText1: {
    color: "#674fa3",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    textAlign: "center",
    width: '100%'
  },
  buttonTexts: {
    color: "black",
    fontSize: 15,
    fontWeight: "300",
    paddingLeft: 10,
    textAlign: "center",
  },
  texts: {
    flex: 1,
    textAlign: "center",
    fontSize: 30,
  },
});
