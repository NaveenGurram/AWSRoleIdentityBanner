# AWS Role Identity Banner
When working in multiple VPC's with multiple roles, often AWS console doesn't provide a easy way of identifying which role and 
which VPC we are operating.

This simple chrome extension identifies user information and based on patterns identifies which VPC we are on and provides that
information as a visual banner to make identification easier.

This plugin runs in background and when you are on [https://console.aws.amazon.com/console/home](https://console.aws.amazon.com/console/home)
gets the current logged in user details and makes a determination of VPC based on provided rules and displays a banner with your choice of
css above the Console Menu Bar.

## Screenshots

### When you are on Home page

![Home](https://github.com/NaveenGurram/AWSRoleIdentityBanner/blob/master/screenshots/HomePage.png?raw=true "Home")

### When you are on EC2 page

![RDS](https://github.com/NaveenGurram/AWSRoleIdentityBanner/blob/master/screenshots/EC2.png?raw=true "RDS")

 



