# fetsyShopping
Fetsy (Etsy) is a full stack application that is a replica of product detail pages on the Etsy website. Information such as product details, images, seller information and recommended items is displayed.

This shopping service module specifically focuses on item details and selection tools and purchasing related buttons.

## Related Projects

  - https://github.com/rpt24sourcandy/fetsyItemImages
  - https://github.com/rpt24sourcandy/fetsySeller
  - https://github.com/rpt24sourcandy/fetsyReviews
  - https://github.com/rpt24sourcandy/fetsyShoppingProxy

## Table of Contents

1. [Deploy to EC2 Instance](#Deploy to EC2 Instance)

# Deploy to EC2 Instance
## Connect EC2 Instance
bash login.sh (using the connection script from the amazon page)

## Install node
Google how to do this on amazon EC2 instance

## Install git in EC2 Instance
  ### Perform a quick update on your instance:
  sudo yum update -y

  ### Install git in your EC2 instance
  sudo yum install git -y

  ### Check git version
  git version

## Install and setup postgresql on Amazon Linux (recommended method)
https://aws.amazon.com/premiumsupport/knowledge-center/ec2-install-extras-library-software/

## Install and setup postgresql on Amazon Linux (secondary method)
https://stackoverflow.com/questions/57970718/how-to-install-postgesql-11-on-aws-amazon-linux-ami-2
sudo yum update -y
sudo amazon-linux-extras enable postgresql10
yum clean metadata
yum install postgresql
https://www.microfocus.com/documentation/idol/IDOL_12_0/MediaServer/Guides/html/English/Content/Getting_Started/Configure/_TRN_Set_up_PostgreSQL_Linux.htm

## Initialize and start postgresSQL
sudo service postgresql initdb
sudo service postgresql start
sudo -u postgres psql
CREATE ROLE root WITH SUPERUSER CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS;

## Modify psql config file and login with user root
sudo vim /var/lib/pgsql/data/pg_hba.conf
(change all the ident to "trust") i -insert, esc+:wq! -save and quit.
sudo service postgresql restart
sudo psql postgres -U root

## Run seed file
sudo psql -U root postgres < database/schema.sql && node database/dataSeed.js

## Run webpack
(first switch to superuser) sudo su -
(then go back a directory and go to home/ec2-user/fetsyShopping)
npm run react-dev