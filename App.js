import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';

import Constants from 'expo-constants';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { Card, Paragraph, Title } from 'react-native-paper';

const officeQuotes = [
  { id: 0, author: "Michael Scott", quote: "WOULD I RATHER BE FEARED OR LOVED? EASY. BOTH. I WANT PEOPLE TO BE AFRAID OF HOW MUCH THEY LOVE ME" },
  { id: 1, author: "Jim Halpert", quote: "RIGHT NOW, THIS IS JUST A JOB. IF I ADVANCE ANY HIGHER IN THIS COMPANY, THIS WOULD BE MY CAREER. AND, UH, IF THIS WERE MY CAREER, I’D HAVE TO THROW MYSELF IN FRONT OF A TRAIN." },
  { id: 2, author: "Dwight Schrute", quote: "IDENTITY THEFT IS NOT A JOKE, JIM! MILLIONS OF FAMILIES SUFFER EVERY YEAR." },
  { id: 3, author: "Pam Beesly", quote: "AND I FEEL GOD IN THIS CHILI’S TONIGHT." },
  { id: 4, author: "Michael Scott", quote: "I’M NOT SUPERSTITIOUS, BUT I AM A LITTLE STITIOUS." },
  { id: 5, author: "Michael Scott", quote: "I’M AN EARLY BIRD AND I’M A NIGHT OWL. SO I’M WISE AND I HAVE WORMS." },
  { id: 6, author: "Jim Halpert", quote: "WE DIDN’T PLAY MANY VIDEO GAMES IN SCRANTON. INSTEAD, WE’D DO STUFF LIKE… UH, PAM AND I WOULD SOMETIMES HUM THE SAME HIGH-PITCHED NOTE AND TRY TO GET DWIGHT TO MAKE AN APPOINTMENT WITH AN EAR DOCTOR. AND, UH, PAM CALLED IT… PRETENDINITIS." },
  { id: 7, author: "Kelly Kapoor", quote: "ACK. THEY’RE TOTALLY DIFFERENT. TRASH TALK IS HYPOTHETICAL LIKE YOUR MOM IS SO FAT SHE CAN EAT THE INTERNET. BUT SMACK TALK IS HAPPENING LIKE RIGHT NOW. LIKE: YOU’RE UGLY, AND I KNOW IT FOR A FACT ’CAUSE I GOT THE EVIDENCE RIGHT THERE." },
];

const newGirlQuotes = [
  { id: 8, author: "Nick", quote: "I’m pretty sure I’m having a heart attack and I haven’t arranged for anyone to clear my internet history. I wasn’t building a bomb, I was just curious." },
  { id: 9, author: "Nick", quote: "I am not a successful adult. I don’t eat vegetables and/or take care of myself." },
  { id: 10, author: "Nick", quote: "I don’t dance! I’m from that town in 'Footloose.'" },
  { id: 11, author: "Nick", quote: "Do I regret it? Yes. Would I do it again? Probably." },
  { id: 12, author: "Nick", quote: "I can’t go to jail! I’m too sarcastic for the white gangs!" },
  { id: 13, author: "Nick", quote: "Any time a man wants to show a woman how to do something from behind, it’s just because he wants an excuse to get real close and breathe on her neck. Watch any sports movie." },
  { id: 14, author: "Jess", quote: "So when I do the chicken dance, I do it a little differently. Instead of doing claps, I like to do a peck. It’s more realistic." },
  { id: 15, author: "Jess", quote: "Everything you say sounds really creepy when you’re not wearing pants." },
  { id: 16, author: "Jess", quote: "I thought we talked about you not wearing your shower diaper in the kitchen." },
  { id: 17, author: "Schmidt", quote: "Well, Nick, I’m out of tears. Plumb out. Now, all that’s left is just yellowish goo. That’s right, Nick, goo." },
  { id: 18, author: "Schmidt", quote: "If pot were a piano, Nick would be a nine-year-old Chinese girl." },
  { id: 19, author: "Jess", quote: "I’m only attracted to guys who are afraid of success and think someone famous stole their idea." },
];

const parksAndRecQuotes = [
  { id: 20, author: "April", quote: "I wanted to make fun of stupid people while I get drunk. My two true passions." },
  { id: 21, author: "Andy", quote: "When they say 2% milk, I don't know what the other 98% is." },
  { id: 22, author: "Andy", quote: "Call an ambulance! A different ambulance! The one I ran into!" },
  { id: 23, author: "Ron", quote: "I like saying no. It lowers their enthusiasm." },
  { id: 24, author: "Ron", quote: "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk." },
  { id: 25, author: "Ron", quote: "Strippers do nothing for me…but I will take a free breakfast buffet anytime, anyplace." },
  { id: 26, author: "Andy", quote: "I tried to make ramen in the coffee pot and I broke everything." },
];

const devQuotes = [
  { id: 27, author: "Jacob", quote: "If you polish a turd all you still have a turd." },
  { id: 28, author: "Jacob", quote: "The best time to cut a tree was yesterday." },
  { id: 29, author: "Jacob", quote: "The definition of insanity is to do the same thing, but expect different results, so I must be crazy for coding." },
  { id: 30, author: "Jacob", quote: "I only cry in the shower, for recycling purposes." }
];

export default function App() {
  const [listData, setListData] = useState(officeQuotes);
  const [selectedComponent, setSelectedComponent] = useState({ author: "Michael Scott", quote: "WOULD I RATHER BE FEARED OR LOVED? EASY. BOTH. I WANT PEOPLE TO BE AFRAID OF HOW MUCH THEY LOVE ME" });
  const [category, setCategory] = useState("The Office");
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [_index, setIndex] = useState(0);

  const getRandomInt = (intVal) => {
    return Math.floor(Math.random() * intVal);
  };

  let row = [];
  let prevOpenedRow;

  const renderItem = ({ item, index }, onClick) => {
    const closeRow = (index) => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <View
          style={{
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 70,
          }}>
          <Button color="red" onPress={onClick} title="SWITCH"></Button>
        </View>
      );
    };

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
              borderColor: 'grey',
              borderWidth: 1,
              padding: 30,
              marginVertical: 18,
              marginHorizontal: 30,
              backgroundColor: 'white',
            }}
          >
            <Text
              onPress={() => {
                setIndex(getRandomInt(listData.length));
                setAuthor(listData[_index]?.author);
                setQuote(listData[_index]?.quote);
                setSelectedComponent({ author: author, quote: quote });
              }}
              style={{ fontSize: 32 }}
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
      setCategory("The Devs");
    }
    else if (JSON.stringify(listData) === JSON.stringify(devQuotes)) {
      setListData(parksAndRecQuotes);
      setCategory("Parks and Rec.");
    }
    else if (JSON.stringify(listData) === JSON.stringify(parksAndRecQuotes)) {
      setListData(newGirlQuotes);
      setCategory("New Girl");
    }
    else if (JSON.stringify(listData) === JSON.stringify(newGirlQuotes)) {
      setListData(officeQuotes);
      setCategory("The Office");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[selectedComponent]}
        renderItem={(v) =>
          renderItem(v, () => {
            console.log('Pressed', v);
            switchList();
          })
        }
        keyExtractor={(item) => item.id}
      >
      </FlatList>
      <Card
        elevation={2}
      >
        <Card.Content>
          <Title> {author} </Title>
          <Paragraph> {quote} </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  }
});
