greeting = ['Good morning!', 'Hello!', 'Howdy!', 'Good day!'];
message = ['I am supported', 'Things happen for me not to me', 'Resilience is what you tell yourself of reality; how you frame reality', 'Desired traits are learned', 'We attract what we are ready for', 'I am exactly where I should be', 'I am always deserving and worth of what I want'];
end = ['Have a great day!']
text = 'Your mantra today is: '

const randomMessageProgram = (greeting, message, end) => {
  
  randomGreeting = Math.floor(Math.random()*(greeting.length));
  randomMessage = Math.floor(Math.random()*(message.length));
  randomEnd = Math.floor(Math.random()*(end.length));
  
  return greeting[randomGreeting] + ' ' + text + message[randomMessage] + '.' + ' ' + end[randomEnd];
}

let button = document.getElementById('button'); 
let words = document.getElementById('words');

function runProgram(event) {
  words.innerHTML = randomMessageProgram(greeting, message, end);
  button.innerHTML = "Come back tomorrow!";
  
}
