var qoute=document.getElementById("quote");
var author=document.getElementById("author");

var groupsOfQuotes=[
    {
        qoute:"Be yourself; everyone else is already taken.",
        author:"― Oscar Wilde"
    },
     {
        qoute:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    },
     {
        qoute:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },
     {
        qoute:"“If you tell the truth, you don't have to remember anything.”",
        author:"― Mark Twain"
    },
     {
        qoute:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"― Oscar Wilde"
    },
    {
        qoute:"“Always forgive your enemies; nothing annoys them so much.”",
        author:"― Oscar Wilde"
    },
    {
        qoute:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author:"― Mahatma Gandhi"
    },
    {
        qoute:"“Without music, life would be a mistake.”",
        author:"― Friedrich Nietzsche"
    },
    {
        qoute:"““It does not do to dwell on dreams and forget to live.”",
        author:"― Mark Twain"
    },
    {
        qoute:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author:"― Mark Twain"
    },
    {
        qoute:"“We are all in the gutter, but some of us are looking at the stars.”",
        author:"― Mark Twain"
    },

]
function appearQuote(){
var random = Math.floor(Math.random()*groupsOfQuotes.length);
qoute.innerHTML=groupsOfQuotes[random].qoute;
author.innerHTML=groupsOfQuotes[random].author;


 }
