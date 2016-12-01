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

// now based on env put up a banner.
$('#awsgnav').before("<div class='blink_me'> You are in " + env + " VPC </div>");