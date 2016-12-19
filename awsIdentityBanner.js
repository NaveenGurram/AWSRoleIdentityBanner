// check if this is federated Account  awsc-login-display-name-label-account   awsc-login-display-name-user
var federatedAccount;
var userName;
if ($('#awsc-login-display-name-account').length) {
    federatedAccount = $('#awsc-login-display-name-account').text();
    if ($('#awsc-login-display-name-user').length) {
        userName = $('#awsc-login-display-name-user').text();
    }
    // now based on env put up a banner.
    $('#awsgnav').before("<div id='identityBanner' class='identityBanner'> You are in <strong>" + federatedAccount + "</strong> Account. Logged in as <strong><underline>" + userName + "</underline></strong></div>");
} else {
    userName = $('#nav-usernameMenu > div.nav-elt-label').text();
    // this is where we get the UserName from the AWS
    // now based on env put up a banner.
    $('#awsgnav').before("<div id='identityBanner' class='identityBanner'> Logged in as <i>" + userName + "</i></div>");
}


$("#identityBanner").animate({ scrollTop: 0 }, "fast");