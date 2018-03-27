// Since we are programming adventurers, write a program that returns an array of every word that appears more than once in the phrase. Your final array should have just one instance of the repeated words. So if you were to find a word multiple times, your final array should have it just once.

// empty array
// .join()
// .push()
// .slice()

// look through all the words using split
// for any given word, check if it appears more than once
//store duplicates in new array
const str = ["Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."]; 

const moveWall = str => {
    const counts = {};
    const output = [];
    const rmSpecial = str.replace(/[^a-z\s]/gi, "").toLowercase();
    const strArray = rmSpecial.split(" ");

    // let words = [""];
    for(let i = 0; i < str.length; i++) {
        if(counts.hasOwnProperty(str[i]) ){
            if(!output.includes(str[i])) {
               output.push(str);

            }
        } else {
            counts[str[i]] = 1;
        }        
    }
    return output; 
}

console.log(moveWall(str));