/*
========= How to Create a Random Word Generator Using JS =========
                    by: Gabriel Robreno
*/


// Create an array of different strings
// Arrays group a set of object together in one place, whether it'd be number, word, images, etc.
var theArray = ['Money is just a concept. People empower it.', 
                'The study of history is the beginning of political wisdom.', 
                'The world is round so the place which may seem like the end, may also be only the beginning.', 
                'A clean conscience is a soft pillow.', 
                'A diamond is a hunk of coal that stuck with it.', 
                'A bashful admirer will soon be revealed.', 
                'A friend is someone who knows the song in your heart, and can sing it back to you when you have forgotten the words.', 
                'A person travels the world over in search of what he needs and returns home to find it.', 
                'A pleasant surprise is in store for you.', 
                'All people smile in the same language.', 
                'Do not mistake temptation for opportunity.', 
                'He who laughs at himself never runs out of things to laugh at.', 
                'Never forget a friend, especially if he owes you.',
                'Your many hidden talents will become obvious to those around you.',
                'Good things are being said about you.',
                'The time is right to make new friends.',
                'Pray for what you want, but work for the things you need.',
                'Happy news is on its way to you.',
                'If you want the rainbow, you must to put up with the rain.',
                'You will step on the soil of many countries.',
                'Your everlasting patience will be rewarded sooner or later.',
                'You create your own happiness.',
                'You will take a chance in something in the near future.',
                'Your great attention to detail is both a blessing and a curse.',
                'A warm smile is testimony of a generous nature.',
                'A secret admirer will soon send you a sign of affection.',
                'The skills you have gathered will one day come in handy.',
                'Today it&#39;s up to you to create the peacefulness you long for.',
                'A friend asks only for your time not your money.',
                'Your high-minded principles spell success.',
                'Hard work pays off in the future, laziness pays off now.',
                'Change can hurt, but it leads a path to something better.',
                'People are naturally attracted to you.',
                'A chance meeting opens new doors to success and friendship.',
                'The man or woman you desire feels the same about you.',
                'Meeting adversity well is the source of your strength.',
                'A dream you have will come true.',
                'There is no greater pleasure than seeing your loved ones prosper.',
                'You can make your own happiness.',
                'Love can last a lifetime, if you want it to.',
                'Be like the sea when your enemy is like the mountain.',
                'If winter comes, can spring be far behind?',
                'You will be called in to fulfill a position of high honor and responsibility.',
                'Stop wishing. Start doing.',
                'Your actions speak louder than words',
                'Be unstoppable like water and unmovable like mountains',
                'You cannot change yourself if you are not willing to.',
                'You are the controller of your destiny.',
                'Everything happens for a reason.',
                'If you are afraid to shake the dice, you will never throw a six.',
                'Do not fear what you don&#39;t know.',
                'Every day is a new day. But tomorrow is never promised.',
                'Your happiness is intertwined with your outlook on life.'
               ];



var output = document.getElementById("fortune");
output.style.opacity="0";


clicked=false;


var randGen = function() {
    if(clicked==true){
        return;   
    }
  	
    // innerHTML lets the coder modify code in the HTML without being in the HTML. It enables pages to be more interactive. It's often used with document.GetElementById, which works on all browsers.
  	output.innerHTML = " ";
    
    
    
    // Using Math.round will give you a non uniform result
    // Using Math.random will randomize any set of numbers or words that call on it
  	var rand = theArray[Math.round(Math.random() * (theArray.length - 1))];
    
    
    
    
    // Output.innerHTML activates the code using the variable 'rand' into the HTML
  	output.innerHTML = rand;
    
    // Jquery Animation
      $( "#fortune" ).animate({
    opacity: 2.00
  
    
   
  }, 3000, function() {
    // Animation complete.
  });
    
 output.style.opacity="0";    
  clicked=true;  
    
};


// Resets the Random Word Generator
var Reset = function() {
  location.reload();
};
