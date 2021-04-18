greeting = ['Good morning!', 'Hello!', 'Howdy!', 'Good day!'];
message = ['I am supported', 'Things happen for me not to me', 'Resilience is what you tell yourself of reality; how you frame reality', 'Desired traits are learned', 'We attract what we are ready for', 'I am exactly where I should be', 'I am always deserving and worth of what I want'];
end = ['Have a great day!']
text = 'Your mantra today is: '
let pastRandomNumber;

const randomMessageProgram = (greeting, message, end) => {
  
  randomGreeting = Math.floor(Math.random()*(greeting.length));
  randomMessage = Math.floor(Math.random()*(message.length));
  if(randomMessage === pastRandomNumber){
    randomMessage = Math.floor(Math.random()*(message.length));
  }
  randomEnd = Math.floor(Math.random()*(end.length));
  
  return console.log(greeting[randomGreeting] + ' ' + text + message[randomMessage] + '.' + ' ' + end[randomEnd]);
}

//DOM
let button = document.getElementById('button');

function runProgram(event) {
  
}

button.onclick = runProgram; 