
const quotesArr = [
    {'author': 'Oscar Wilde', 
     'quote':'Be yourself; everyone else is already taken.'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Jane Austen', 
     'quote': 'There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.'
    },
    {'author': 'Richard P. Feynman', 
     'quote': 'Nobody ever figures out what life is all about, and it doesn\'t matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
];

function generateQuote(){
    document.querySelector('.quote-container').style.display = "flex";
    var randomNum = Math.floor(Math.random()*quotesArr.length+1)-1;
    console.log(randomNum);
    document.querySelector('#quote').innerHTML = `“${quotesArr[randomNum].quote}”`;
    document.querySelector('#author').innerHTML = `— ${quotesArr[randomNum].author}`;
    
}
