//Init Facebook API
window.fbAsyncInit = function() {
  FB.init({
    appId            : '1252448708210894',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.9'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Create Image module
function createImage() {
    var imageData = canvasRoot.toDataURL();
    var imageDataRaw = imageData.replace(/^data:image\/\w+;base64,/, "");
    return imageDataRaw;
}

var message = one.textContent + " " + two.textContent + " 😂 😂 😂";
$('#fb-description').attr("placeholder", message);
console.log(message);

//Share Photo
function sharePhoto() {
  var image = createImage();

  $.ajax({
    url: "http://data-uri-to-img-url.herokuapp.com/images.json",
    type: "POST",
    data: { 'image': { 'data_uri': image } },
    xhrFields: {
      // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
      // This can be used to set the 'withCredentials' property.
      // Set the value to 'true' if you'd like to pass cookies to the server.
      // If this is enabled, your server must respond with the header
      // 'Access-Control-Allow-Credentials: true'.
      withCredentials: false
    },
    success: function(data){
      //Image url heroku
      url = data['url'];

      FB.login(function(response) {

        if (response.status === "connected") {
          $('.share').text("Ligado...");

          var textarea = document.getElementById('fb-description').value;

          if (textarea.length > 1) {
            message = textarea.value;
          }

          //Post Photo on facebook
          FB.api(
            '/me/photos',
            'post',
            {
              message: message,
              url: url
            }, function(response) {

              if (!response || response.error) {
                  console.log(response.error);
              } else {
                  $('.share').text("Partilhado")
                            .css('background', 'green');
                  setTimeout(function() {
                    $('.modal-facebook').fadeOut("slow");
                  }, 3000);
              }

          });

        } else {
          console.log("Facebook error: " + response.error);
        }
      });
    },
    error: function(shr, status, data){
      console.log("error " + data + " Status " + shr.status);
    },
  });
}
