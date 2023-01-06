// Module Imports
import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Button, ImageBackground } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

// Relative Imports
import { officeQuotes, newGirlQuotes, parksAndRecQuotes, devQuotes, adventureTimeQuotes, spongebobQuotes, friendsQuotes } from "./quoteTypes";

// Styling Imports
// None

export default function App() {
  let row = [];
  let prevOpenedRow;

  const [listData, setListData] = useState(officeQuotes);
  const [selectedComponent, setSelectedComponent] = useState({ author: "Michael Scott", quote: "WOULD I RATHER BE FEARED OR LOVED? EASY. BOTH. I WANT PEOPLE TO BE AFRAID OF HOW MUCH THEY LOVE ME" });
  const [category, setCategory] = useState("The Office");
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [_index, setIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(require('./the-office.jpg'));

  const getRandomInt = (intVal) => {
    return Math.floor(Math.random() * intVal);
  };

  const renderItem = ({ item, index }, onClick) => {
    const closeRow = (index) => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    // Create swipeable view
    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <View
          style={{
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 70,
          }}>
          <Button
            color="red"
            onPress={onClick}
            title="SWITCH"
          />
        </View>
      );
    };

    // Individual flat-list items with gesture attached
    return (
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={(progress, dragX) =>
            renderRightActions(progress, dragX, onClick)
          }
          onSwipeableOpen={() => closeRow(index)}
          ref={(ref) => (row[index] = ref)}
          rightOpenValue={-100}>
          <View
            style={{
              borderColor: 'aliceblue',
              borderWidth: 10,
              padding: 30,
              marginVertical: 18,
              marginHorizontal: 30,
              backgroundColor: 'azure',
              borderRadius: 2,
              elevation: 2
            }}
          >
            <Text
              onPress={() => {
                setIndex(getRandomInt(listData.length));
                setAuthor(listData[_index]?.author);
                setQuote(listData[_index]?.quote);
                setSelectedComponent({ author: author, quote: quote });
              }}
              style={{ fontSize: 32, fontFamily: 'monospace' }}
            >
              {category}
            </Text>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  const switchList = () => {
    if (JSON.stringify(listData) === JSON.stringify(officeQuotes)) {
      setListData(devQuotes);
      setCategory("Press Me! The Devs");
      setBackgroundImage(require("./devbackground.png"));
    }
    else if (JSON.stringify(listData) === JSON.stringify(devQuotes)) {
      setListData(parksAndRecQuotes);
      setCategory("Press Me! Parks and Rec.");
      setBackgroundImage(require('./parks-and-rec.jpg'));
    }
    else if (JSON.stringify(listData) === JSON.stringify(parksAndRecQuotes)) {
      setListData(newGirlQuotes);
      setCategory("Press Me! New Girl");
      setBackgroundImage(require('./new-girl.jpeg'));
    }
    else if (JSON.stringify(listData) === JSON.stringify(newGirlQuotes)) {
      setListData(adventureTimeQuotes);
      setCategory("Press Me! Adventure Time");
      setBackgroundImage(require('./adventure-time.jpg'));
    }
    else if (JSON.stringify(listData) === JSON.stringify(adventureTimeQuotes)) {
      setListData(spongebobQuotes);
      setCategory("Press Me! Spongebob");
      setBackgroundImage(require('./spongebob.jpeg'));
    }
    else if (JSON.stringify(listData) === JSON.stringify(spongebobQuotes)) {
      setListData(friendsQuotes);
      setCategory("Press Me! Friends");
      setBackgroundImage(require('./Friends.jpg'));
    }
    else {
      setListData(officeQuotes);
      setCategory("Press Me! The Office");
      setBackgroundImage(require('./the-office.jpg'));
    }
  };

  // Generate all items for a flat-list
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <FlatList
          data={[selectedComponent]}
          renderItem={(v) =>
            renderItem(v, () => {
              console.log('Pressed', v);
              switchList();
            })
          }
          key={1}
          keyExtractor={(item) => item.id}
        />
        <Card
          elevation={2}
        >
          <Card.Content>
            <Title style={{ fontFamily: 'monospace' }}> {author} </Title>
            <Paragraph style={{ fontFamily: 'monospace' }}> {quote} </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
    width: "100%",
    alignItems: "center",
  },
});
