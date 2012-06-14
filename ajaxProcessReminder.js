// ajaxProcessReminder v0.1 - to show a reminder when ajax starting, based on jQuery 1.4+
// Copyright (c) 2012 , Jason Jiang - outmanone.github.com
// License: http://www.opensource.org/licenses/mit-license.php
;(function($) {
        $.fn.ajaxProcessReminder=function(opt) {

        	 var oldTxt=this.get(0).tagName.toUpperCase()==='INPUT'?this.val():this.html();
        	 var players=[{
        	 	name:'chgBtnTxt',  
        	 	clickEvents:[],       	 	
        	 	start:function(target,param) {
        	  		target.attr('disabled',true);
        	  		var events=[];
        	  		switch(target.get(0).tagName.toUpperCase()){
        	  			case 'A':
        	  			  target.html(param.processTxt);
        	  			  target.addClass('disabled'); 
		                  if(this.clickEvents.length==0) {
		                     $.each(target.data('events'), function(i, event){
		                       $.each(event, function(i, handler){
		                           //console.log( handler);
		                           if(handler.type==='click') {
		                            events.push(handler.handler);
		                           }   
		                       });
		                     });  
		                     this.clickEvents=events;
		                  };
			  
        	  			  target.unbind('click');       	  			  
        	  			  
        	  			  break;
        	  			case 'INPUT' :
        	  			  target.val(param.processTxt);
        	  			  break;
        	  			default:
        	  			  throw 'Invalid tag name, can not be supported.'
        	  		}

        	 	},
        	 	end:function(target,param) {
        	  		target.attr('disabled',false);
        	  		target.val(oldTxt);
        	  		switch(target.get(0).tagName.toUpperCase()){
        	  			case 'A':
        	  			  target.html(oldTxt);
        	  			  target.removeClass('disabled');
		                  if(this.clickEvents.length>0) {
		                    target.unbind('click');
		                  }
		                  for(var i=0;i<this.clickEvents.length;i++) {
		                 	   target.bind('click',this.clickEvents[i]);
		                  }
        	  			  break;
        	  			case 'INPUT' :
        	  			  target.val(oldTxt);
        	  			  break;
        	  			default:
        	  			  throw 'Invalid tag name, can not be supported.'
        	  		}
        	 	}
        	 },{
        	 	name:'overLayer',
        	 	layer:$('<div style="background-color:silver;position:absolute;top:0px;left:0px;z-index:9999;opacity:0.9;" />'),
         	 	start:function(target,param) {
	              this.layer.css('width',$(window).width());
	              this.layer.css('height',$(window).height());              
	              this.layer.html('<div style="position:absolute;top:45%;left:48%;border:solid 1px skyblue;background-color:white;padding:2px 15px 0px 15px;"><img src="'+param.processImgUrl+'" style="border:none;margin:0px;"/></div>');
	              this.layer.appendTo('body');
        	 	},
        	 	end:function(target,param) {
        	 		this.layer.remove();
        	 	}
        	 }];

        	 var options;
			 if(opt) {
				 if(typeof opt.player !== 'object' && typeof opt.player !== 'number') {
					 throw 'player param must be a object or number index.'
				 } else {
					 
					 switch(typeof opt.player) {
						 case 'number':
						   if(opt.player===1 && typeof opt.processImgUrl === 'undefined') {
							 throw 'please set processImgUrl, it will show on overlayer.'
						   }
	  					   if(opt.player===0 && typeof opt.processTxt === 'undefined') {
	  						 opt.processTxt='process...';
	  					   }
						   opt.player=players[opt.player];
						   break;
						 case 'object':
						   if(typeof opt.player['start'] !== 'function' || typeof opt.player['end'] !== 'function') {
							   throw "if you customize player ,you must add 'start' and 'end' function to it."
						   }
						   break;
						 default:
						   throw 'invalid player.'
					 }

					 options=opt;
				 }
			 } else {
				 options={
	        	     processTxt:'process...',  
	        	     processImgUrl:'ajax-loader.gif',   	 	
	        	 	   player:players[1]
				 };
			 }

        	 this.bind('click',function() {
        	 	
        	 		$(this).ajaxStart(function() {
	        	 		//options.player.start.call($(this),options);
	        	 		options.player.start($(this),options);
	        	 	});    	 	
	        	 	$(this).ajaxComplete(function() {
	        	 		//options.player.end.call($(this),options);
	        	 		options.player.end($(this),options);
	        	 	}); 
        	 	
        	 });

        };

})(jQuery);
