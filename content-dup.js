// get configuraton values
// get values from localsync
chrome.storage.local.get({
    cssStyle: "background-color: yellow;padding: 1px !important;text-align: center;color: black;font-size: 18px;",
    bannerType: roleName,
    vpcIdentityParams: "/dev/g:DEV;qc:"
}, function (items) {
    // this is where we get the UserName from the AWS
    var userDetails = $('#nav-usernameMenu > div.nav-elt-label').text();
    //  note that this fails if someone's name is Devin or some other name that includes these substrings
    var env = null;
    if (userDetails.toLocaleLowerCase().indexOf('dev') > 0) {
        env = "DEV"
    } else if (userDetails.toLocaleLowerCase().indexOf('prod') > 0) {
        env = "PROD"
    } else if (userDetails.toLocaleLowerCase().indexOf('qc') > 0) {
        env = "QC";
   } else if (userDetails.toLocaleLowerCase().indexOf('qa') > 0) {
        env = "QA";
     }

    if (env === null){
        // only show env banner if we actually recognize the env
    } else {
        // now based on env put up a banner.
        $('#awsgnav').before("<div class='identityBanner'> You are in " + env + " VPC <br> You logged in as " + userDetails + "</div>");
    }
});

