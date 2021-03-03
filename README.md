# fetsyShopping
Fetsy (Etsy) is a full stack application that is a replica of product detail pages on the Etsy website. Information such as product details, images, seller information and recommended items is displayed.

This shopping service module specifically focuses on item details and selection tools and purchasing related buttons.

## Related Projects

  - https://github.com/rpt24sourcandy/fetsyItemImages
  - https://github.com/rpt24sourcandy/fetsySeller
  - https://github.com/rpt24sourcandy/fetsyReviews
  - https://github.com/rpt24sourcandy/fetsyShoppingProxy

## Table of Contents

1. [Deploy to EC2 Instance](#deploy)
2. [CRUD Documentation](#crud)

<a name="deploy"></a>
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

## .ENV Notes
CouchDB credentials (username, password, and URL) are required in an .ENV file in order to seed the CouchDB database.

<a name="crud"></a>
# CRUD Documentation

This service supports full CRUD functionality, available for testing with Postman. Not all functionality is built into the front end.

## Summary
| Methods  | URL Endpoints | Actions |
| :------- | :------------ | :------ |
| GET | /shopping/items  | Retrieve all items available for sale |
| GET | /shopping/items/:itemId  | Retrieve a single item by :itemId |
| POST | /shopping/items | Add a new item for sale |
| PUT | /shopping/items/:itemId | Update a single item's details by :itemId |
| DELETE | /shopping/items/:itemId | Delete a single item by :itemId |

## Read (GET) All Items
- Example use case: retrieve all items available for sale by a seller

#### Input
```sh
Endpoint: '/shopping/items'
```
#### Output
```sh
Sample Response:
[
  {
    "item_id": 1,
    "item_name": "food edison wiping fan luxrious green tea ",
    "best_seller": false,
    "price": "96.77",
    "price_reduction": "69.47",
    "in_stock": false,
    "us_free_shipping": true,
    "carts_item_is_in": 9
  },
  {
    "item_id": 2,
    "item_name": "green edison lamp pearl cloth ",
    "best_seller": false,
    "price": "94.52",
    "price_reduction": "83.61",
    "in_stock": true,
    "us_free_shipping": true,
    "carts_item_is_in": 19
  },
  {...},
]
```

## Read (GET) One Item
- Example use case: retrieve data about a single item

#### Input
```sh
Endpoint: '/shopping/items/:itemId'
```
#### Output
```sh
Sample Response:
- Note: This response aggregates data from this repo\'s DB, plus the Seller service DB, plus the Image service DB.
{
  "item_id": 1,
  "item_name": "food edison wiping fan luxrious green tea",
  "best_seller": false,
  "price": 96.77,
  "price_reduction": 69.47,
  "in_stock": false,
  "us_free_shipping": true,
  "carts_item_is_in": 9
  "seller_id": 2,
  "seller_rating": 4,
  "total_sales": 1397,
  "seller_name": "Araceli.Bosco",
  "seller_city": "Lake Ludiestad",
  "seller_state": "Montana",
  "on_etsy_since": 2011,
  "seller_item_id": 2,
  "recommendedItemImages": [
    {
      "image_id": 4,
      "image_url": "https://picsum.photos/id/6/200",
      "item_name": "window wiping board luxrious cat mask wood plant ",
      "price": "39.32"
    },
    {
      "image_id": 2,
      "item_name": "weight desk to plant mask heating blue sport drink ",
      "price": "3.84"
    },
    {
      "image_id": 10,
      "image_url": "https://picsum.photos/id/8/200",
      "item_name": "book fan warming maker blue book cloth cover succulent ",
      "price": "21.16"
    }
  ]
}
```

## Create (POST) A New Item
- Example use case: add a new item for sale to the database

#### Input
- Note: item_id auto increments and is not required in the request body.

```sh
Endpoint: '/shopping/items/'

Request Body Example:
{
    "item_name": "New item",
    "best_seller": true,
    "price": 15.50,
    "price_reduction": 10,
    "in_stock": true,
    "us_free_shipping": true,
    "carts_item_is_in": 20
}
```
#### Output
- Success: 200 status code, a server message "successfully added new item," and the resultant item ID.
- Error: 404 status code, and a server message "failed to add new item: {error_here}"

## Update (PUT) An Item
- Example use case: change details on a single item

#### Input
```sh
Endpoint: '/shopping/items/:itemId'

Request Body Example:
{
    "item_name": "Modified item",
    "best_seller": true,
    "price": 15.50,
    "price_reduction": 10,
    "in_stock": false,
    "us_free_shipping": true,
    "carts_item_is_in": 15
}
```
#### Output
- Assumption for this example: Item ID is #28
- Success: 200 status code, and a server message "successfully updated item ID 28"
- Error: 404 status code, and a server message "failed to update item ID 28: {error_here}"

## Remove (DELETE) An Item
- Example use case: remove a single item from the database

#### Input
```sh
Endpoint: '/shopping/items/:itemId'
```
#### Output
- Assumption for this example: Item ID is #28
- Success: 200 status code, and a server message "successfully deleted item ID 28"
- Error: 404 status code, and a server message "failed to delete item ID 28: {error_here}"