const { v4: uuid } = require("uuid")

const quizzes = {
    data: [
        // 1st Quiz Card --> will have title, category, description, quiz,
        {
            id: uuid(),
            category: "marvel",
            image: "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgwOTkzMTk0MDc1MjYx/marvel-quiz-copy.webp",
            title: "Marvel",
            description: "Test your knowledge of Marvel's iconic heroes, epic battles, and unforgettable stories. Challenge yourself with questions from the vast Marvel Universe.",
            quiz: [
                //1st question and options
                {
                    id: uuid(),
                    question: "Black Panther is set in which fictional country?",
                    options: [
                        { id: uuid(), option: "Wakanda", isCorrect: true },
                        { id: uuid(), option: "Takanda", isCorrect: false },
                        { id: uuid(), option: "Zakanda", isCorrect: false },
                        { id: uuid(), option: "Jakanda", isCorrect: false }
                    ]
                },
                 //2nd question and options
                {
                    id: uuid(),
                    question: "Who rescued Tony Stark and Nebula from space?",
                    options: [
                        { id: uuid(), option: "Captain America", isCorrect: false },
                        { id: uuid(), option: "Captain Marvel", isCorrect: true },
                        { id: uuid(), option: "Thor", isCorrect: false },
                        { id: uuid(), option: "Hulk", isCorrect: false }
                    ]
                },
                 //3rd question and options
                {
                    id: uuid(),
                    question: "Thor's Mjolnir is made from the metal of a dying ___?",
                    options: [
                        { id: uuid(), option: "Nebula", isCorrect: false },
                        { id: uuid(), option: "Moon", isCorrect: false },
                        { id: uuid(), option: "Star", isCorrect: true },
                        { id: uuid(), option: "Sun", isCorrect: false }
                    ]
                },
                 //4th question and options
                {
                    id: uuid(),
                    question: "What did Thor say about Jane Foster's catchphrase?",
                    options: [
                        { id: uuid(), option: "It's Crap", isCorrect: false },
                        { id: uuid(), option: "That's Bullshit", isCorrect: false },
                        { id: uuid(), option: "What ever", isCorrect: false },
                        { id: uuid(), option: "It's perfect", isCorrect: true }
                    ]
                },
            ]
        },
        //2nd quiz
        {
            id: uuid(),
            category: "dc",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "DC",
            description: "Dive into the world of DC heroes and villains! From Gotham’s shadows to Metropolis' skyline, discover how much you truly know about the DC Universe!",
            quiz: [
                {
                    id: uuid(),
                    question: "What was Wonder Woman originally named?",
                    options: [
                        { id: uuid(), option: "Anita", isCorrect: false },
                        { id: uuid(), option: "Suprema", isCorrect: true },
                        { id: uuid(), option: "Mishita", isCorrect: false },
                        { id: uuid(), option: "None", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which supervillain was once the Iranian Ambassador to the U.N.?",
                    options: [
                        { id: uuid(), option: "Wonder Man", isCorrect: false },
                        { id: uuid(), option: "Superman", isCorrect: false },
                        { id: uuid(), option: "The Joker", isCorrect: true },
                        { id: uuid(), option: "Batman", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is batman's favorite food?",
                    options: [
                        { id: uuid(), option: "Chicken Salad", isCorrect: false },
                        { id: uuid(), option: "Turkey Roast", isCorrect: false },
                        { id: uuid(), option: "Goat Ribbs", isCorrect: false },
                        { id: uuid(), option: "Mulligatawny soup", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "In how many seconds can Green Arrow shoot and reload?",
                    options: [
                        { id: uuid(), option: "Two and a half seconds", isCorrect: true },
                        { id: uuid(), option: "Two seconds", isCorrect: false },
                        { id: uuid(), option: "One seconds", isCorrect: false },
                        { id: uuid(), option: "One and a half seconds", isCorrect: false }
                    ]
                },
            ]
        },
        //3rd quiz
        {
            id: uuid(),
            category: "education",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Mathematics",
            description: "Do you believe you are a maths genius??? Test your skills to check if you actually are a genius or a noob.",
            quiz: [
                {
                    id: uuid(),
                    question: " What shape does sin(x) or cos(x) make on a graph?",
                    options: [
                        { id: uuid(), option: "Zig-Zags", isCorrect: false },
                        { id: uuid(), option: "A Parabola", isCorrect: false },
                        { id: uuid(), option: "Waves", isCorrect: true },
                        { id: uuid(), option: " A Straight Line", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following dice is not a platonic solid?",
                    options: [
                        { id: uuid(), option: "20-sided die", isCorrect: false },
                        { id: uuid(), option: "8-sided die", isCorrect: false },
                        { id: uuid(), option: "12-sided die", isCorrect: false },
                        { id: uuid(), option: "10-sided die", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the first Mersenne prime exponent over 1000?",
                    options: [
                        { id: uuid(), option: "1069", isCorrect: false },
                        { id: uuid(), option: "2203", isCorrect: false },
                        { id: uuid(), option: "1279", isCorrect: true },
                        { id: uuid(), option: "1009", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "How many books are in Euclid&#039;s Elements of Geometry?",
                    options: [
                        { id: uuid(), option: "10", isCorrect: false },
                        { id: uuid(), option: "8", isCorrect: false },
                        { id: uuid(), option: "17", isCorrect: false },
                        { id: uuid(), option: "13", isCorrect: true }
                    ]
                },
            ]
        },
        //4th quiz
        {
            id: uuid(),
            category: "entertainment",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Books",
            description: "Do you know where is the largets book market in the world located. I bet you don't know enough to get through.",
            quiz: [
                {
                    id: uuid(),
                    question: "Which of these book series is by James Patterson?",
                    options: [
                        { id: uuid(), option: "Maximum Ride", isCorrect: true },
                        { id: uuid(), option: "Harry Potter", isCorrect: false },
                        { id: uuid(), option: "The Legend of Xanth", isCorrect: false },
                        { id: uuid(), option: "The Bartemaeus Trilogy", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "By what name was the author Eric Blair better known?",
                    options: [
                        { id: uuid(), option: "Eric Hemingway", isCorrect: false },
                        { id: uuid(), option: "Aldous Huxley", isCorrect: false },
                        { id: uuid(), option: "George Orwell", isCorrect: true },
                        { id: uuid(), option: "Ray Bradbury", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What book series published by Jim Butcher follows a wizard in modern day Chicago?",
                    options: [
                        { id: uuid(), option: "The Cinder Spires", isCorrect: false },
                        { id: uuid(), option: " A Hat in Time", isCorrect: false },
                        { id: uuid(), option: "The Dresden Files", isCorrect: true },
                        { id: uuid(), option: "My Life as a Teenage Wizard", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Who wrote the 1967 horror novel Rosemary's Baby?",
                    options: [
                        { id: uuid(), option: "Stephen King", isCorrect: false },
                        { id: uuid(), option: "Robert Bloch", isCorrect: false },
                        { id: uuid(), option: "Mary Shelley", isCorrect: false },
                        { id: uuid(), option: "Ira Levin", isCorrect: true }
                    ]
                },
            ]
        },
        //5th quiz
        {
            id: uuid(),
            category: "entertainment",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Comics",
            description: "Are you a comics fan, do you love reading comics then try this out. I bet you don't know enough to get through.",
            quiz: [
                {
                    id: uuid(),
                    question: "What otherworldly land does Thor come from?",
                    options: [
                        { id: uuid(), option: "Jotunheim", isCorrect: false },
                        { id: uuid(), option: "Asgard", isCorrect: true },
                        { id: uuid(), option: "Sovengarde", isCorrect: false },
                        { id: uuid(), option: "Midgard", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "In the DC Comics 2016 reboot, Rebirth, which speedster escaped from the Speed Force after he had been erased from existance?",
                    options: [
                        { id: uuid(), option: "Jay Garrick", isCorrect: false },
                        { id: uuid(), option: "Johnny Quick", isCorrect: false },
                        { id: uuid(), option: "Wally West", isCorrect: true },
                        { id: uuid(), option: "Eobard Thawne", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which Batman sidekick is the son of Talia al Ghul?",
                    options: [
                        { id: uuid(), option: "Jason Todd", isCorrect: false },
                        { id: uuid(), option: "Tim Drake", isCorrect: false },
                        { id: uuid(), option: "Dick Grayson", isCorrect: false },
                        { id: uuid(), option: "Damian Wayne", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the name of the comic about a young boy, and a tiger who is actually a stuffed animal?",
                    options: [
                        { id: uuid(), option: "Winnie the Pooh", isCorrect: false },
                        { id: uuid(), option: "Peanuts", isCorrect: false },
                        { id: uuid(), option: "Calvin and Hobbes", isCorrect: true },
                        { id: uuid(), option: "Albert and Pogo", isCorrect: false }
                    ]
                },
            ]
        },
        //6th quiz
        {
            id: uuid(),
            category: "sports",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Sports",
            description: "Do you know the best players across multiple sports field, if yes then try it out. I bet you don't know enough to get through.",
            quiz: [
                {
                    id: uuid(),
                    question: "Which car manufacturer won the 2017 24 Hours of Le Mans?",
                    options: [
                        { id: uuid(), option: "Toyota", isCorrect: false },
                        { id: uuid(), option: "Audi", isCorrect: false },
                        { id: uuid(), option: "Porsche", isCorrect: true },
                        { id: uuid(), option: "Chevrolet", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which country did Kabaddi, a contact sport involving tackling, originate from?",
                    options: [
                        { id: uuid(), option: "Cambodia", isCorrect: false },
                        { id: uuid(), option: "Turkey", isCorrect: false },
                        { id: uuid(), option: "Australia", isCorrect: false },
                        { id: uuid(), option: "India", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which Formula 1 driver switched teams in the middle of the 2017 season?",
                    options: [
                        { id: uuid(), option: "Haryanto", isCorrect: false },
                        { id: uuid(), option: "Jolyon Palmer", isCorrect: false },
                        { id: uuid(), option: "Daniil Kvyat", isCorrect: false },
                        { id: uuid(), option: "Carlos Sainz Jr.", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "How many games did Arsenal FC go unbeaten during the 2003-2004 season of the English Premier League?",
                    options: [
                        { id: uuid(), option: "38", isCorrect: true },
                        { id: uuid(), option: "51", isCorrect: false },
                        { id: uuid(), option: "49", isCorrect: false },
                        { id: uuid(), option: "22", isCorrect: false }
                    ]
                },
            ]
        },
        //7th quiz
        {
            id: uuid(),
            category: "vehicles",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Vehicle",
            description: "Do you know the best superbikes and super cars, if yes then try it out. I bet you don't know enough to get through.",
            quiz: [
                {
                    id: uuid(),
                    question: "What part of an automobile engine uses lobes to open and close intake and exhaust valves, and allows an air/fuel mixture into the engine?",
                    options: [
                        { id: uuid(), option: "Camshaft", isCorrect: true },
                        { id: uuid(), option: "Piston", isCorrect: false },
                        { id: uuid(), option: "Crankshaft", isCorrect: false },
                        { id: uuid(), option: "Drive shaft", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Complete the following analogy: Audi is to Volkswagen as Infiniti is to ?",
                    options: [
                        { id: uuid(), option: "Nissan", isCorrect: true },
                        { id: uuid(), option: "Honda", isCorrect: false },
                        { id: uuid(), option: "Subaru", isCorrect: false },
                        { id: uuid(), option: "Hyundai", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which supercar company is from Sweden?",
                    options: [
                        { id: uuid(), option: "McLaren", isCorrect: false },
                        { id: uuid(), option: "Lamborghinit", isCorrect: false },
                        { id: uuid(), option: "Bugatti", isCorrect: false },
                        { id: uuid(), option: "Koenigsegg", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which animal features on the logo for Abarth, the motorsport division of Fiat?",
                    options: [
                        { id: uuid(), option: "Horse", isCorrect: false },
                        { id: uuid(), option: "Snake", isCorrect: false },
                        { id: uuid(), option: "Scorpion", isCorrect: true },
                        { id: uuid(), option: "Bull", isCorrect: false }
                    ]
                },
            ]
        },
        //8th quiz
        {
            id: uuid(),
            category: "History",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "education",
            description: "Challenge yourself to take this quiz on Indian History??? I bet you cannot get more than an average child.",
            quiz: [
                {
                    id: uuid(),
                    question: "In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?",
                    options: [
                        { id: uuid(), option: "Argentina", isCorrect: false },
                        { id: uuid(), option: "Chile", isCorrect: true },
                        { id: uuid(), option: "Peru", isCorrect: false },
                        { id: uuid(), option: " Brazil", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Joseph Stalin had a criminal past doing what?",
                    options: [
                        { id: uuid(), option: "Identity Fraud", isCorrect: false },
                        { id: uuid(), option: "Tax Evasion", isCorrect: false },
                        { id: uuid(), option: "Robbing Trains", isCorrect: true },
                        { id: uuid(), option: "Murder for Hire", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?",
                    options: [
                        { id: uuid(), option: "Babylonians", isCorrect: false },
                        { id: uuid(), option: "Hittites", isCorrect: false },
                        { id: uuid(), option: "Assyrians", isCorrect: true },
                        { id: uuid(), option: "Elamites", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Who was the first president born in the independent United States?",
                    options: [
                        { id: uuid(), option: "Martin Van Buren", isCorrect: true },
                        { id: uuid(), option: "John Adams", isCorrect: false },
                        { id: uuid(), option: "George Washington", isCorrect: false },
                        { id: uuid(), option: "James Monroe", isCorrect: false }
                    ]
                },
            ]
        },
    ]
}

module.exports = quizzes;