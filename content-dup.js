// get configuraton values
// get values from localsync
chrome.storage.local.get({
    cssStyle: "background-color: black;padding: 1px !important;text-align: center;color: red;font-size: 18px;",
    bannerType: roleName,
    vpcIdentityParams: "/.(finra-awsdev)/g:DEV;(finra-awsqc):"
}, function (items) {
    // this is where we get the UserName from the AWS
    var userDetails = $('#nav-usernameMenu > div.nav-elt-label').text();
    //  finra-awsprod
    //  finra-awsqc
    var env = "DEV";
    if (userDetails.indexOf('finra-awsprod') > 0) {
        env = "PROD"
    } else if (userDetails.indexOf('finra-awsqc') > 0) {
        env = "QC";
    }

    <div title="priv_aws_cdip_dev_d/K24425 @ finra-awsdev" class="nav-elt-label">priv_aws_cdip_dev_d/K24425 @ finra-awsdev</div>

    // now based on env put up a banner.
    $('#awsgnav').before("<div class='identityBanner'> You are in " + env + " VPC <br> You logged in as " + userDetails + "</div>");
});

