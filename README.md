###Features
* To  show a reminder when you submit a ajax request to server and remove reminder after the server responsed.   
   
###Get code    
    git clone git://github.com/outmanone/ajaxProcessReminder.git   
    cd ajaxProcessReminder   
###Test and Function description       

* ln -s {your path}/ajaxProcessReminder {your server document path}/apr    
* Open your browser and type : http://localhost/apr/test   
* There are two builted-in players:     
  1. it will change the text of button or hyperlinks when you submit a ajax request on it.   
  2. it will show a overlayer on the browser window when you submit a ajax request on any element.     
     (the player is default player.)    
* You may customize the player of the 'ajaxProcessReminder' and let it work for your idea.     
  (there is a simple sample like this :)    
	$('.submit').ajaxProcessReminder({player:{
	   start:function() {console.log('start...');},
	   end:function() {console.log('end...');}
	}});