(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{191:function(e,i,t){"use strict";var a=t(9),c=t.n(a),n=(t(266),t(68)),r=t(2),o=t(10),p=t(3),s=t(24),d=t(22),m=t(76),l=t(27),b=t(28),h=t(285),j=t(287),g=t(286),u=t(0),f=t(16),y=t.n(f),x=t(1);var O=r.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},container2:{backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},cardSpace:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",paddingTop:40,paddingBottom:50},listSpace:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",paddingTop:40,paddingBottom:50},itemBold:{fontWeight:"bold",fontSize:30,alignItems:"center",justifyContent:"center",textAlign:"center",paddingBottom:20},priceStyle:{fontWeight:"bold",fontSize:17,paddingTop:20,paddingBottom:10}}),C=function(e){var i=e.order,t=e.items,a=Object(u.useState)([]),r=c()(a,2),d=r[0],m=r[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{style:O.itemBold,children:i}),Object(x.jsx)(n.a,{data:t,renderItem:function(e){var i=e.item;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.c.Title,{children:i.name}),Object(x.jsx)(l.c.Divider,{}),Object(x.jsxs)(p.a,{style:O.container,children:[Object(x.jsx)(s.a,{style:{width:250,height:133},resizeMode:"contain",source:{uri:i.pic}}),Object(x.jsxs)(o.a,{style:O.priceStyle,children:["$",i.price]})]}),Object(x.jsx)(l.b,{title:"Add To Cart",buttonStyle:{backgroundColor:"#ffd02c"},onPress:function(){!function(e){m([].concat(y()(d),[e])),console.log(d)}(i)}})]})})}})]})},S=t(164),k=t(152),B=t(149),_=t(155),w=t(173),T=Object(g.a)(),P=Object(j.a)();function v(e){var i=e.navigation,a=Object(u.useState)(""),n=c()(a,2),r=n[0],s=n[1],d=Object(u.useState)(""),b=c()(d,2),h=b[0],j=b[1],g=Object(u.useState)(""),f=c()(g,2),y=f[0],O=f[1],C=Object(u.useState)(""),S=c()(C,2),k=S[0],B=S[1],_=(t(264),Object(u.useCallback)((function(){""!==r&&""!==h?(s(r),j(h),console.log(r+" "+h),i.navigate("Profile",{fName:r,lName:h})):(""==r&&B("Please Enter A Valid First Name!"),""==h&&O("Please Enter A Valid Last Name!"))}),[r,h]));return Object(x.jsxs)(p.a,{style:M.container,children:[Object(x.jsx)(o.a,{style:{fontWeight:"bold",fontSize:35,paddingBottom:20,paddingTop:20,textAlign:"center",marginHorizontal:25},children:"Welcome to the Grocery Store App!"}),Object(x.jsxs)(p.a,{style:{textAlign:"center",alignItems:"center"},children:[Object(x.jsx)(m.a,{style:{alignItems:"center",backgroundColor:"white",borderRadius:8,padding:8,borderWidth:2,borderColor:"#31422e"},placeholder:"Enter First Name",onChangeText:s,value:r}),Object(x.jsx)(o.a,{style:{color:"red",fontWeight:"bold",fontSize:15},children:k}),Object(x.jsx)(p.a,{style:{paddingBottom:10}}),Object(x.jsx)(m.a,{style:{alignItems:"center",backgroundColor:"white",borderRadius:8,padding:8,borderWidth:2,borderColor:"#31422e"},placeholder:"Enter Last Name",onChangeText:j,value:h}),Object(x.jsx)(o.a,{style:{color:"red",fontWeight:"bold",fontSize:15},children:y})]}),Object(x.jsx)(l.b,{title:"Access Profile",style:{alignItems:"center",textAlign:"center",justifyContent:"center"},buttonStyle:{backgroundColor:"#ffd02c"},containerStyle:{paddingTop:40,justifyContent:"center"},onPress:_})]})}function I(){return Object(x.jsxs)(P.Navigator,{children:[Object(x.jsx)(P.Screen,{name:"Home",component:z,options:function(e){var i,t=e.route;switch(null!=(i=Object(b.m)(t))?i:"Home"){case"Order":return{headerTitle:"Order",headerStyle:{backgroundColor:"#31422e"},headerTintColor:"#fff"};case"Cart":return{headerTitle:"Cart",headerStyle:{backgroundColor:"#31422e"},headerTintColor:"#fff"};case"Home":return{headerTitle:"Home",headerShown:!1,headerStyle:{backgroundColor:"#31422e"},headerTintColor:"#fff"}}}}),Object(x.jsx)(P.Screen,{name:"Item",component:A,options:{headerStyle:{backgroundColor:"#31422e"},headerTintColor:"#fff"}})]})}function z(e){var i=e.navigation;return Object(x.jsx)(p.a,{style:M.container,children:Object(x.jsx)(p.a,{style:M.cardSpace,children:Object(x.jsx)(n.a,{data:[{id:1,name:"Produce",picture:"https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg"},{id:2,name:"Dairy",picture:"https://img.freepik.com/free-photo/selection-milk-dairy-products_89198-738.jpg?w=1800"},{id:3,name:"Bread",picture:"https://cdn.pixabay.com/photo/2017/10/18/16/44/bread-2864703_1280.jpg"},{id:4,name:"Breakfast Cereal",picture:"https://cdn.pixabay.com/photo/2022/03/09/15/15/breakfast-7058063_1280.jpg"},{id:5,name:"Candy and Snacks",picture:"https://img.freepik.com/free-photo/scattered-beer-snacks-assortment_127657-11990.jpg?w=1800"},{id:6,name:"Canned Goods",picture:"https://img.freepik.com/free-photo/flat-lay-bunch-fresh-provisions-donation_23-2148733838.jpg?t=st=1650311428~exp=1650312028~hmac=02dc48eb7282e5a83c85f60d04d9699b0fb4e952badfe3da327d7a0d0ff79f4a&w=1800"},{id:7,name:"Condiments",picture:"https://cdn.pixabay.com/photo/2019/05/01/17/37/sauce-4171459_1280.jpg"},{id:8,name:"Meat",picture:"https://cdn.pixabay.com/photo/2017/11/10/15/04/steak-2936531_1280.jpg"},{id:9,name:"Beverages",picture:"https://cdn.pixabay.com/photo/2017/11/03/14/32/beverages-2914497_1280.jpg"},{id:10,name:"Seafood",picture:"https://cdn.pixabay.com/photo/2013/07/19/00/18/seafood-165220_1280.jpg"}],renderItem:function(e){var t=e.item;return Object(x.jsx)(d.a,{onPress:function(){i.navigate("Item",{id:t.id,name:t.name})},children:Object(x.jsx)(p.a,{style:M.container,children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.c.Title,{children:t.name}),Object(x.jsx)(l.c.Divider,{}),Object(x.jsx)(p.a,{style:M.container2,children:Object(x.jsx)(s.a,{style:{width:300,height:200},resizeMode:"contain",source:{uri:t.picture}})})]})})})}})})})}function A(e){var i=e.route.params,t=(i.id,i.name);switch(t){case"Produce":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:1,name:"Apples (3lb Bag)",price:0,pic:"https://cdn.pixabay.com/photo/2018/08/02/21/51/apples-3580560_1280.jpg"},{id:2,name:"Banana",price:0,pic:"https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg"},{id:3,name:"Grapes",price:0,pic:"https://cdn.pixabay.com/photo/2017/02/02/14/04/grapes-2032838_1280.jpg"},{id:4,name:"Mango",price:0,pic:"https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241_1280.jpg"},{id:5,name:"Lemon",price:0,pic:"https://cdn.pixabay.com/photo/2017/03/06/12/00/lemon-2121307_1280.jpg"},{id:6,name:"Lime",price:0,pic:"https://cdn.pixabay.com/photo/2017/03/10/15/15/lime-2133091_1280.jpg"},{id:7,name:"Kiwi",price:0,pic:"https://cdn.pixabay.com/photo/2016/03/05/23/02/breakfast-1239438_1280.jpg"},{id:8,name:"Pear",price:0,pic:"https://cdn.pixabay.com/photo/2010/12/13/10/06/food-2280_1280.jpg"},{id:9,name:"Raspberries",price:0,pic:"https://cdn.pixabay.com/photo/2017/04/28/17/12/raspberries-2268901_1280.jpg"},{id:10,name:"Blackberries",price:0,pic:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berry-2275_1280.jpg"},{id:11,name:"Blueberries",price:0,pic:"https://cdn.pixabay.com/photo/2018/06/07/16/38/blueberries-3460423_1280.jpg"},{id:12,name:"Cherries",price:0,pic:"https://cdn.pixabay.com/photo/2018/05/27/16/10/cherries-3433775_1280.jpg"},{id:13,name:"Strawberries",price:0,pic:"https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg"},{id:14,name:"Watermelon",price:0,pic:"https://cdn.pixabay.com/photo/2017/01/10/19/05/watermelon-1969949_1280.jpg"},{id:15,name:"Pineapple",price:0,pic:"https://cdn.pixabay.com/photo/2015/02/14/18/10/pineapple-636562_1280.jpg"},{id:16,name:"Oranges",price:0,pic:"https://cdn.pixabay.com/photo/2016/10/07/14/11/tangerines-1721633_1280.jpg"},{id:17,name:"Cranberries",price:0,pic:"https://cdn.pixabay.com/photo/2019/10/02/19/10/food-4521744_1280.jpg"},{id:18,name:"Asparagus",price:0,pic:"https://cdn.pixabay.com/photo/2015/03/30/20/45/asparagus-700153_1280.jpg"},{id:19,name:"Avocado",price:0,pic:"https://cdn.pixabay.com/photo/2016/03/05/19/03/appetite-1238257_1280.jpg"},{id:20,name:"Beet",price:0,pic:"https://cdn.pixabay.com/photo/2016/10/09/13/39/red-beets-1725799_1280.jpg"},{id:21,name:"Peas",price:0,pic:"https://cdn.pixabay.com/photo/2010/12/10/08/peas-1144_1280.jpg"},{id:22,name:"Broccoli",price:0,pic:"https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg"},{id:23,name:"Brussels Sprouts",price:0,pic:"https://cdn.pixabay.com/photo/2012/03/04/00/40/brussels-sprouts-22009_1280.jpg"},{id:24,name:"Cabbage",price:0,pic:"https://cdn.pixabay.com/photo/2022/03/31/12/27/savoy-cabbage-7102903_1280.jpg"},{id:25,name:"Carrot",price:0,pic:"https://cdn.pixabay.com/photo/2015/12/08/16/10/isolated-1083235_1280.png"},{id:26,name:"Cauliflower",price:0,pic:"https://cdn.pixabay.com/photo/2017/07/24/09/28/cauliflower-2534064_1280.png"},{id:27,name:"Celery",price:0,pic:"https://cdn.pixabay.com/photo/2018/05/18/04/03/celery-3410302_1280.png"},{id:28,name:"Chickpea",price:0,pic:"https://cdn.pixabay.com/photo/2019/08/10/08/39/chickpeas-4396439_1280.jpg"},{id:29,name:"Corn",price:0,pic:"https://cdn.pixabay.com/photo/2017/07/10/08/27/vegetable-2489368_1280.png"},{id:30,name:"Cucumber",price:0,pic:"https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_1280.jpg"},{id:31,name:"Eggplant",price:0,pic:"https://cdn.pixabay.com/photo/2016/09/10/17/47/eggplant-1659784_1280.jpg"},{id:32,name:"Lettuce",price:0,pic:"https://cdn.pixabay.com/photo/2017/07/03/18/14/lettuce-2468495_1280.png"},{id:33,name:"Mushroom",price:0,pic:"https://cdn.pixabay.com/photo/2018/04/03/08/37/mushroom-3286258_1280.jpg"},{id:34,name:"Onion",price:0,pic:"https://cdn.pixabay.com/photo/2013/02/21/19/14/onion-bulbs-84722_1280.jpg"},{id:35,name:"Potato",price:0,pic:"https://cdn.pixabay.com/photo/2012/12/24/08/39/agriculture-72254_1280.jpg"},{id:36,name:"Pumpkin",price:0,pic:"https://cdn.pixabay.com/photo/2012/12/24/08/40/autumn-72294_1280.jpg"},{id:37,name:"Radish",price:0,pic:"https://cdn.pixabay.com/photo/2019/01/25/22/36/radish-3955463_1280.jpg"},{id:38,name:"Spinach",price:0,pic:"https://cdn.pixabay.com/photo/2016/11/05/00/05/spinach-1799266_1280.jpg"},{id:39,name:"Squash",price:0,pic:"https://cdn.pixabay.com/photo/2014/07/22/14/03/butternut-squash-399415_1280.jpg"},{id:40,name:"Tomato",price:0,pic:"https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_1280.jpg"},{id:41,name:"Zucchini",price:0,pic:"https://cdn.pixabay.com/photo/2018/06/17/14/45/zucchini-3480653_1280.jpg"}]})});case"Dairy":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:42,name:"Milk",price:0,pic:"https://img.freepik.com/free-vector/milk-splash-pouring-swirl-with-realistic-drops_107791-264.jpg?w=1800&t=st=1651021815~exp=1651022415~hmac=68f143923a37e1b2571ecd56c74310d3fd4c474d1ae9645b9d91ffbb6ad2aa03"},{id:43,name:"Eggs",price:0,pic:"https://img.freepik.com/free-photo/brown-eggs_2829-13455.jpg?w=1800&t=st=1651021927~exp=1651022527~hmac=ab89aa9d979c222d3070b5acec4725f370129bb29adfc9f2765dd7136a4c1c9b"},{id:44,name:"Yogurt",price:0,pic:"https://img.freepik.com/free-photo/bowl-greek-yogurt_165536-11228.jpg?w=1800"},{id:45,name:"Butter",price:0,pic:"https://img.freepik.com/free-photo/butter-white-background_62856-1913.jpg?w=1480"},{id:46,name:"Cheese",price:0,pic:"https://cdn.pixabay.com/photo/2017/01/11/19/56/cheese-1972744_1280.jpg"},{id:47,name:"Ice Cream",price:0,pic:"https://cdn.pixabay.com/photo/2014/10/06/15/24/ice-cream-476361_1280.jpg"},{id:48,name:"Coffee Creamer",price:0,pic:"https://cdn.pixabay.com/photo/2019/08/13/07/12/creamer-powder-4402671_1280.jpg"},{id:49,name:"Sour Cream",price:0,pic:"https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/24172457/ING-sour-cream-2-main.jpg"}]})});case"Bread":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:52,name:"Sliced White Bread",price:0,pic:"https://cdn.pixabay.com/photo/2016/08/25/06/47/bread-1618856_1280.jpg"},{id:53,name:"Sliced Multigrain Bread",price:0,pic:"https://cdn.pixabay.com/photo/2016/03/05/22/21/baked-1239259_1280.jpg"},{id:54,name:"French Baguette",price:0,pic:"https://cdn.pixabay.com/photo/2017/06/23/23/57/bread-2436370_1280.jpg"},{id:55,name:"Brioche Bread",price:0,pic:"https://media.istockphoto.com/photos/homemade-traditonal-greek-brioche-with-marmalade-picture-id1182207693?k=20&m=1182207693&s=612x612&w=0&h=2dAVZ5Kx5mrpKO08DT8imbmRbtY0cYcBFf0FsNzaP2g="},{id:56,name:"Ciabatta Bread",price:0,pic:"https://cdn.pixabay.com/photo/2021/08/22/17/39/ciabatta-6565715_1280.jpg"},{id:57,name:"Pita",price:0,pic:"https://cdn.pixabay.com/photo/2017/02/17/09/56/baked-2073693_1280.jpg"},{id:58,name:"Rye Bread",price:0,pic:"https://cdn.pixabay.com/photo/2017/01/28/22/52/bread-2016757_1280.jpg"},{id:59,name:"Sourdough Bread",price:0,pic:"https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_1280.jpg"},{id:60,name:"Sliced Whole Wheat Bread",price:0,pic:"https://cdn.pixabay.com/photo/2016/07/11/18/42/bread-1510298_1280.jpg"},{id:61,name:"Bagels",price:0,pic:"https://cdn.pixabay.com/photo/2017/04/04/17/30/food-2202338_1280.jpg"},{id:62,name:"Tortillas",price:0,pic:"https://static7.depositphotos.com/1007298/717/i/450/depositphotos_7176507-stock-photo-flour-tortillas.jpg?forcejpeg=true"},{id:63,name:"Muffins",price:0,pic:"https://img.freepik.com/free-photo/blueberry-muffins-with-powdered-sugar-fresh-berries_1205-557.jpg?1&t=st=1651032649~exp=1651033249~hmac=926f147f9d3baaf5e100cc8189f7b1b30fb1fe8a5c8456fc0dd311edbeb533ef&w=1800"},{id:64,name:"Sweet Rolls",price:0,pic:"https://cdn.pixabay.com/photo/2019/12/25/17/55/cinnamon-roll-4719023_1280.jpg"},{id:65,name:"Croissant",price:0,pic:"https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438_1280.jpg"}]})});case"Breakfast Cereal":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:66,name:"Cinnamon Toast Crunch",price:0,pic:"https://images.heb.com/is/image/HEBGrocery/000032012?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"},{id:67,name:"Cocoa Pebbles",price:0,pic:"https://bjs.scene7.com/is/image/bjs/224510?$bjs-Initial480$"},{id:68,name:"Frosted Flakes",price:0,pic:"https://bjs.scene7.com/is/image/bjs/3633?$bjs-Initial480$"},{id:69,name:"Lucky Charms",price:0,pic:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1520w,f_auto,q_auto:best/rockcms/2022-04/220407-lucky-charms-se-358p-ee2c63.jpg"},{id:70,name:"Honey Bunches of Oats",price:0,pic:""},{id:71,name:"Fruity Pebbles",price:0,pic:""},{id:72,name:"Cocoa Puffs",price:0,pic:""},{id:73,name:"Raisin Bran",price:0,pic:""},{id:74,name:"Froot Loops",price:0,pic:""},{id:75,name:"Frosted Mini-Wheats",price:0,pic:""},{id:76,name:"Honey Nut Cheerios",price:0,pic:""},{id:77,name:"Cap'n Crunch",price:0,pic:""},{id:78,name:"Apple Jacks",price:0,pic:""},{id:79,name:"Rice Krispies",price:0,pic:""},{id:80,name:"Corn Pops",price:0,pic:""},{id:81,name:"Trix",price:0,pic:""},{id:82,name:"Reese's Puffs",price:0,pic:""},{id:83,name:"Honey Smacks",price:0,pic:""}]})});case"Candy and Snacks":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:84,name:"Doritos",price:0},{id:85,name:"Funyuns",price:0},{id:86,name:"Pringles",price:0},{id:87,name:"Lay's",price:0},{id:88,name:"Ruffles",price:0},{id:89,name:"Tostinos",price:0},{id:90,name:"Sun CHips",price:0},{id:91,name:"Fritos",price:0},{id:92,name:"Cheetos",price:0},{id:93,name:"Oreos",price:0},{id:94,name:"Reese's Peanut Butter Cups",price:0},{id:95,name:"Goldfish",price:0},{id:96,name:"M&Ms",price:0},{id:97,name:"Skittles",price:0},{id:98,name:"Cheez-Its",price:0},{id:99,name:"Gummy Bears",price:0},{id:100,name:"Kit Kat",price:0},{id:101,name:"Twix",price:0},{id:102,name:"Starbust",price:0},{id:103,name:"Snickers",price:0},{id:104,name:"Trail Mix",price:0},{id:105,name:"Pretzels",price:0},{id:106,name:"Butterfinger",price:0},{id:107,name:"Oatmeal Creme Pies",price:0},{id:108,name:"Twinkies",price:0},{id:109,name:"Chocolate Chips",price:0},{id:110,name:"Popcorn",price:0}]})});case"Canned Goods":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:111,name:"Tuna",price:0},{id:112,name:"Cream of Mushroom Soup",price:0},{id:113,name:"Vienna Sausage",price:0},{id:114,name:"Chicken Noodle Soup",price:0},{id:115,name:"Tomato Soup",price:0},{id:116,name:"Cream of Chicken Soup",price:0},{id:117,name:"Sweet Corn",price:0},{id:118,name:"Diced Tomatoes",price:0},{id:119,name:"Spaghetti and Meatballs",price:0},{id:120,name:"Green Beans",price:0},{id:121,name:"Beef Ravioli",price:0},{id:122,name:"Baked Beans",price:0},{id:123,name:"Chicken Broth",price:0},{id:124,name:"Cranberry Sauce",price:0}]})});case"Condiments":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:125,name:"Ketchup",price:0},{id:126,name:"Mustard",price:0},{id:127,name:"Mayonnaise",price:0},{id:128,name:"Salt",price:0},{id:129,name:"Pepper",price:0},{id:130,name:"Buffalo Sauce",price:0},{id:131,name:"Relish",price:0},{id:132,name:"Honey Mustard",price:0},{id:133,name:"Dijon Mustard",price:0},{id:134,name:"Ranch Dressing",price:0},{id:135,name:"Caesar Dressing",price:0},{id:136,name:"Italian Dressing",price:0},{id:137,name:"Sugar",price:0},{id:138,name:"Tar Tar Sauce",price:0},{id:139,name:"Peanut Butter",price:0},{id:140,name:"Grape Jelly",price:0},{id:141,name:"Strawberry Jelly",price:0},{id:142,name:"Maple Syrup",price:0},{id:143,name:"Hot Sauce",price:0},{id:144,name:"Soy Sauce",price:0},{id:145,name:"Olive Oil",price:0},{id:146,name:"Honey",price:0},{id:147,name:"Balsamic Vinegar",price:0}]})});case"Meat":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:148,name:"Pork",price:0},{id:149,name:"Beef",price:0},{id:150,name:"Lamb",price:0},{id:151,name:"Chicken",price:0},{id:152,name:"Turkey",price:0},{id:153,name:"Steak",price:0},{id:154,name:"Duck",price:0},{id:155,name:"Hot Dog",price:0},{id:156,name:"Sausage",price:0},{id:157,name:"Bacon",price:0},{id:158,name:"Ham",price:0}]})});case"Beverages":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:159,name:"Water",price:0},{id:160,name:"Orange Juice",price:0},{id:161,name:"Apple Juice",price:0},{id:162,name:"Cranberry Juice",price:0},{id:163,name:"Grape Juice",price:0},{id:164,name:"Lemonade",price:0},{id:165,name:"Tea",price:0},{id:166,name:"Hot Chocolate",price:0},{id:167,name:"Coffee",price:0}]})});case"Seafood":return Object(x.jsx)(p.a,{style:M.listSpace,children:Object(x.jsx)(C,{order:t,items:[{id:168,name:"Cod",price:0},{id:169,name:"Salmon",price:0},{id:170,name:"Trout",price:0},{id:171,name:"Tuna",price:0},{id:172,name:"Haddock",price:0},{id:173,name:"Crab",price:0},{id:174,name:"Shrimp",price:0},{id:175,name:"Lobster",price:0},{id:176,name:"Prawn",price:0},{id:177,name:"Crayfish",price:0},{id:178,name:"Krill",price:0},{id:179,name:"Squid",price:0},{id:180,name:"Octopus",price:0},{id:181,name:"Snails",price:0},{id:182,name:"Mussels",price:0},{id:183,name:"Clams",price:0},{id:184,name:"Oysters",price:0},{id:185,name:"Scallops",price:0}]})})}}function H(e){e.route;return Object(x.jsx)(p.a,{style:M.container,children:Object(x.jsx)(o.a,{children:"My Cart"})})}function F(e){var i=e.route,t=e.navigation,a=i.params,n=a.fName,r=a.lName,s=n.charAt(0).toUpperCase()+r.charAt(0).toUpperCase(),m=Object(u.useState)(!1),b=c()(m,2),h=b[0],j=b[1],g=Object(u.useState)(!1),f=c()(g,2),y=f[0],O=f[1],C=Object(u.useState)(!1),k=c()(C,2),T=k[0],P=k[1],v=Object(u.useState)(!1),I=c()(v,2),z=I[0],A=I[1],H=function(){return j(!h)},F=function(){return O(!y)},D=function(){return P(!T)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(p.a,{style:M.container,children:[Object(x.jsx)(o.a,{style:M.profile,children:"Profile"}),Object(x.jsx)(l.a,{size:64,rounded:!0,title:s,containerStyle:{backgroundColor:"#000000",justifyContent:"center"}}),Object(x.jsxs)(o.a,{style:{fontWeight:"bold",paddingTop:15},children:[n," ",r]}),Object(x.jsxs)(p.a,{style:{paddingTop:20,alignContent:"center"},children:[Object(x.jsx)(d.a,{onPress:function(){t.navigate("Order",{})},style:{paddingTop:30,paddingBottom:30},children:Object(x.jsxs)(o.a,{style:{fontWeight:"bold",fontSize:20},children:[Object(x.jsx)(S.a,{name:"shopping-basket",size:22,color:"#ffd02c"}),"     Begin Order"]})}),Object(x.jsx)(d.a,{onPress:F,style:{paddingTop:20},children:Object(x.jsx)(l.d,{style:{flexDirection:"row",justifyContent:"left",alignItems:"left"},children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(_.a,{name:"information-circle-outline",size:24,color:"black"}),"     About Us"]})})}),Object(x.jsxs)(l.e,{style:{},isVisible:y,onBackdropPress:F,children:[Object(x.jsxs)(o.a,{style:{paddingBottom:20},children:["Hello, ",n,"!"]}),Object(x.jsxs)(o.a,{style:{paddingBottom:20},children:["The Grocery Store App is a place where you","\n"," can get all your essential food items carted,","\n"," paid for and delivered to you with ease!"]}),Object(x.jsx)(l.b,{style:{paddingTop:10},title:"Okay",onPress:F})]}),Object(x.jsx)(d.a,{onPress:H,style:{paddingTop:20},children:Object(x.jsx)(l.d,{style:{flexDirection:"row",justifyContent:"left",alignItems:"left"},children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(S.a,{name:"star-o",size:24,color:"black",style:{textAlign:"left"}}),"     Rate This App"]})})}),Object(x.jsxs)(l.e,{isVisible:h,onBackdropPress:H,children:[Object(x.jsxs)(o.a,{style:{paddingBottom:20},children:["Hello, ",n,"!"]}),Object(x.jsx)(o.a,{style:{paddingBottom:20},children:"How do you like our app so far?"}),Object(x.jsx)(l.f,{fractions:0,imageSize:30,minValue:0,ratingBackgroundColor:"#FFF",ratingColor:"#FF0",ratingCount:5,ratingImage:"star",ratingTextColor:"#222",startingValue:0,style:{paddingBottom:5},type:"star"}),Object(x.jsx)(l.b,{style:{paddingTop:10},title:"Submit Review",onPress:H})]}),Object(x.jsx)(d.a,{onPress:D,style:{paddingTop:20},children:Object(x.jsx)(l.d,{style:{flexDirection:"row",justifyContent:"left",alignItems:"left"},children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(w.a,{name:"sharealt",size:24,color:"black"}),"     Share App"]})})}),Object(x.jsxs)(l.e,{isVisible:T,onBackdropPress:D,children:[Object(x.jsx)(o.a,{children:"Do you like our app? We'd love to hear about it! Find Us on Facebook, Twitter and Instagram!"}),Object(x.jsxs)(p.a,{style:M.soc,children:[Object(x.jsx)(l.g,{fontStyle:{},iconSize:25,iconStyle:{},iconType:"font-awesome",onPress:function(){return console.log("get this to work one day")},style:{paddingHorizontal:10},title:"Facebook",type:"facebook"}),Object(x.jsx)(l.g,{fontStyle:{},iconSize:25,iconStyle:{},iconType:"font-awesome",onPress:function(){return console.log("get this to work one day")},style:{paddingHorizontal:10},title:"Twitter",type:"twitter"}),Object(x.jsx)(l.g,{fontStyle:{},iconSize:25,iconStyle:{},iconType:"font-awesome",onPress:function(){return console.log("get this to work one day")},style:{paddingHorizontal:10},title:"Instagram",type:"instagram"})]}),Object(x.jsx)(l.b,{style:{paddingTop:10},title:"Done",onPress:D})]}),Object(x.jsx)(d.a,{onPress:function(){return A(!z)},style:{paddingTop:20},children:Object(x.jsx)(l.d,{style:{flexDirection:"row",justifyContent:"left",alignItems:"left"},children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(B.a,{name:"logout",size:24,color:"black"}),"     Log Out"]})})})]})]})})}var M=r.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",backgroundColor:"#b8bc86"},container2:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},cardSpace:{flex:1,backgroundColor:"#b8bc86",alignItems:"center",justifyContent:"center",paddingTop:40,paddingBottom:50},listSpace:{flex:1,backgroundColor:"#b8bc86",alignItems:"center",justifyContent:"center",paddingTop:40,paddingBottom:50},itemBold:{fontWeight:"bold",fontSize:20,alignItems:"center",justifyContent:"center",textAlign:"center"},profile:{fontWeight:"bold",fontSize:25,paddingTop:25,paddingBottom:25},soc:{flexDirection:"row",justifyContent:"center",paddingTop:15,paddingBottom:15}});i.a=function(){return Object(x.jsx)(h.a,{children:Object(x.jsxs)(T.Navigator,{children:[Object(x.jsx)(T.Screen,{name:"Home",component:v,options:{headerShown:!0,headerStyle:{backgroundColor:"#31422e"},headerTintColor:"#fff",tabBarLabel:"Home",tabBarStyle:{display:"none"},tabBarActiveTintColor:"#31422e",tabBarIcon:function(){return Object(x.jsx)(S.a,{name:"home",size:20})}}}),Object(x.jsx)(T.Screen,{name:"Order",component:I,options:{headerShown:!0,headerStyle:{backgroundColor:"#31422e"},headerTintColor:"#fff",tabBarLabel:"Order",tabBarActiveTintColor:"#31422e",tabBarIcon:function(){return Object(x.jsx)(k.a,{name:"food-fork-drink",size:20})}}}),Object(x.jsx)(T.Screen,{name:"Cart",component:H,options:{headerShown:!0,headerStyle:{backgroundColor:"#31422e"},headerTintColor:"#fff",tabBarLabel:"Cart",tabBarActiveTintColor:"#31422e",tabBarIcon:function(){return Object(x.jsx)(S.a,{name:"shopping-cart",size:20})}}}),Object(x.jsx)(T.Screen,{name:"Profile",component:F,options:{headerShown:!0,headerStyle:{backgroundColor:"#31422e"},headerTintColor:"#fff",tabBarLabel:"Profile",tabBarActiveTintColor:"#31422e",tabBarIcon:function(){return Object(x.jsx)(_.a,{name:"person",size:20})}}})]})})}},196:function(e,i,t){e.exports=t(265)},264:function(e,i,t){e.exports=t.p+"static/media/food5.6db83a19.jpg"}},[[196,1,2]]]);
//# sourceMappingURL=app.e25e93aa.chunk.js.map