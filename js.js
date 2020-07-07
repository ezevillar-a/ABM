$("button").click(function(){
  $.ajax({
          url: "https://randomuser.me/api/",
          type: 'GET',
          dataType: 'json',
          success: function(result){
              $("#email").val(result.results[0].email);
              $("#password").val(result.results[0].login.password);
              $("#ciudad").val(result.results[0].location.city);
              $(".rounded").attr('src', result.results[0].picture.thumbnail);
              $(".rounded").removeClass('hidden');
              //console.log(result.results[0]);
              document.title = result.results[0].name.first+" "+result.results[0].name.last;
          }, 
          error: function() {
              console.log("An error has occured");
          }
      });
});