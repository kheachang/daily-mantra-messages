message = ['I am supported', 'Things happen for me not to me', 'Resilience is what you tell yourself of reality; how you frame reality', 'Desired traits are learned', 'We attract what we are ready for', 'I am exactly where I should be', 'I am always deserving and worth of what I want'];

const randomMessage = arr => {
  randomNumber = Math.floor(Math.random()*(arr.length));
  return 'Good morning! ' + 'Your mantra today is: ' + message[randomNumber] + '.'
}
console.log(randomMessage(message));
/*
'Good morning!' + ' Your mantra today is: ' + message + '.' 
return console.log(arr[randomNumber]) 


  

*/