import menuImage1 from "./images/menu-1.png";
import menuImage2 from "./images/menu-2.png";
import menuImage3 from "./images/menu-3.png";
import menuImage4 from "./images/menu-4.png";
import menuImage5 from "./images/menu-5.png";
import menuImage6 from "./images/menu-6.png";
import cartImage1 from "./images/cart-item-1.png";
import cartImage2 from "./images/cart-item-2.png";
import cartImage3 from "./images/cart-item-3.png";
import cartImage4 from "./images/cart-item-4.png";
import productImage1 from "./images/product-1.png";
import productImage2 from "./images/product-2.png";
import productImage3 from "./images/product-3.png";
import reviewImage1 from "./images/pic-1.png";
import reviewImage2 from "./images/pic-2.png";
import reviewImage3 from "./images/pic-3.png";
import blogImage1 from "./images/hamburger.jpeg";
import blogImage2 from "./images/spices.jpg";
import blogImage3 from "./images/blog-3.jpeg";
const menu = [
  {
    img: menuImage1,
    name: "Burger Meal",
    price: 8.99,
  },
  {
    img: menuImage2,
    name: "Chicken nuggets Meal",
    price: 6.99,
  },
  {
    img: menuImage3,
    name: "Chicken Wings",
    price: 5.99,
  },
  {
    img: menuImage4,
    name: "Pizza (Medium)",
    price: 9.99,
  },
  {
    img: menuImage5,
    name: "Wrap Meal",
    price: 6.99,
  },
  {
    img: menuImage6,
    name: "Hot Chocolate",
    price: 4.99,
  },
];

const cart = [
  {
    img: cartImage1,
    price: 15.99,
  },
  {
    img: cartImage2,
    price: 15.99,
  },
  {
    img: cartImage3,
    price: 15.99,
  },
  {
    img: cartImage4,
    price: 15.99,
  },
  {
    img: cartImage1,
    price: 15.99,
  },
  {
    img: cartImage2,
    price: 15.99,
  },
  {
    img: cartImage4,
    price: 15.99,
  },
  {
    img: cartImage1,
    price: 15.99,
  },
  {
    img: cartImage2,
    price: 15.99,
  },
];

const products = [
  {
    img: productImage1,
    name: "House Special Burger",
    price: 15.99,
    old_price: 20.99,
  },
  {
    img: productImage2,
    name: "Chocolate-chip Cup Cake",
    price: 2.99,
    old_price: 4.99,
  },
  {
    img: productImage3,
    name: "Organic Coffee Beans",
    price: 9.99,
    old_price: 14.99,
  },
];
const reviews = [
  {
    img: reviewImage1,
    summary: "Very nice meal. Amazing Food. Very professional staff.",
    feedback:
      "We came for a nice meal, and the food was absolutely amazing, the chicken breast was lovely, and the Mac and cheese with bacon was delicious. Aleisha was our server and she couldn’t of done enough for us, what a lovely polite young lady, she treated all her customers with the same manner and with that lovely smile 😊 will definitely be returning, and will be recommending to friends and family😁",
    name: "John Doe",
  },
  {
    img: reviewImage2,
    summary:
      "Very delicious food. Shout out to Reece for giving us a 5 star service.",
    feedback:
      "Very good food and great service, would definitely recommend. Reece came over to the table as soon as we were seated to order drinks so we weren’t waiting around for too long and regularly checked on us to see if we wanted any more drinks, saving us from having to get his attention.",
    name: "Katie cute",
  },
  {
    img: reviewImage3,
    summary:
      "Amazing first Experience. Many thanks to all for giving us a 5 star service.",
    feedback:
      "Amazing first experience. Thank you to staff for wonderful service. Explained everything on the menu and even checked back to make sure everything was okay! Definitely will be returning. 5 out of 5. Thanks again to the pleasant staff.",
    name: "Bob Marshal",
  },
];
const blog = [
  {
    img: blogImage1,
    title: "Fast Food",
    article_summary:
      "Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term",
    article_details: "https://en.wikipedia.org/wiki/Fast_food",
  },
  {
    img: blogImage2,
    title: "spices",
    article_summary:
      "In the culinary arts, a spice is any seed, fruit, root, bark, or other plant substance in a form primarily used for flavoring or coloring food.",
    article_details: "https://en.wikipedia.org/wiki/Spice",
  },
  {
    img: blogImage3,
    title: "Food Safety",
    article_summary:
      "Food safety (or food hygiene) is used as a scientific method/discipline describing handling, preparation, and storage of food in ways that prevent foodborne illness.",
    article_details: "https://en.wikipedia.org/wiki/Food_safety",
  },
];
export { menu, cart, products, reviews, blog };
