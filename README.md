# Stock Y Project

Welcome to my Stock Y Project. I wanted to created a site where people can buy and sell sneakers. I have applied my learnings with REACT in creating this page which involves the following:

- Components and Props
- State and Events
- Client Side Routing

The basic premise of the site is a buy and sell site where a user can purchase a sneaker as well as upload a sneaker which will be available to purchase.

## How to Use

Upon opening the site, you will be greeted by the homepage that would include the header and the shoe list. The header includes the logo and the navbar while the shoelist includes a search component and the list of shoecards. Clicking Add to Cart in a ShoeCard would redirect to the Add To Cart component. This is where a user can set the quantity before purchasing. Purchasing would redirect to the HomePage with the new stock count for the shoe purchased. A Sell Shoe component is included in the NavBar which would allow the user to add a shoe for selling. Once submitted, it would then reflect in the Home Page with the newly uploaded shoe. Below are a breakdown of the components.

### `index`

RouterProvider and createBrowser is used for client-side routing. There are three paths for this project; Home, Sell Shoes, and Add To Cart 

### `App`

In the App component, I included the following components:

- NavBar in the header
- Search and ShoeList on a separate div

A fetch request was done to get the shoe data from the db.json. The data is filtered from the data in the Search component for a search feature. This is then passed on the ShoeList component.

### `ShoeList`

Array.prototype.map wa used to iterate the shoe data. For each iteration, the data was passed on to the ShoeCard component.

### `ShoeCard`

The passed on shoe data is then rendered to the Shoe Card, it would show all the shoe information in the shoe card. Link is then used to redirect the path to the Add To Cart Component

## `ShoeCard`


