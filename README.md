# Tanner Thelin's CRUD Server

## To start the server, clone this repo and npm install. Start Server on localhost with npm start.

## GET Requests

### ALL PRODUCTS: hit this endpoint: 
### https://tannerthelin-crud-server.herokuapp.com/admin/getAllProducts

### SINGLE PRODUCT: hit this endpoint: https://tannerthelin-crud-server.herokuapp.com/admin/single-product. In the body enter 'productId' and then this product id 5e4db053fec85ddb8c463457 under the x-www-form-urlencoded. This can pull any item but I just provided a product key to make it easier.

### UPDATE PRODUCT: I used a get request to update products. The endpoint is https://tannerthelin-crud-server.herokuapp.com/admin/edit-product. In the body of the GET request (x-www-urlencoded), enter the productId of the product to edit. Also enter the title, price, description, and imageUrl along with the desired values. 

## POST Requests

### CREATE PRODUCT: hit this endpoint: https://tannerthelin-crud-server.herokuapp.com/admin/add-product. In the body of the POST request (x-www-urlencoded), enter the title, price, description, and imageUrl. 

### DELETE PRODUCT: hit this endpoint: https://tannerthelin-crud-server.herokuapp.com/admin/delete-product. Enter the productId and number in the field the same as single product. I have provided the id of an item that can be deleted: 5e534a013e44161db6812d8a.



