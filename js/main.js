//use JS Date object to get current data points
function getTime() {

    //declaring all variables and assigning values
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    let amPM = 'am';

    let month = date.getMonth() + 1; //accounting for 0 index
    let day = date.getDate();
    let year = date.getFullYear();

    //padding variables if necessary
    minute = padSingleDigit(minute);
    sec = padSingleDigit(sec);
    month = padSingleDigit(month);
    day = padSingleDigit(day);


    //setting 12 hour time
    if (hour > 12) {
        hour = hour - 12;
    }
    
    //setting pm if after noon and before midnight, all else will remain am
    if (hour >= 12) {
        amPM = 'pm';
    }

    //send current date/time to divs
    document.getElementById('clock').innerHTML = hour + ' : ' + minute + ' : ' + sec + ' ' + amPM;
    document.getElementById('calendar').innerHTML = month + '/' + day + '/' + year;

    let t = setTimeout(function () { getTime() }, 1000);
}

//pad minutes and seconds if single digit
function padSingleDigit(n) {
    if (n < 10) {
        return `0${n}`;
    } else {
        return n;
    };
}

//kickoff timer
getTime();


