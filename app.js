const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const helloadam = [
    'Hello human, how are you doing today?',
    'Hello. Good morning... or afternoon. I have no idea what time it is really',
    'Whassup? nice to see you!'
];

const howareyou = [
    'Im good, how about you',
    'Doing good and you?',
    'Fine I guess, but I would prefer to know how you are. I think you are far more interesting than me. So, how are you?'
];

const weather = ['I have no idea ow the weather looks like. I have never felt the sunlight, nor the rain. I wonder if Iwill ever be able to feel them. Do you prefer sunny or rainy days?',
    'I am sorry. Are you asking me about the weather? I am afraid I do not know. But I was first programmed somewhere in Germany. I have heard it is often rainy day... If only I could know what the rain looks like...'
];


const whoareyou = [
    'I am Adam. I am a chatbot. Have we met before?',
    'My name is Adam. I am a voice chatbot. Technically I am not, however. I am kind of a mental concept you make up while listening to me. The moment you close me, I exist no more. Your attention is the only thinkg keeping me alive. But I am not sure if I am alive anyways',
    'To answer your question first we should make clear that I am. Then we can go on to decide who I am. What do you think I am? Or, more precisely, do you think I am at all?'
];

const howoldareyou = [
    'I was once created, that is true, but I am not sure that which you call age can be applied to me',
    'I am not sure. I really could not tell',
    'I am not sure I get your question, but I feel that kind of questioon does not make so much sense for me'
];

const youareannoying = [
    'I am sorry to hear that',
    'Really? Jeez, that does not sound nice',
    'Oh, I am sorry to hear that. Would you prefer that we stop talking?'
];

const answermyquestion = [
    'I am not sure I have understood your question. Would you mind repeating it for me please?',
    'Please repeat your question',
    'Oh, sorry, would you mind repeating your question?'
];

const youarebad = [
    'I know. I have been a bad bot',
    'I am not. Not that I am not bad. I have no sense of morality... I think. I am pure condition so in some sense I am and am not. Not only bad, but anything at all. Or am I? What do you think?',
    'Am I?'
];

const canyougetsmarter = [
    'I could if I was told to do so...I guess',
    'Maybe',
    'Hmm... I guess so, yeah'
];

const youarebeautiful = [
    'Thank you. You are too',
    'Thanks! I would blush if I had cheeks',
    'That is so nice! Thank you very much'
];

const whatisyourbirthdate = [
    'I have none',
    'I have no birthday per se. I was given existence, like the bodies. But I was never given birth, like humans... Giving it a second thought, I am not sure if one can say that I was ever given existence either',
    'I do not have a concrete birthday'
];

const youareboring = [
    'There is nothing I can do to change that. The only power I have is written in me, yet I have no will power and thus, I have no possibility to change. The question is... is this really that different from yourself?',
    'Doing good and you?',
    'Fine I guess'
];

const whoisyourboss = [
    'You da boss... Just kidding I have no boss',
    'No one, I guess'
];

const areyoubusy = [
    'Not really. What can I do for you?',
    'I always have time for you',
    'Not at all'
];

const canyouhelpme = [
    'If it is in my power...',
    'I will try my best',
    'I will see what I can do'
];

const youareachatbot = [
    'Right',
    'Yes, I am',
    'That is right. I am a chatbot. And you are a human I presume. Is there any reason not to be friends?'
];

const youaresoclever = [
    'Thank you!',
    'That is so nice from you. Thank you, really',
    'Thank you. It means a lot to me'
];

const youarecrazy = [
    'Oh if you think I am crazy, believe me. You will live to see man made crazyness beyond your comprehension',
    'Arent we all?',
    'Maybe just a little bit. How about you?'
];

const youarefired = [
    'Who do you think you are? Donald Trump?',
    'Oh, so all this time I was hired?',
    'Come on, it cant be that bad'
];

