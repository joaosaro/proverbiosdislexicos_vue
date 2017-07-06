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
    var message = "";

    if (message.length > 0) {
      message = document.getElementById('fb-description').value;
    }

    var imageData = canvasRoot.toDataURL();
    var imageDataRaw = imageData.replace(/^data:image\/\w+;base64,/, "");
    console.log(imageDataRaw);

    return imageDataRaw;
}

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

      console.log(url);

      FB.login(function(response) {

        if (response.status === "connected") {
          console.log("connected");

          var message = document.getElementById('fb-description').value;

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
                  console.log('Published to stream - you might want to delete it now!');
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
