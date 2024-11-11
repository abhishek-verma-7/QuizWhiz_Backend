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
            category: "education",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Geography",
            description: "Do you know where is the highest cricket ground in the world. I bet you don't know enough to get through.",
            quiz: [
                {
                    id: uuid(),
                    question: "Which of these countries is the smallest by population?",
                    options: [
                        { id: uuid(), option: "Norway", isCorrect: true },
                        { id: uuid(), option: "Finland", isCorrect: false },
                        { id: uuid(), option: "Hong Kong", isCorrect: false },
                        { id: uuid(), option: "Slovakia", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "The following Spanish provinces are located in the northern area of Spain except:",
                    options: [
                        { id: uuid(), option: "Asturias", isCorrect: false },
                        { id: uuid(), option: "Murcia", isCorrect: true },
                        { id: uuid(), option: "Leon", isCorrect: false },
                        { id: uuid(), option: "Navarre", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the capital city of Slovenia?",
                    options: [
                        { id: uuid(), option: "Maribor", isCorrect: false },
                        { id: uuid(), option: "Velenje", isCorrect: false },
                        { id: uuid(), option: "Trbovlje", isCorrect: false },
                        { id: uuid(), option: "Ljubljana", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following language families is the most controversial amongst modern linguists?",
                    options: [
                        { id: uuid(), option: "Indo-European", isCorrect: false },
                        { id: uuid(), option: "Dravidian", isCorrect: false },
                        { id: uuid(), option: "Sino-Tibetan", isCorrect: false },
                        { id: uuid(), option: "Altaic", isCorrect: true }
                    ]
                },
            ]
        },
        //6th quiz
        {
            id: uuid(),
            category: "education",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Mathematics",
            description: "Do you believe you are a maths genius??? Test your skills to check if you actually are a genius or a noob.",
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
        //7th quiz
        {
            id: uuid(),
            category: "education",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Mathematics",
            description: "Do you believe you are a maths genius??? Test your skills to check if you actually are a genius or a noob.",
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
        //8th quiz
        {
            id: uuid(),
            category: "education",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Mathematics",
            description: "Do you believe you are a maths genius??? Test your skills to check if you actually are a genius or a noob.",
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
        //9th quiz
        {
            id: uuid(),
            category: "education",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "Mathematics",
            description: "Do you believe you are a maths genius??? Test your skills to check if you actually are a genius or a noob.",
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
    ]
}

module.exports = quizzes;