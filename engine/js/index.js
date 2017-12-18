var threshold_feedback = 3;
var count_feedback = 0;
var buddha_response = 1;
var bot_step = 1;

var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    //fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
  
  	///////////////////////////////////
  	///////////////////////////////////
  	///////////////////////////////////
  	if (buddha_response == 1)
  		{
  		var ai_response = operation(msg);
    	if (ai_response != null)
    		{
    	 	create_buddha_Message(ai_response);
    		}
    	post_sheet(event,msg,ai_response,"-");
    	count_feedback++;
    	}
   
   if (count_feedback > threshold_feedback)
   	{
   	
   		if (bot_step == 1)
   			{
   			setTimeout(function() {create_nirvana_Message("Hello, this is nirvana bot here! Could you please tell us your experience interacting with Buddha Bot?");}, 0 + (Math.random() * 20) * 100);
   			buddha_response = 0;
   			bot_step = 2;
   			}
   		else if (bot_step == 2)
   			{	
   			create_nirvana_Message("Thank you");
   			count_feedback = 0;
   			buddha_response = 1;
   			threshold_feedback = threshold_feedback*2;
   			bot_step = 1;
   			post_sheet(event,"-","Feedback",msg);
   			}
   			
   			
   		
   	}
   
   
   
   
  }, 500 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})


function create_buddha_Message(input) {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="media/buddha.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="media/buddha.jpg" /></figure>' + input + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 3000 + (Math.random() * 20) * 100);

}

function create_nirvana_Message(input) {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="media/lotus.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="media/lotus.jpg" /></figure>' + input + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 3000 + (Math.random() * 20) * 100);

}


