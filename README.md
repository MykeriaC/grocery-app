# Portfolio 2: Grocery Store App
This will be my Portfolio 2 assignment for Mobile Development (DIG4639)

This Mobile Application is called 'The Grocery App' where you can satisfy all your grocery store shopping needs!

# Home Screen
When this program is ran, the user is immediately met with the Home Screen. This screen displays a welcome message as well as two text inputs that allow the user to enter their: **First Name and Last Name**

Using parts of the code we programmed for `Lab 6`, If a user did not enter in a first and last name into the provided text inputs, a warning message displays that tells them to enter in the info that was previously not entered before. Followed by the text inputs is a yellow button labeled `Access Profile` which when pressed, will navigate the user to their **Profile Screen**

# Profile Screen
When the user arrives to the Profile Screen, they are met with an black Avatar cicle icon with the first letter of the first and last name they entered in the `Home Screen`. Below the avatar is the full display of the user's entire first and last name. Underneath this is a clickable text labeled `Begin Order` with a basket icon in the color yellow. Clicking this text will take the user directly to the **Order Screen** where the user may proceed to order. Underneath the clickable Begin Order button are four clickable texts: **About Us, Rate This App, Share App, and Log Out**. `About Us`, when clicked, tells the user a little about the app through the `Overlay` component. `Rate This App`, when clicked, allows the user to rate the app from one to five stars through the use of the `Overlay` and `Rating` component. `Share App`, when clicked, takes you to an `Overlay` of different social media icons like Facebook, Twitter, and Instagram using the `SocialIcon`component. Even though the implementation isnt fully completed, these in theory, would allow you to click on them and take you to the social media accounts for this application. Finally, `Log Out`, allows the user to 'log out' but the functionality does not do anything that signifies the user has logged out. 

# Order Screen
The order screen makes use of the `Flatlist` component and the `Card` component to display a list of sections that you would commonly see in a real grocery store: **Produce, Dairy, Bread, Breakfast Cereal, Candy and Snacks, Canned Goods, Condiments, Meat, Beverages, and Seafood**. These Cards all have identifiable pictures that will signify, in addition to the name listed at the top of the card, what particular food sections are available to buy from. When any one of these Cards are clicked, it takes you to **Item Screen**

# Item Screen
Once a user picks from what food section they want to shop at, this program will navigate the user to a list of items for that particular food section. The items will also be contained in ***Card* components and rendered within the ***Flatlist* component that has every object array of these foods passed into it. On each of the Cards for these items are the name of the item, the price of the item, and a yellow `Add To Cart` button, which when clicked, takes you to the **Cart Screen**

# Cart Screen
Once the user has decided to go to their cart and check out, the user is presented with a screen of their carted food items, as well as a total price for all of the items they have selected.

https://mykeriac.github.io/grocery-app/
