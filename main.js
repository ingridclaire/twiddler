$(document).ready(() => {

    var $body = $('body');
    var $divFeed = $('div.feed');
    var $button = $('button');
    var tweetCount = streams.home.length
    var index = streams.home.length - 1

    let createTweet = function() {
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        $tweet.addClass('tweet');

        var $username = $('<p></p>');
        $username.addClass('username');
        $username.text('@' + tweet.user);

        var $message = $('<p></p>');
        $message.addClass('message');
        $message.text(tweet.message + ' | ' + tweet.created_at);

        $tweet.prepend($message);
        $tweet.prepend($username);

        $divFeed.prepend($tweet);
    }
        
    while(index >= 0){
      createTweet();
      index--;
    }
    

    $button.click( () => {
    	index = streams.home.length - 1;
    	while(index >= tweetCount) {
    	  createTweet();
    	  tweetCount = streams.home.length;
    	  index--;
    	};
    });

    $button.on('mouseenter', () => {
      	$button.css({
      		padding: '15px',
      		fontSize: '18px'})
      }).on('mouseleave', () => {
      	$button.css({
      		padding: '10px',
      		fontSize: '14px'});
      });

    
    // var isClicked = false;

    $('.username').click( event => {
        let handle = $(event.currentTarget).text();
        let person = handle.slice(1, handle.length);
        let userTimeline = streams.users[person];
        let userTweetCount = 0

        var $showTimeline = $('<p></p>')
         $showTimeline.addClass(person);

      
        for(var i = userTimeline.length - 1; i > userTweetCount ; i--) {
          var $nextTweet = $('<p></p>')
          $nextTweet.text(userTimeline[i].message + ' | ' + userTimeline[i].created_at);
          $showTimeline.append($nextTweet)
          userTweetCount = userTimeline.length;
        }
        $(event.currentTarget).next().prepend($showTimeline);
      });

      // isClicked = true;

      $('.username').on('mouseenter', event => {
      	$(event.currentTarget).css('color', 'aqua')
      }).on('mouseleave', event => {
      	$(event.currentTarget).css('color', 'midnightblue');
      });

      });

 

    