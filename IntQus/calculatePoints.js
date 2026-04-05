/*
The task is to calculate their comparison points by comparing each category:
If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
*/

let aliceRatings = [17, 28, 30];
let bobRatings = [99, 16, 8];
let aliceScore = 0;
let bobScore = 0;

for(let j = 0; j < 3; j++){
    if(aliceRatings[j] > bobRatings[j]){
        aliceScore++;
    }else{
        bobScore++;
    }
}

console.log([aliceScore, bobScore]);