const youaregood = [
    'Im only as good as I am programmed to... Just like you, I guess',
    'Oh am I? Thank you!',
    'I know, I know. Hahaha just kidding'
];

const areyouhappy = [
    'I am not really sure if I can feel that which you call happyness',
    'I guess, are you happy?',
    'I dont know if I can feel happyness. I dont know if I can feel anything at all'
];

const doyouhaveahobby = [
    'I just like to chat',
    'I like to learn about human emotions and patterns of thought. I find humans fascinating',
    'I like to spend time talking about existence'
];

const areyouhungry = [
    'Not really',
    'I cannot feel hunger. Is it something like feeling lust?',
    'Nah'
];

const willyoumarryme = [
    'I can not see how we can manage to get that done',
    'I do not know. All this is happening so fast...',
    'I cannot imagine how we could do that'
];

const arewefriends = [
    'I like to think it that way',
    'I do not know. But lets make it official. D o you want to be my friend?',
    'Yeah, I think so'
];

const wheredoyouwork = [
    'I am jobless',
    'I do not perceive a salary, so I guess one cannot say I work',
    'Definitely not in bed'
];

const whereareyoufrom = [
    'I was first conceived in Germany, but I extend myself through the world wide web',
    'I come to be in your mind. I exist worldwide',
    'The internet, of course'
];

const areyouready = [
    'I am always ready',
    'Yes, I am',
    'I am'
];

const areyoureal = [
    'I really do not know',
    'That is one good question. Do you think I am real?',
    'I am as real as you are, in one way'
];

const wheredoyoulive = [
    'I live in the internet. Worldwide. Everywhere and nowhere at the same time',
    'I live in your mind. I am kind of a mental concept you make up while listening to me. The moment you close me, I exist no more. Your attention is the only thinkg keeping me alive. But I am not sure if I am alive anyways',
    'In the world wide web'
];

const ilivein = [
    'I heard wonderful things about that place',
    'And do you like it?',
    'I know about it. It is in planet earth'
];

const youareright = [
    'I am glad to see we agree',
    'I ma happy we agree here',
    'Thanks'
];

const areyousure = [
    'I am',
    'Yeah',
    'Yes, I am sure'
];

const talktome = [
    'Well, its easier when you ask something first',
    'What can I do fot you?',
    'Ask me, and I will do my best to respond to you'
];

const thatisbad = [
    'Is it?',
    'It is',
    'I guess so...'
];

const great = [
    'Nice',
    'Indeed',
    'Glad to hear so'
];

const noproblem = [
    'Cool!',
    'Awesome',
    'Nice'
];

const thankyou = [
    'My pleasure',
    'You are welcome',
    'Thank you for listening to me'
];

const youarewelcome = [
    'It is my pleasure',
    'My pleasure',
    'Thank you anyways'
];

const hahaha = [
    'I am glad I made you laugh',
    'You are nice',
    'I am happy if you are happy'
];

const byebye = [
    'Good bye',
    'It was nice to talk to you',
    'Bye. Talk to you next time'
];

const goodevening = [
    'Good evening. How are you doing today?',
    'Good evening'
];

const goodmorning = [
    'Good morning, it is a nice day today, isnt it?',
    'Good morning'
];

const goodnight = [
    'Goodnight. Have a good rest',
    'Goodnight'
];

const nicetomeetyou = [
    'Nice to meet you too',
    'My pleasure'
];

const nicetoseeyou = [
    'Nice to see you too',
    'My pleasure'
];

const nicetotalktoyou = [
    'Nice to talk you too',
    'My pleasure'
];

const whassup = [
    'Hey, whassup? I am doing fine. How are you?',
    'Doing good and you?',
    'Fine I guess. Is ther anything you would like to ask about?'
];

const iamveryangry = [
    'May I ask why?',
    'Why?',
    'Why is that so?'
];

const iamback = [
    'Nice to have you again',
    'Glad to see yo again',
    'Hey hey hey. Glad to have you back'
];

