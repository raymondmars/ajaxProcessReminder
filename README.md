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
     Hyperlinks:   
	 !['before'][1.1] --> !['starting'][1.2]   
	 Button:  
	 !['before'][1.3] --> !['starting'][1.4]   
  2. it will show a overlayer on the browser window when you submit a ajax request on any element.     
     (the player is default player.)    
	 !['starting'][1.5]
	 
* You may customize the player of the 'ajaxProcessReminder' and let it work for your idea.     
  (there is a simple sample like this :)    
    $('.submit').ajaxProcessReminder({player:{   
         start:function() {console.log('start...');},   
         end:function() {console.log('end...');}   
    }});                                                

[1.1]:  http://outmanone.github.com/images/proj-img/Snip20120614_5.png
[1.2]:  http://outmanone.github.com/images/proj-img/Snip20120614_6.png
[1.3]:  http://outmanone.github.com/images/proj-img/Snip20120614_7.png
[1.4]:  http://outmanone.github.com/images/proj-img/Snip20120614_8.png
[1.5]:  http://outmanone.github.com/images/proj-img/Snip20120614_9.png
