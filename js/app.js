

console.log($("#email_signup"))
$("#email_signup").submit(function(){
  alert("here")
})

function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

function postContactToGoogle(){

      var email = $j('#email').val();
      if ((email !== "") && (validateEmail(email))) {
          $j.ajax({
              url: "  https://docs.google.com/a/zooniverse.org/forms/d/17DvSk7HvlYQ1v991G14bYu16K_9vHIMcWdqyCikCMgk/formResponse",
              data: {"entry.1" :email},
              type: "POST",
              dataType: "xml",
              statusCode: {
                  0: function (){

                      $j('#name').val("");
                      $j('#email').val("");
                      $j('#feed').val("");
                      //Success message
                  },
                  200: function (){
                      $j('#name').val("");
                      $j('#email').val("");
                      $j('#feed').val("");
                      //Success Message
                  }
              }
          });
      }
      else {
          //Error message
      }
  }
