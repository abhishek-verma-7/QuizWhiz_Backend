import geog from "../assets/geog.svg";
import history from "../assets/history.svg";
import math from "../assets/maths.svg";
import book from "../assets/book.svg";
import comics from "../assets/comics.svg";
import science from "../assets/science.svg";
import tech from "../assets/tech.svg";
import sports from "../assets/sports.svg";
import vehicle from "../assets/vehicle.svg";

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
        {
            id: uuid(),
            category: "education",
            img: math,
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
        }

    ]
}

module.exports = quizzes;