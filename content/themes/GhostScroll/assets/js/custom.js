// Custom JavaScript
// This was *not* included in the GhostScroll theme.

$(document).ready(function(){

  // only do code if the element is on the page
  $.each( $(".email-box-custom"), function() {

    // User wants to submit email
    $("#email-submit-custom").click(function(e) {
      e.preventDefault();
      console.log('Clicked the email button!')
    });

  });


});