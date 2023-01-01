const officeQuotes = [
    { id: 0, author: "Michael Scott", quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me." },
    { id: 1, author: "Jim Halpert", quote: "Right now, this is just a job. If I had to advance any higher in this company, this would be my career. And uh, if this were my career, I'd have to throw myself in front of a train." },
    { id: 2, author: "Dwight Schrute", quote: "IDENTITY THEFT IS NOT A JOKE, JIM! MILLIONS OF FAMILIES SUFFER EVERY YEAR." },
    { id: 3, author: "Pam Beesly", quote: "And I feel god in this Chili's tonight." },
    { id: 4, author: "Michael Scott", quote: "I'm not superstitious, but am a little stitious." },
    { id: 5, author: "Michael Scott", quote: "I'm an early bird and I'm a night owl. So I'm wise and I have worms." },
    { id: 6, author: "Jim Halpert", quote: "wE didn't play many video games in Scranton. Instead, we'd do stuff like... uh, Pam and I would sometimes hum the same high-pitched note and try to get Dwight to make an appointment with an ear doctor. And, uh, Pam called it... Pretendinitis." },
    { id: 7, author: "Kelly Kapoor", quote: "ACK. THEY’RE TOTALLY DIFFERENT. TRASH TALK IS HYPOTHETICAL LIKE YOUR MOM IS SO FAT SHE CAN EAT THE INTERNET. BUT SMACK TALK IS HAPPENING LIKE RIGHT NOW. LIKE: YOU’RE UGLY, AND I KNOW IT FOR A FACT ’CAUSE I GOT THE EVIDENCE RIGHT THERE." },
    { id: 46, author: "Jim Halpert", quote: "It is not a good time for me to lose my job since I have some pretty big long-term plans in my personal life with Pam that I’d like her parents to be psyched about. So, I am about to do something very bold in this job that I’ve never done before: try." },
    { id: 47, author: "Pam Beesly", quote: "I’m guessing Angela is the one in the neighborhood that gives the trick-or-treaters toothbrushes, pennies, walnuts." },
    { id: 48, author: "Kevin Malone", quote: "The people here are amazing debaters. I guess you can say they are master-baters." },
    { id: 49, author: "Michael Scott", quote: "I say dance, they say, ‘How high?'" },
    { id: 50, author: "Dwight Schrute", quote: "Jim told me you could buy gaydar online." },
    { id: 51, author: "Michael Scott", quote: "Dwight you ignorant sl*t." },
    { id: 52, author: "Stanley Hudson", quote: "I wake up every morning in a bed that’s too small, drive my daughter to a school that’s too expensive, and then I go to work to a job for which I get paid too little. But on pretzel day? Well, I like pretzel day." },
    { id: 53, author: "Michael Scott", quote: "Why are you the way that you are? Honestly, every time I try to do something fun, or exciting, you make it… not that way. I hate… so much about the things that you choose to be." },
    { id: 54, author: "Jim Halpert", quote: "I think it’s great that the company’s making a commercial, because not very many people have heard of us. I mean, when I tell people I work at Dunder Mifflin, they think that we sell mufflers or muffins or mittens or… and frankly, all of those sound better than paper, so I let it slide." },
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

const adventureTimeQuotes = [
    { id: 31, author: "Jake", quote: "Dude, suckin’ at something is the first step to being sorta good at something." },
    { id: 32, author: "Jake", quote: "To live life, you need problems. If you get what you want the minute you want it, then what's the point of living?" },
    { id: 33, author: "Ice King", quote: "I've soiled my tunic, completely by choice!" },
    { id: 34, author: "Ice King", quote: "I'm toying with you... psychologically!" },
    { id: 35, author: "Lemongrab", quote: "It has cost me much, but I have learned lemon need not squeeze lemon to survive!" },
];

const spongebobQuotes = [
    { id: 36, author: "Spongebob", quote: "Hey Patrick, I thought of something funnier than 24… 25!" },
    { id: 37, author: "Plankton", quote: "Goodbye everyone, I’ll remember you all in therapy." },
    { id: 38, author: "Mr. Krabs", quote: "A 5 letter word for happiness –MONEY." },
    { id: 38, author: "Patrick", quote: "If I was a mom… this would be kind of shocking. Just call me daddy!" },
    { id: 39, author: "Patrick", quote: "Is mayonnaise an instrument?" },
    { id: 40, author: "Plankton", quote: "I don’t get it. No matter what I do, I always end up being squashed by someone bigger than me." },
    { id: 41, author: "Mr. Krabs", quote: "The boy cries you a sweater of tears and you kill 'em." },
    { id: 42, author: "Squidward", quote: "I order the food, you cook the food. The customer gets the food. We do that for 40 years, and then we die." },
    { id: 43, author: "Spongebob", quote: "I know of a place where you never get harmed. A magical place with magical charm. Indoors, indoors, indoors!" },
    { id: 44, author: "Patrick", quote: "Once upon a time there was an ugly barnacle. He was so ugly that everyone died. The end!" },
    { id: 45, author: "Patrick", quote: "Dumb people are always blissfully unaware of how dumb they really are…" },
];

export { officeQuotes, newGirlQuotes, parksAndRecQuotes, devQuotes, adventureTimeQuotes, spongebobQuotes };