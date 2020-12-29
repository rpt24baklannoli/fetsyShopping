# fetsyShopping
Shopping service modules for etsy product detail page

## Connect EC2 Instance
bash login.sh

## Install git in EC2 Instance
  # Perform a quick update on your instance:
  sudo yum update -y

  # Install git in your EC2 instance
  sudo yum install git -y

  # Check git version
  git version

## Switch to superuser account
sudo su -

## Install and setup postgresql on Amazon Linux (recommended method)
https://aws.amazon.com/premiumsupport/knowledge-center/ec2-install-extras-library-software/

## Install and setup postgresql on Amazon Linux
https://stackoverflow.com/questions/57970718/how-to-install-postgesql-11-on-aws-amazon-linux-ami-2
sudo yum update -y
sudo amazon-linux-extras enable postgresql10
yum clean metadata
yum install postgresql
https://www.microfocus.com/documentation/idol/IDOL_12_0/MediaServer/Guides/html/English/Content/Getting_Started/Configure/_TRN_Set_up_PostgreSQL_Linux.htm

sudo service postgresql initdb
sudo service postgresql start
sudo -u postgres psql
CREATE ROLE root WITH SUPERUSER CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS;