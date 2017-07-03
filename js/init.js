(function($) {
  $(function() {

    // we initialize the variables
    var randomQuote;
    var randomAuthor;

    // we use the getRandomQuote function
    getRandomQuote();

    //  on click on the new quote loads getRandomQuote function
    $('#newQuote').on('click',function() {
      getRandomQuote();
    });

    // on click opens a new window with the tweet
    $('#newTweet').on('click',function() {
      window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " -" +randomAuthor);
    });


    //  function to get a Random Quote
    function getRandomQuote() {

      // forismatic URL to get Quote as JSON
      var forismaticUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

      // Reads the JSON and asigns the readed value to the variables and html
      $.getJSON(forismaticUrl, function(data) {

        // getting the info from the JSON
        randomQuote = data.quoteText;
        randomAuthor = data.quoteAuthor;

        // setting the info into the html
        $("#quote").html(randomQuote);
        $("#author").html('-' + randomAuthor);
      });

    }

  }); // end of document ready
})(jQuery); // end of jQuery name space
