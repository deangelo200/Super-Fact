// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})


// this is the complete list of currently supported params you can pass to the plugin (all optional) 
var options = {
  message: 'share this', // not supported on some apps (Facebook, Instagram) 
  subject: 'the subject', // fi. for email 
  files: ['', ''], // an array of filenames either locally or remotely 
  url: 'https://www.website.com/foo/#bar?a=b',
  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title 
}
 
var onSuccess = function(result) {
  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true 
  console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false) 
}
 
var onError = function(msg) {
  console.log("Sharing failed with message: " + msg);
}
 
function shareButton(){ 
window.plugins.socialsharing.share('Message, subject, image and link', 'The subject', 'https://www.google.nl/images/srpr/logo4w.png', 'http://www.x-services.nl');

}


