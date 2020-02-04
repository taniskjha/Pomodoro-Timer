// initializing set interval variable

let countdown;

// declaring selectors

const timerDisplay = document.querySelector(".display__time-left")

const endTime = document.querySelector(".display__end-time");

const buttons = document.querySelectorAll("[data-time]")

const form = document.getElementById("custom")



// making a function called timer which takes argument as number of seconds to run it

function timer(seconds) {
 // clear any exixsting timer before starting 

 clearInterval(countdown)

 // find out when timer started

 const now = Date.now(); // This is a method to get current time stamp

 //   time when clock stops;

 const then = now + seconds * 1000;  

//......................setInterval.........................//

countdown = setInterval(() => {

    

   // code out how much time left on timer to end and divide by thousand to convert it in miliseconds

   const secondsLeft = Math.round((then - Date.now()) / 1000);

    //  Put a conditional to stop the timer when we ran out of time by using clearInterval
    
       if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
    }  
   displayTimeLeft(secondsLeft)

},1000);

}

// Display time Left

function displayTimeLeft(seconds) {
   // Divide by 60 to show how many minutes left

   const minutes = Math.floor(seconds / 60);

   // get remainder to show how many seconds left

   const reSeconds = Math.floor(seconds % 60)

   // Display time variable declare

   const display = `${minutes}:${reSeconds < 10 ? '0': ''}${reSeconds}`;

   // we take our timerDisplay declared querySelector and append write to display text content

   timerDisplay.textContent = display;

   // display html title tag by document.title

   document.title = display;


   console.log(minutes, reSeconds);
  
}


// Another function for what time pomodoro is ending

function displayEndTime(timestamp) {
    const end = new Date() // used new date method to get current time 

    const hour = end.getHours()  // get the hours using new Date() method

    const minutes = end.getMinutes() // get the minutes using minutes 

    const adjustedHourTo24h = hour > 12 ? hour - 12 : hour; // adjusting hour to 24h format

    // displaying conntent to user using textContent

    endTime.textContent = `Be back at ${adjustedHourTo24h}:${minutes < 10 ? '0': ''}${minutes}`;
}


//.......................Adding-Frequently-used-timer....................//

// adding event listener

buttons.forEach(button => button.addEventListener('click', setTimer))

// creating setTimer functionality on click

function setTimer() {
    
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
    console.log(this.dataset.time)
  }

  // creating a submit event listener on form

  form.addEventListener('submit', function(e) {
      e.preventDefault();  //  prevent it from submitting a form after  Clicking on a "Submit" button,

      const mins = this.minutes.value;
      timer(mins * 60); // multiplying minutes by 60 to convert in seconds
      


  })
