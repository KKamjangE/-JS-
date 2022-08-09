const quotes = [
    {
        quote: "When winter comes, spring won't be far away.",
        author: "Shelly",
    },
    {
        quote: "Small opportunities often lead to great achievements.",
        author: "Demosthenes",
    },
    {
        quote: "Success is not about being satisfied. I succeeded because I was satisfied.",
        author: "Alain",
    },
    {
        quote: "Money is like sea water. It makes you thirsty the more you drink it.",
        author: "Schopenhauer",
    },
    {
        quote: "Don't just have a mind. must be practiced.",
        author: "Bruce Lee",
    },
    {
        quote: "He who has not eaten bread with tears does not know the true taste of life.",
        author: "Goethe",
    },
    {
        quote: "do what you have to Everything is for the happiness of others, and at the same time, especially for my own happiness.",
        author: "Tolstoy",
    },
    {
        quote: "Count to 100 when you are angry. At worst, swear by them.",
        author: "mark twain",
    },
    {
        quote: "Poverty exists where you feel poor.",
        author: "Emerson",
    },
    {
        quote: "Don't look for problems, find solutions.",
        author: "Henry Ford",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author