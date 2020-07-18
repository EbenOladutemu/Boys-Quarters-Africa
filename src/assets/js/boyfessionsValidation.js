$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var _subject = $("input#_subject").val();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var agree = $("input#agree").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "https://formsubmit.co/ajax/boysqafrica@gmail.com",
        type: "POST",
        data: {
          _subject: _subject,
          name: name,
          email: email,
          agree: agree
        },
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<p class='text-center'>Thank you for doing that. Enjoy!</p><div class='text-center agree'>");
          $('#success > .agree').html("<a class='btn btn-primary btn-l text-uppercase js-scroll-trigger' href='./assets/docs/BOYFESSIONS.pdf' download> <i class='fas fa-download'></i> Download")
            .append("</a>");
          $('#success > .agree')
            .append('</div>');
          //clear all fields
          // $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Apologies " + firstName + ", it seems that our mail server is not responding. Please try again or send us a mail through our email address below. Cheers!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          // $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 10000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
$('#phone').focus(function() {
  $('#success').html('');
});
$('#email').focus(function() {
  $('#success').html('');
});
$('#message').focus(function() {
  $('#success').html('');
});
