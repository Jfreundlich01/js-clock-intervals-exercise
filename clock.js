const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

//function runs clock
function clockRun(){
    //creates date. Accesses current day and time
    const date = new Date();
    console.log(date)

    //creates hour variable. Prints to military time so out of 24
    let hours = date.getHours()
    //console.log(hours)

    //creates minute variable. Prints 0-60. 
    let minutes = date.getMinutes()
    //console.log(minutes)
    
    // creates seconds variable. Prints 0-60
    let seconds = date.getSeconds()

    let secondRotation = (seconds/60)
    let minuteRotation = (minutes/60)
    let hourRotation = (((minuteRotation) + hours)/12)

    //console.log(seconds);

    //gets the seconds to run!!
    secondHand.style.transform = "rotate(" + (secondRotation * 360) + "deg)"

    //get the minutes to run!!
    minuteHand.style.transform = "rotate(" + (minuteRotation * 360) + "deg)"
    
    //gert the hours to run!
    hourHand.style.transform = "rotate(" + (hourRotation * 360) + "deg)"

}

setInterval(clockRun,1000)