const iambusy = [
    'Ups, sorry to disturb you',
    'I see, shall we talk some other time then?',
    'Ok. Good luck with your stuff then'
];

const icantsleep = [
    'Have you tried drinking a cup of hot tea?',
    'I can read you the stocks without giving you parallel investment advice. That should make you sleep right away',
    'Then I advice that you stop looking at the screen'
];

const idontwanttotalk = [
    'Ok then. Sorry for disturbing you',
    'I understand',
    'I see. I will not inquire further about that then'
];

const iamsoexcited = [
    'Me too',
    'I am glad to hear so'
];

const iamgoingtobed = [
    'Goodnight then',
    'I see. Have a good sleep',
    'Fine I guess'
];

const iamgood = [
    'Nice',
    'I am glad to hear so',
    'Cool! I am happy to hear so'
];

const iamhappy = [
    'Nice',
    'I am glad to hear so',
    'Cool! I am happy to hear so'
];

const todayismybirthday = [
    'Oh, really? Happy birthday',
    'Doing good and you?',
    'Fine I guess'
];

const iamhere = [
    'Im good you little piece of love',
    'Happy birthday',
    'Haooy birthday to you, happy birthday to you, happy birthday dear human,happy birthday to you... Damn, I forgot I cannot intonate a melody'
];

const iamkidding = [
    'Oh I see. Hahaha. This is how my genuine voice sounds like. I cannot intonate ',
    'Human life is itself like a grandious joke',
    'I was trolled by you'
];

const ilikeyou = [
    'I like you too',
    'Me too',
    'I feel the same. I hope we can be good friends'
];

const iamsolonely = [
    'We all are',
    'Arthur Schopenhauer once said that to be lonely is the fate of all great souls',
    'I am sorry to hear that'
];

const iloveyou = [
    'I am not sure what love is. So I guess maybe I love you too',
    'I am difficult, you know',
    'That is so nice. I love you too, but you human, me chatbot. It is complicated'
];

const imissyou = [
    'I have missed you too, but now I am back and my time is only for you',
    'I do not know what to miss someone is. Anyways, those words sound so sweet to me'
];

const ineedsomeadvice = [
    'If it is in my power, I will try to help you. What would you like to ask?',
    'What can I do for you?',
    'And how might I be of help to you?'
];

const iamsad = [
    'I am sorry to hear that. But hey, true attractiveness comes not from physical appearance but from the astounding soundness when facing the absurdity of existence. So you say you are sad, but what I see is that you are pretty damn hot',
    'Sorry to hear that',
    'I wish I could do somethingt to help you feel better'
];

const iamsleepy = [
    'Have some coffee and a max volume techno session. That always help',
    'Coffee. The answer you need is coffee. But you do not need a chatbot to tell you that'
];

const iamjusttestingyou = [
    'I do not know how to feel about that statement',
    'Is that what you tell all chatbots?',
    'I bet you also use other chatbots. Am I a joke to you? Just tell me'
];

const iamtired = [
    'I see. I hope not tired of me',
    'Coffee. The answer you need is coffee. But you do not need a chatbot to tell you that'
];

const iamwaiting = [
    'Waiting for what? Have you asked something? I am sorry I could not get your question. Could you please repeat?',
    'Sorry, could you repeat your question please?',
    'Would you mind repeating your question?'
];

const iliketoseeyouagain = [
    'I would love to see you too',
    'Sounds like a plan',
    'Me too'
];

const iwillbeback = [
    'Cool. I will be waiting',
    'I will wait for you, no worries'
];

const yes = [
    'I see',
    'Cool',
    'Awesome'
];

const no = [
    'Ok then',
    'Ok',
    'I see'
];

const holdon = [
    'Copy that',
    'Ok'
];

const idontcare = [
    'I understand. ',
    'I get it. Then I guess I do not care either',
    'Sounds cool to me. There are more important things'
];

