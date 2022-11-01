// Business Logic For Movie Tickets________
function MovieInfo(age, movieTime) {
    this.age = age;
    this.movieTime = movieTime;
}

function getTime(time) {
    const timeArray = time.split('');
    let newTime = '';
    for (i = 0; i < timeArray.length; i++) {
        if (timeArray[i] !== ':') {
            newTime += timeArray[i];
        } else {
            break;
        }
    }
    return parseInt(newTime);
}
function amORPm(time){
    const amArray = time.split('');
    return time[time.length - 2] + time[time.length - 1];
}

function costCalc(object) {
    let cost = 12
    if (object.age <=8 || object.age >= 55) {
        cost -= 2;
    } 
    if (getTime(object.movieTime) < 12 && amORPm(object.movieTime) === 'am') {
        cost -= 4
    } 
    return cost;
}

window.addEventListener("load", function(){
    document.getElementById('Django').addEventListener("click", displayCost);
    document.getElementById('Hollywood').addEventListener("click", displayCost);
});

function displayCost(event) {
    event.preventDefault();
    const movieTime = event.target.firstChild.textContent;
    const age = document.querySelector('input#age').value;
    const info = new MovieInfo(age, movieTime);
    document.getElementById('output').innerText = costCalc(info);
}