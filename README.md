# Frontend - Customers

This documentation describes aspects and procedures to run this ReactJS

## Overview

This Frontend was developed using the latest reactjs version.  
It uses paging to reduce the overall weight over networking and increase the overall performance.

## Running the Example

1. Using the bash or command prompt navigate to the project directory
2. Run the command:
	```docker build -t jumia-frontend .```
3. Run the command
	```docker run -p 3000:3000 jumia-frontend```
4. Visit: <http://localhost:3000/> (should display Web Page)


## Concepts

1. Pagination & Sorting - It uses 3 query string parameters, namely: 'page', 'size' and 'sort' to implement the pagination & sorting
2. Filter - It allows you to filter your results by Country and State (meaning if your phone has a valid rule of formation or not)

## License

[Apache 2.0](https://github.com/danielfcastro/jumia-frontend/blob/main/LICENSE)
