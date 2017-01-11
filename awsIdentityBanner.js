// check if this is federated Account  awsc-login-display-name-label-account   awsc-login-display-name-user
var federatedAccount;
var userName;
var accountClass = 'awsroleidentitybanner';
if ($('#awsc-login-display-name-account').length) {
    federatedAccount = $('#awsc-login-display-name-account').text();
    if (federatedAccount.toLowerCase().includes('qc')) {
        accountClass = 'awsroleidentitybannerqa'
    } else if (federatedAccount.toLowerCase().includes('qa')) {
        accountClass = 'awsroleidentitybannerqa'
    } else if (federatedAccount.toLowerCase().includes('prod')) {
        accountClass = 'awsroleidentitybannerprod'
    }
    if ($('#awsc-login-display-name-user').length) {
        userName = $('#awsc-login-display-name-user').text();
    }
    if (userName.indexOf('/')) {
        $('#awsgnav').before("<div id='identityBanner' class='" + accountClass +
            "'> Account: <strong>" +
            federatedAccount +
            "</strong>. Priv: <strong><underline>" +
            userName.substring(0, userName.indexOf('/')) +
            "</strong>. Userid: <strong><underline>" +
            userName.substring(userName.indexOf('/') + 1) +
            "</underline></strong></div>");
    } else {
        // now based on env put up a banner.
        $('#awsgnav').before("<div id='identityBanner' class='" + accountClass +
            "'> Federated Account: <strong>" +
            federatedAccount +
            "</strong>. Userid: <strong><underline>" +
            userName +
            "</underline></strong></div>");
    }
} else if ($('#nav-usernameMenu > div.nav-elt-label').length) {
    // this is where we get the UserName from the AWS
    userName = $('#nav-usernameMenu > div.nav-elt-label').text();
    // now based on env put up a banner.
    $('#awsgnav').before("<div id='identityBanner' class='" + accountClass +
        "'> Non-Federated: Userid: <i>" +
        userName +
        "</i></div>");
} else {
    $('#awsgnav').before("<div id='identityBanner' class='" + accountClass +
        "'> AWSRoleIdnetityBanner  unable to determine account info.</div>");
}