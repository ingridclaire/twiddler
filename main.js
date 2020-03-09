$(document).ready(function refresh() {
    $('div.feed').html('');
    var $body = $('body');
    var $button = $('button');
    var $divFeed = $('div.feed');
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

        var $fullTimeline = $('<p></p>');
        $fullTimeline.addClass('fullTimeline');
        
        $tweet.prepend($username);
        $tweet.append($message);
        $tweet.append($fullTimeline);

        $fullTimeline.hide();

        $divFeed.append($tweet);

        $('.username').on('mouseenter', event => {
      	$(event.currentTarget).css('color', 'aqua')
      }).on('mouseleave', event => {
      	$(event.currentTarget).css('color', 'midnightblue');
      });
    }
        
    while(index >= 0){
      createTweet();
      index--;
    }
    

    $button.click( () => {
    	refresh();
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


    $('div.tweet').click( event => {
    	$(event.currentTarget.children[1]).toggle()
        $(event.currentTarget.children[2]).html('');
        let handle = $(event.currentTarget.children[0]).text();
        let person = handle.slice(1, handle.length);
        let userTimeline = streams.users[person];
        let userIndex = userTimeline.length - 1;

        while(userIndex >= 0) {
          let currentTweet = userTimeline[userIndex];
          let $currentTweet = $('<p></p>');
          $currentTweet.text(currentTweet.message + ' | ' + currentTweet.created_at);
          $(event.currentTarget.children[2]).append($currentTweet);
          
          userIndex--;
        }
        $(event.currentTarget.children[2]).slideToggle();
        

      });

      $fullTimeline.mouseleave( event => {
        	$(event.currentTarget.prev()).show();
        	$(event.currentTarget).hide();
        })

      });

 

    