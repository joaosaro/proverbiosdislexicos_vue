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


function sharePhoto() {
  FB.login(function(response) {
    if (response.status === "connected") {

      console.log("connected...");

      var message = document.getElementById('fb-description').value;
      var imageURL = canvas.toDataURL("image/png");

      var decodedPng = Base64Binary.decode(imageURL.substring(imageURL.indexOf(',') + 1, imageURL.length));
      console.log(decodedPng);

      FB.api(
        '/me/photos',
        'post',
        {
          message: message,
          url: decodedPng
          //url: 'http://proverbios.joaosaro.com/assets/images/test_pic.jpg'
        }, function(response) {

          if (!response || response.error) {
              console.log(response.error);
          } else {
              console.log('Published to stream - you might want to delete it now!');
          }

      });

    }

  }, {scope: 'public_profile,email,publish_actions'} );
}
