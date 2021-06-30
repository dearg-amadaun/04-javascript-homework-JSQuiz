/*Timer*/
var counter = 60;
var interval = setInterval(function() {
    counter--;
    if (counter <= 0) {
     		clearInterval(interval);
      	
        /*Need to link timer to scoring, and slow down game over prompt */
         $('#countdown').html("<h3>Game Over!</h3>");  
        return window.location.assign('/assets/html/end-quiz.html');
    }else{
    	$('#countdown').text(counter);
    }
}, 1000);
