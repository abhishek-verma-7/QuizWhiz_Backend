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
            image: "https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid",
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
            image: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
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
            image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taWN8ZW58MHx8MHx8fDA%3D",
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
            image: "data:image/jpeg;base64,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",
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
            image: "https://www.motortrend.com/uploads/2023/02/Luxury-Plug-in-Hybrid-SUVs.jpg?w=768&width=768&q=75&format=webp",
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
            category: "education",
            image: "https://dualcreditathome.com/wp-content/uploads/2014/02/history.jpg",
            title: "History",
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