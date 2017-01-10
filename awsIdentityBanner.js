// check if this is federated Account  awsc-login-display-name-label-account   awsc-login-display-name-user
var federatedAccount;
var userName;
if ($('#awsc-login-display-name-account').length) {
    federatedAccount = $('#awsc-login-display-name-account').text();
    if ($('#awsc-login-display-name-user').length) {
        userName = $('#awsc-login-display-name-user').text();
    }
    // now based on env put up a banner.
    $('#awsgnav').before("<div id='identityBanner' class='identityBanner'> Federated Account: <strong>" + federatedAccount + "</strong>. Userid: <strong><underline>" + userName + "</underline></strong></div>");
} else if ($('#nav-usernameMenu > div.nav-elt-label').length) {
    // this is where we get the UserName from the AWS
    userName = $('#nav-usernameMenu > div.nav-elt-label').text();
    // now based on env put up a banner.
    $('#awsgnav').before("<div id='identityBanner' class='identityBanner'> Non-Federated: Userid: <i>" + userName + "</i></div>");
} else {
    $('#awsgnav').before("<div id='identityBanner' class='identityBanner'> AWSRoleIdnetityBanner  unable to determine account info.</div>");
}