// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.

// "()()" // -> true
// "(())" // -> true
// "()))" // -> false
// Also, every closing parentheses needs an opening partner before it.

// ")()(" // -> false
// "())(" // -> false

const balancePara = str => {
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case "(":
                counter--;
                break;
            case ")":
                counter++;
                if(counter > 0)return false;
        }
    }
    return counter === 0;
}

console.log(balancePara("((((((((((("));
