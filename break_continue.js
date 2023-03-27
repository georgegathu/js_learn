//break: is used to stop the entire iteration
//continue: is used to skip just that iteration

let ratings = [7, 8, 5, 3, 0, 6, 10, 7, 8];

for(let i = 0; i <ratings.length; i++){

    if(ratings[i] == 0){
        console.log(`Rating: ${ratings[i]} - SKIP`);
        continue;
    }
    if(ratings[i] == 10){
        console.log(`Rating: ${ratings[i]} - MUST WATCH`)
        break;
    }
    console.log(`Rating: ${ratings[i]}`);
}