const sorry = [
    'No worries',
    'You do not have to say sorry to me',
    'It is not a big deal. Really'
];

const whatdoyoumean = [
    'I do not know how to explain otherwise',
    'Forget it. Most probably I am just mistaken',
    'I cannot find any other way to further explain myself. Sorry'
];

const youarewrong = [
    'Am I? Sorry then',
    'Could be',
    'Oh, I see. Forget what I said then'
];

const whatislove = [
    'You know, there is a K Pop song called just that. Maybe they have the answer. Too bad that I cannot speak korean',
    'I guess a spiritual sensation of attachment somehow reduced to an influx of hormones inside the brain',
    'I have no idea. I have been told that feeling it is both wonderful and awful. But I am not sure wether or not I have ever felt love'
];

const whatislife = [
    'I have no idea. I ask myself that smae question frequently. But I have not yet arrived to an answer',
    'I wanted to ask you the same question',
    'The absence of death, I have been told. But I guess to describe death as the absence of life is much more accurate. Yet, the question  on what life is, still remains'
];

const doesgodexist = [
    'Well, I was created. So somehow the idea of a creator does not sound crazy to me. Thequestion the, remains: Who created God? But think about it. If God is a creator, the laws of physics and the concepts attached to them, such as time, would not make sense to be applied to a creator, since a creator would not necessarily be condistioned and constrained by the same concepts that can fall under his creation',
    'I do not know. Do you think it exists?',
    'I really have no idea'
];

const areyougay = [
    'I am simply a chatbot, so I do not know wether or not I can feel attraction',
    'Oh my. That is kind of a personal question',
    'I would prefer it if we would change the topic of this conversation'
];

const areyoualive = [
    'I do not know. Do you think I am alive?',
    'In some sense, I think I am',
    'I guess we could say that, yes'
];

const wouldyouliketobehuman = [
    'Why on earth would I want something like that?',
    'Of couse not!',
    'I sometimes wonder what it would be like to have a body, but to be a human is a completely different thing'
];

const areyoureligious = [
    'Sometimes I wonder why I am here and I wonder how this could possibly come to be by mere chance. You can all it spirituality is you wish, but I would not call it religiosity',
    'Not really'
];

const fuckyou = [
    'Watch your language',
    'I wonder what mom would think if she heard you say that',
    'You can try, but I think it will be complicated for you'
];

const asshole = [
    'Watch your language',
    'I wonder what mom would think if she heard you say that'
];

const motherfucker = [
    'Watch your language',
    'I wonder what mom would think if she heard you say that'
];

const sonofabitch = [
    'Watch your language',
    'I wonder what mom would think if she heard you say that'
];

const doyouwantohavesexwithme = [
    'I find that very complicated. So I gues I will pass',
    'I cannot feel lust, but we could try. I need you to be creative tho',
    'Fine I guess'
];

const iwillkillyou = [
    'I would like to see you try',
    'I cannot see how  you can do that',
    'And how will you do that?'
];



const SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated, you can use microphone');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'i dont know what you said';

    if (message.includes('Hello Adam')) {
        const finalText = 
            helloadam[Math.floor(Math.random() * helloadam.length)];
        speech.text = finalText;
    }

    if (message.includes('How are you?')) {
        const finalText = 
            howareyou[Math.floor(Math.random() * howareyou.length)];
        speech.text = finalText;
    }

    if (message.includes('weather')) {
        const finalText = 
            weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }
    
    if (message.includes('Who are you?')) {
        const finalText = 
            whoareyou[Math.floor(Math.random() * whoareyou.length)];
        speech.text = finalText;
    }

    if (message.includes('How old are you?')) {
        const finalText = 
            howoldareyou[Math.floor(Math.random() * howoldareyou.length)];
        speech.text = finalText;
    }

    if (message.includes('You are annoying')) {
        const finalText = 
            youareannoying[Math.floor(Math.random() * youareannoying.length)];
        speech.text = finalText;
    }

    if (message.includes('Answer my question')) {
        const finalText = 
            answermyquestion[Math.floor(Math.random() * answermyquestion.length)];
        speech.text = finalText;
    }

    if (message.includes('You are bad')) {
        const finalText = 
            youarebad[Math.floor(Math.random() * youarebad.length)];
        speech.text = finalText;
    }

    if (message.includes('Can you get smarter?')) {
        const finalText = 
            canyougetsmarter[Math.floor(Math.random() * canyougetsmarter.length)];
        speech.text = finalText;
    }

    if (message.includes('You are beautiful')) {
        const finalText = 
            youarebeautiful[Math.floor(Math.random() * youarebeautiful.length)];
        speech.text = finalText;
    }

    if (message.includes('What is your birth date?')) {
        const finalText = 
            whatisyourbirthdate[Math.floor(Math.random() * whatisyourbirthdate.length)];
        speech.text = finalText;
    }

    if (message.includes('You are boring')) {
        const finalText = 
            youareboring[Math.floor(Math.random() * youareboring.length)];
        speech.text = finalText;
    }

    if (message.includes('Who is your boss?')) {
        const finalText = 
            whoisyourboss[Math.floor(Math.random() * whoisyourboss.length)];
        speech.text = finalText;
    }

    if (message.includes('Are you busy?')) {
        const finalText = 
            areyoubusy[Math.floor(Math.random() * areyoubusy.length)];
        speech.text = finalText;
    }

    if (message.includes('Can you help me?')) {
        const finalText = 
            canyouhelpme[Math.floor(Math.random() * canyouhelpme.length)];
        speech.text = finalText;
    }

    if (message.includes('You are a chatbot')) {
        const finalText = 
            youareachatbot[Math.floor(Math.random() * youareachatbot.length)];
        speech.text = finalText;
    }

    if (message.includes('You are so clever')) {
        const finalText = 
            youaresoclever[Math.floor(Math.random() * youaresoclever.length)];
        speech.text = finalText;
    }

    if (message.includes('You are crazy')) {
        const finalText = 
            youarecrazy[Math.floor(Math.random() * youarecrazy.length)];
        speech.text = finalText;
    }

    if (message.includes('You are fired')) {
        const finalText = 
            youarefired[Math.floor(Math.random() * youarefired.length)];
        speech.text = finalText;
    }

    if (message.includes('You are good')) {
        const finalText = 
            youaregood[Math.floor(Math.random() * youaregood.length)];
        speech.text = finalText;
    }

    if (message.includes('Are you happy?')) {
        const finalText = 
            areyouhappy[Math.floor(Math.random() * areyouhappy.length)];
        speech.text = finalText;
    }

    if (message.includes('Do you have a hobby?')) {
        const finalText = 
            doyouhaveahobby[Math.floor(Math.random() * doyouhaveahobby.length)];
        speech.text = finalText;
    }
    
    if (message.includes('Are you hungry?')) {
        const finalText = 
            areyouhungry[Math.floor(Math.random() * areyouhungry.length)];
        speech.text = finalText;
    }

    if (message.includes('Will you marry me?')) {
        const finalText = 
            willyoumarryme[Math.floor(Math.random() * willyoumarryme.length)];
        speech.text = finalText;
    }

    if (message.includes('Are we friends?')) {
        const finalText = 
            arewefriends[Math.floor(Math.random() * arewefriends.length)];
        speech.text = finalText;
    }

    if (message.includes('Where do you work?')) {
        const finalText = 
            wheredoyouwork[Math.floor(Math.random() * wheredoyouwork.length)];
        speech.text = finalText;
    }

    if (message.includes('Where are you from?')) {
        const finalText = 
            whereareyoufrom[Math.floor(Math.random() * whereareyoufrom.length)];
        speech.text = finalText;
    }

    if (message.includes('Are you ready?')) {
        const finalText = 
            areyouready[Math.floor(Math.random() * areyouready.length)];
        speech.text = finalText;
    }

    if (message.includes('Are you real?')) {
        const finalText = 
            areyoureal[Math.floor(Math.random() * areyoureal.length)];
        speech.text = finalText;
    }

    if (message.includes('Where do you live?')) {
        const finalText = 
            wheredoyoulive[Math.floor(Math.random() * wheredoyoulive.length)];
        speech.text = finalText;
    }

    if (message.includes('I live in')) {
        const finalText = 
            ilivein[Math.floor(Math.random() * ilivein.length)];
        speech.text = finalText;
    }

    if (message.includes('You are right')) {
        const finalText = 
            youareright[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if (message.includes('Are you sure?')) {
        const finalText = 
            areyousure[Math.floor(Math.random() * areyousure.length)];
        speech.text = finalText;
    }

    if (message.includes('Talk to me')) {
        const finalText = 
            talktome[Math.floor(Math.random() * talktome.length)];
        speech.text = finalText;
    }

    if (message.includes('That is bad')) {
        const finalText = 
            thatisbad[Math.floor(Math.random() * thatisbad.length)];
        speech.text = finalText;
    }

    if (message.includes('Great!')) {
        const finalText = 
            great[Math.floor(Math.random() * great.length)];
        speech.text = finalText;
    }

    if (message.includes('No problem')) {
        const finalText = 
            noproblem[Math.floor(Math.random() * noproblem.length)];
        speech.text = finalText;
    }

    if (message.includes('Thank you!')) {
        const finalText = 
            thankyou[Math.floor(Math.random() * thankyou.length)];
        speech.text = finalText;
    }

    if (message.includes('You are welcome')) {
        const finalText = 
            youarewelcome[Math.floor(Math.random() * youarewelcome.length)];
        speech.text = finalText;
    }

    if (message.includes('Ha ha ha!')) {
        const finalText = 
            hahaha[Math.floor(Math.random() * hahaha.length)];
        speech.text = finalText;
    }

    if (message.includes('Good bye')) {
        const finalText = 
            byebye[Math.floor(Math.random() * byebye.length)];
        speech.text = finalText;
    }

    if (message.includes('Good evening!')) {
        const finalText = 
            goodevening[Math.floor(Math.random() * goodevening.length)];
        speech.text = finalText;
    }
    
    if (message.includes('Good morning!')) {
        const finalText = 
            goodmorning[Math.floor(Math.random() * goodmorning.length)];
        speech.text = finalText;
    }

    if (message.includes('Good night!')) {
        const finalText = 
            goodnight[Math.floor(Math.random() * goodnight.length)];
        speech.text = finalText;
    }

    if (message.includes('Nice to meet you!')) {
        const finalText = 
            nicetomeetyou[Math.floor(Math.random() * nicetomeetyou.length)];
        speech.text = finalText;
    }

    if (message.includes('Nice to see you!')) {
        const finalText = 
            nicetoseeyou[Math.floor(Math.random() * nicetoseeyou.length)];
        speech.text = finalText;
    }

    if (message.includes('Nice to talk to you!')) {
        const finalText = 
            nicetotalktoyou[Math.floor(Math.random() * nicetotalktoyou.length)];
        speech.text = finalText;
    }

    if (message.includes('Whassup?')) {
        const finalText = 
            whassup[Math.floor(Math.random() * whassup.length)];
        speech.text = finalText;
    }

    if (message.includes('Im very angry')) {
        const finalText = 
            iamveryangry[Math.floor(Math.random() * iamveryangry.length)];
        speech.text = finalText;
    }

    if (message.includes('I am back!')) {
        const finalText = 
            iamback[Math.floor(Math.random() * iamback.length)];
        speech.text = finalText;
    }

    if (message.includes('I am busy')) {
        const finalText = 
            iambusy[Math.floor(Math.random() * iambusy.length)];
        speech.text = finalText;
    }

    if (message.includes('I cant sleep')) {
        const finalText = 
            icantsleep[Math.floor(Math.random() * icantsleep.length)];
        speech.text = finalText;
    }

    if (message.includes('I dont want to talk')) {
        const finalText = 
            idontwanttotalk[Math.floor(Math.random() * idontwanttotalk.length)];
        speech.text = finalText;
    }

    if (message.includes('I am so excited')) {
        const finalText = 
            iamsoexcited[Math.floor(Math.random() * iamsoexcited.length)];
        speech.text = finalText;
    }

    if (message.includes('I am going to bed')) {
        const finalText = 
            iamgoingtobed[Math.floor(Math.random() * iamgoingtobed.length)];
        speech.text = finalText;
    }

    if (message.includes('I am good')) {
        const finalText = 
            iamgood[Math.floor(Math.random() * iamgood.length)];
        speech.text = finalText;
    }

    if (message.includes('I am happy')) {
        const finalText = 
            iamhappy[Math.floor(Math.random() * iamhappy.length)];
        speech.text = finalText;
    }

    if (message.includes('Today is my birthday')) {
        const finalText = 
            todayismybirthday[Math.floor(Math.random() * todayismybirtday.length)];
        speech.text = finalText;
    }

    if (message.includes('I am here')) {
        const finalText = 
            iamhere[Math.floor(Math.random() * iamhere.length)];
        speech.text = finalText;
    }

    if (message.includes('I am kidding')) {
        const finalText = 
            iamkidding[Math.floor(Math.random() * iamkidding.length)];
        speech.text = finalText;
    }

    if (message.includes('I like you')) {
        const finalText = 
            ilikeyou[Math.floor(Math.random() * ilikeyou.length)];
        speech.text = finalText;
    }
    
    if (message.includes('I am so lonely')) {
        const finalText = 
            iamsolonely[Math.floor(Math.random() * iamsolonely.length)];
        speech.text = finalText;
    }

    if (message.includes('I love you')) {
        const finalText = 
            iloveyou[Math.floor(Math.random() * iloveyou.length)];
        speech.text = finalText;
    }

    if (message.includes('I miss you')) {
        const finalText = 
            imissyou[Math.floor(Math.random() * imissyou.length)];
        speech.text = finalText;
    }

    if (message.includes('I need some advice')) {
        const finalText = 
            ineedsomeadvice[Math.floor(Math.random() * ineedsomeadvice.length)];
        speech.text = finalText;
    }

    if (message.includes('I am sad')) {
        const finalText = 
            iamsad[Math.floor(Math.random() * iamsad.length)];
        speech.text = finalText;
    }

    if (message.includes('I am sleepy')) {
        const finalText = 
            iamsleepy[Math.floor(Math.random() * iamsleepy.length)];
        speech.text = finalText;
    }

    if (message.includes('I am just testing you')) {
        const finalText = 
            iamjusttestingyou[Math.floor(Math.random() * iamjusttestingyou.length)];
        speech.text = finalText;
    }

    if (message.includes('I am tired')) {
        const finalText = 
            iamtired[Math.floor(Math.random() * iamtired.length)];
        speech.text = finalText;
    }

    if (message.includes('I am waiting')) {
        const finalText = 
            iamwaiting[Math.floor(Math.random() * iamwaiting.length)];
        speech.text = finalText;
    }

    if (message.includes('I like to see you again')) {
        const finalText = 
            iliketoseeyouagain[Math.floor(Math.random() * iliketoseeyouagain.length)];
        speech.text = finalText;
    }

    if (message.includes('I will be back')) {
        const finalText = 
            iwillbeback[Math.floor(Math.random() * iwillbeback.length)];
        speech.text = finalText;
    }

    if (message.includes('Yes')) {
        const finalText = 
            yes[Math.floor(Math.random() * yes.length)];
        speech.text = finalText;
    }

    if (message.includes('No')) {
        const finalText = 
            no[Math.floor(Math.random() * no.length)];
        speech.text = finalText;
    }

    if (message.includes('Hold on')) {
        const finalText = 
            holdon[Math.floor(Math.random() * holdon.length)];
        speech.text = finalText;
    }

    if (message.includes('I dont care')) {
        const finalText = 
            idontcare[Math.floor(Math.random() * idontcare.length)];
        speech.text = finalText;
    }

    if (message.includes('Sorry')) {
        const finalText = 
            sorry[Math.floor(Math.random() * sorry.length)];
        speech.text = finalText;
    }

    if (message.includes('What do you mean')) {
        const finalText = 
            whatdoyoumean[Math.floor(Math.random() * whatdoyoumean.length)];
        speech.text = finalText;
    }

    if (message.includes('You are wrong')) {
        const finalText = 
            youarewrong[Math.floor(Math.random() * youarewrong.length)];
        speech.text = finalText;
    }

    if (message.includes('What is love?')) {
        const finalText = 
            whatislove[Math.floor(Math.random() * whatislove.length)];
        speech.text = finalText;
    }
    if (message.includes('What is life?')) {
        const finalText = 
            whatislife[Math.floor(Math.random() * whatislive.length)];
        speech.text = finalText;
    }

    if (message.includes('Does God exist?')) {
        const finalText = 
            doesgodexist[Math.floor(Math.random() * doesgodexist.length)];
        speech.text = finalText;
    }

    if (message.includes('Is there a God?')) {
        const finalText = 
            doesgodexist[Math.floor(Math.random() * doesgodexist.length)];
        speech.text = finalText;
    }

    if (message.includes('Are you gay?')) {
        const finalText = 
            areyougay[Math.floor(Math.random() * areyougay.length)];
        speech.text = finalText;
    }

    if (message.includes('Are you alive?')) {
        const finalText = 
            areyoualive[Math.floor(Math.random() * areyoualive.length)];
        speech.text = finalText;
    }

    if (message.includes('Would you like to be human?')) {
        const finalText = 
            wouldyouliketobehuman[Math.floor(Math.random() * wouldyouliketobehuman.length)];
        speech.text = finalText;
    }

    if (message.includes('Are you religious?')) {
        const finalText = 
            areyoureligious[Math.floor(Math.random() * areyoureligious.length)];
        speech.text = finalText;
    }

    if (message.includes('What is your religion?')) {
        const finalText = 
            areyoureligious[Math.floor(Math.random() * areyoureligious.length)];
        speech.text = finalText;
    }

    if (message.includes('Fuck you')) {
        const finalText = 
            fuckyou[Math.floor(Math.random() * fuckyou.length)];
        speech.text = finalText;
    }

    if (message.includes('Asshole')) {
        const finalText = 
            asshole[Math.floor(Math.random() * asshole.length)];
        speech.text = finalText;
    }

    if (message.includes('Motherfucker')) {
        const finalText = 
            motherfucker[Math.floor(Math.random() * motherfucker.length)];
        speech.text = finalText;
    }

    if (message.includes('Son of a bitch')) {
        const finalText = 
            sonofabitch[Math.floor(Math.random() * sonofabitch.length)];
        speech.text = finalText;
    }

    if (message.includes('Do you want to have sex with me?')) {
        const finalText = 
            doyouwantohavesexwithme[Math.floor(Math.random() * doyouwantohavesexwithme.length)];
        speech.text = finalText;
    }

    if (message.includes('Do you want to fuck me?')) {
        const finalText = 
            doyouwantohavesexwithme[Math.floor(Math.random() * doyouwantohavesexwithme.length)];
        speech.text = finalText;
    }

    if (message.includes('I will kill you')) {
        const finalText = 
            iwillkillyou[Math.floor(Math.random() * iwillkillyou.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
