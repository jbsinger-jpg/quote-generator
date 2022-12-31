import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import { Card, List, Paragraph, Title } from 'react-native-paper';

export default function MainPage() {
    const [selectedComponent, setSelectedComponent] = useState("");
    const [author, setAuthor] = useState("");
    const [quote, setQuote] = useState("");
    const [index, setIndex] = useState(0);
    const [tvSeriesExpanded, setTVSeriesExpanded] = useState(false);
    const [devExpanded, setDevExpanded] = useState(false);

    const handleTVSeriesPress = () => setTVSeriesExpanded(!tvSeriesExpanded);
    const handleDevRowPress = () => setDevExpanded(!devExpanded);

    const officeQuotes = [
        { author: "Michael Scott", quote: "WOULD I RATHER BE FEARED OR LOVED? EASY. BOTH. I WANT PEOPLE TO BE AFRAID OF HOW MUCH THEY LOVE ME" },
        { author: "Jim Halpert", quote: "RIGHT NOW, THIS IS JUST A JOB. IF I ADVANCE ANY HIGHER IN THIS COMPANY, THIS WOULD BE MY CAREER. AND, UH, IF THIS WERE MY CAREER, I’D HAVE TO THROW MYSELF IN FRONT OF A TRAIN." },
        { author: "Dwight Schrute", quote: "IDENTITY THEFT IS NOT A JOKE, JIM! MILLIONS OF FAMILIES SUFFER EVERY YEAR." },
        { author: "Pam Beesly", quote: "AND I FEEL GOD IN THIS CHILI’S TONIGHT." },
        { author: "Michael Scott", quote: "I’M NOT SUPERSTITIOUS, BUT I AM A LITTLE STITIOUS." },
        { author: "Michael Scott", quote: "I’M AN EARLY BIRD AND I’M A NIGHT OWL. SO I’M WISE AND I HAVE WORMS." },
        { author: "Jim Halpert", quote: "WE DIDN’T PLAY MANY VIDEO GAMES IN SCRANTON. INSTEAD, WE’D DO STUFF LIKE… UH, PAM AND I WOULD SOMETIMES HUM THE SAME HIGH-PITCHED NOTE AND TRY TO GET DWIGHT TO MAKE AN APPOINTMENT WITH AN EAR DOCTOR. AND, UH, PAM CALLED IT… PRETENDINITIS." },
        { author: "Kelly Kapoor", quote: "ACK. THEY’RE TOTALLY DIFFERENT. TRASH TALK IS HYPOTHETICAL LIKE YOUR MOM IS SO FAT SHE CAN EAT THE INTERNET. BUT SMACK TALK IS HAPPENING LIKE RIGHT NOW. LIKE: YOU’RE UGLY, AND I KNOW IT FOR A FACT ’CAUSE I GOT THE EVIDENCE RIGHT THERE." },
    ];

    const newGirlQuotes = [
        { author: "Nick", quote: "I’m pretty sure I’m having a heart attack and I haven’t arranged for anyone to clear my internet history. I wasn’t building a bomb, I was just curious." },
        { author: "Nick", quote: "I am not a successful adult. I don’t eat vegetables and/or take care of myself." },
        { author: "Nick", quote: "I don’t dance! I’m from that town in 'Footloose.'" },
        { author: "Nick", quote: "Do I regret it? Yes. Would I do it again? Probably." },
        { author: "Nick", quote: "I can’t go to jail! I’m too sarcastic for the white gangs!" },
        { author: "Nick", quote: "Any time a man wants to show a woman how to do something from behind, it’s just because he wants an excuse to get real close and breathe on her neck. Watch any sports movie." },
        { author: "Jess", quote: "So when I do the chicken dance, I do it a little differently. Instead of doing claps, I like to do a peck. It’s more realistic." },
        { author: "Jess", quote: "Everything you say sounds really creepy when you’re not wearing pants." },
        { author: "Jess", quote: "I thought we talked about you not wearing your shower diaper in the kitchen." },
        { author: "Schmidt", quote: "Well, Nick, I’m out of tears. Plumb out. Now, all that’s left is just yellowish goo. That’s right, Nick, goo." },
        { author: "Schmidt", quote: "If pot were a piano, Nick would be a nine-year-old Chinese girl." },
        { author: "Jess", quote: "I’m only attracted to guys who are afraid of success and think someone famous stole their idea." },
    ];

    const parksAndRecQuotes = [
        { author: "April", quote: "I wanted to make fun of stupid people while I get drunk. My two true passions." },
        { author: "Andy", quote: "When they say 2% milk, I don't know what the other 98% is." },
        { author: "Andy", quote: "Call an ambulance! A different ambulance! The one I ran into!" },
        { author: "Ron", quote: "I like saying no. It lowers their enthusiasm." },
        { author: "Ron", quote: "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk." },
        { author: "Ron", quote: "Strippers do nothing for me…but I will take a free breakfast buffet anytime, anyplace." },
        { author: "Andy", quote: "I tried to make ramen in the coffee pot and I broke everything." },
    ];

    const devQuotes = [
        { author: "Jacob", quote: "If you polish a turd all you still have a turd." },
        { author: "Jacob", quote: "The best time to cut a tree was yesterday." },
        { author: "Jacob", quote: "The definition of insanity is to do the same thing, but expect different results, so I must be crazy for coding." },
        { author: "Jacob", quote: "I only cry in the shower, for recycling purposes." }
    ];

    const getRandomInt = (intVal) => {
        return Math.floor(Math.random() * intVal);
    };

    return (
        <View>
            <List.Section title="Quote Options">
                <List.Accordion
                    title="TV Series"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={tvSeriesExpanded}
                    onPress={handleTVSeriesPress}>
                    <List.Item title="The Office" onPress={() => setSelectedComponent(officeQuotes)} />
                    <List.Item title="Parks and Rec" onPress={() => setSelectedComponent(parksAndRecQuotes)} />
                    <List.Item title="New Girl" onPress={() => setSelectedComponent(newGirlQuotes)} />
                </List.Accordion>
                <List.Accordion
                    title="Developers"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={devExpanded}
                    onPress={handleDevRowPress}>
                    <List.Item title="Funny" onPress={() => setSelectedComponent(devQuotes)} />
                </List.Accordion>
            </List.Section>
            {(author || quote) &&
                <Card
                    elevation={2}
                >
                    <Card.Content>
                        <Title> {author} </Title>
                        <Paragraph> {quote} </Paragraph>
                    </Card.Content>
                </Card>
            }
            {selectedComponent &&
                <Button
                    title="Random"
                    onPress={() => {
                        setIndex(getRandomInt(selectedComponent.length));
                        setAuthor(selectedComponent[index]?.author);
                        setQuote(selectedComponent[index]?.quote);
                    }}
                />
            }
        </View>
    );
}