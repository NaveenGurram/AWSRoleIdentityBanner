# AWS Role Identity Banner
This simple chrome extenion highlights AWS account, user role and user identity information.

Enterprises often use AWS accounts to manage their SDLC in Amazon's AWS. 
Development, QA and Production environments are segregated, each in their own Accounts.
Developers and operations staff interac twith AWS in these accounts through the AWS console. 
When working in multiple VPC's with multiple roles, often AWS console doesn't provide a easy way of identifying which role and 
which VPC we are operating.

This plugin is activated whenever you are on one of the [The AWS Console pages](https://console.aws.amazon.com/console/home).
The pluing gets the current logged in user details and makes a determination of SDLC based on simple rules. 
It provides and displays a banner at the top of the page with Account alias, user permission and user id information when logged into a federated acount.
It displays just the user name when logged into a non-federated stand alone account.


## Available in the Chrome Store
[AWS Role and Account Identifier](https://chrome.google.com/webstore/search/aws%20role%20banner "AWS Account Identifier")

# Screenshots

### Non Federated Account
![Non Federated](https://github.com/NaveenGurram/AWSRoleIdentityBanner/blob/master/screenshots/AWS%20Account%20Standalone.jpg?raw=true "Not Federated")

### Federated Accounts with "DEV" in their name in any case
![Federated Dev](https://github.com/NaveenGurram/AWSRoleIdentityBanner/blob/master/screenshots/AWS%20Account%20Dev.jpg?raw=true "DEV")

### Federated Accounts with "QA" or "QC" in their name in any case
![Federated QA](https://github.com/NaveenGurram/AWSRoleIdentityBanner/blob/master/screenshots/AWS%20Account%20QC.jpg?raw=true "QA or QC")

### Federated Accounts with "PROD" in their name in any case
![Federated Dev](https://github.com/NaveenGurram/AWSRoleIdentityBanner/blob/master/screenshots/AWS%20Account%20Prod.jpg?raw=true "DEV")

