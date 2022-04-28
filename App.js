import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button, Card, Avatar, Divider, Overlay, Rating, SocialIcon } from 'react-native-elements'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useCallback } from 'react';
import OrderFlatList from './OrderFL';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// This login screen shows up first and has the user fill in all the Login information then has a button that takes you to the profile when you log in. THe profile has a button somewhere that says begin order

// Function called inside the HomeStackScreen Component
function HomeInfo({ navigation }){
  let [fnValue, setFNValue] = useState("")
  let [lnValue, setLNValue] = useState("")
  let [wrongln, setWrongLN] = useState("")
  let [wrongfn, setWrongFN] = useState("")

  const image = require('./img/food5.jpg');

  let pressButton = useCallback(() => {

    // base case for if a user doesnt enter in a first and last name on the homescreen
    if (fnValue !== "" && lnValue !== "") {
      setFNValue(fnValue)
      setLNValue(lnValue)
      console.log(fnValue + " " + lnValue);
      navigation.navigate('Profile', {
        fName: fnValue,
        lName: lnValue,
      })
    }
    else {
      if (fnValue == ""){
        setWrongFN("Please Enter A Valid First Name!")
      }
      if (lnValue == ""){
        setWrongLN("Please Enter A Valid Last Name!")
      }
      
    }
    }, [fnValue, lnValue]);
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 35, paddingBottom: 20, paddingTop: 20, textAlign: 'center', marginHorizontal: 25 }}>Welcome to the Grocery Store App!</Text>
        <View style={{textAlign: 'center', alignItems: 'center'}}>
          <TextInput
            style={{ alignItems: 'center', backgroundColor: 'white', borderRadius: 8, padding: 8, borderWidth: 2, borderColor: '#31422e', }}
            placeholder='Enter First Name'
            onChangeText={setFNValue}
            value={fnValue}
          ></TextInput>
          <Text style={{color:'red', fontWeight: 'bold', fontSize: 15}}>{wrongfn}</Text>
          <View style={{paddingBottom: 10}}></View>
          <TextInput
            style={{ alignItems: 'center', backgroundColor: 'white', borderRadius: 8, padding: 8, borderWidth: 2, borderColor: '#31422e', }}
            placeholder='Enter Last Name'
            onChangeText={setLNValue}
            value={lnValue}
          ></TextInput>
          <Text style={{color:'red', fontWeight: 'bold', fontSize: 15}}>{wrongln}</Text>
        </View>
        <Button
          title="Access Profile"
          style={{alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}
          buttonStyle={{ backgroundColor: '#ffd02c'}}
          containerStyle={{ paddingTop: 40, justifyContent: 'center' }}
          onPress={pressButton}
        ></Button>
      </View>
    );
}

function OrderScreen(){
  return (
    <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={OrderInfo}
            options={
              ({ route }) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
              // Sets up the header for each of the individual screens
              switch (routeName) {
                case 'Order': {
                  return {
                    headerTitle: 'Order',
                    headerStyle: {
                      backgroundColor: '#31422e'
                    },
                    headerTintColor: '#fff',
                    
                  };
                }
                case 'Cart': {
                  return {
                    headerTitle: 'Cart',
                    headerStyle: {
                      backgroundColor: '#31422e'
                    },
                    headerTintColor: '#fff',
                  };
                }
                case 'Home': {
                  return {
                    headerTitle: 'Home',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#31422e'
                    },
                    headerTintColor: '#fff',
                  };
                }
              }
            }}
          />
          <Stack.Screen 
            name="Item" 
            component={ItemInfo}
            options={{
              headerStyle: {
                backgroundColor: '#31422e'
              },
              headerTintColor: '#fff',
            }}
          />
    </Stack.Navigator>
  );
}

function OrderInfo({ navigation }){

  // list of aisle section objects
  let grocery = [
    {
      id: 1,
      name: 'Produce',
      picture: 'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg'
    },
    {
      id: 2,
      name: 'Dairy',
      picture: 'https://img.freepik.com/free-photo/selection-milk-dairy-products_89198-738.jpg?w=1800'
    },
    {
      id: 3,
      name: 'Bread',
      picture: 'https://cdn.pixabay.com/photo/2017/10/18/16/44/bread-2864703_1280.jpg'
    },
    {
      id: 4,
      name: 'Breakfast Cereal',
      picture: 'https://cdn.pixabay.com/photo/2022/03/09/15/15/breakfast-7058063_1280.jpg'
    },
    {
      id: 5,
      name: 'Candy and Snacks',
      picture: 'https://img.freepik.com/free-photo/scattered-beer-snacks-assortment_127657-11990.jpg?w=1800'
    },
    {
      id: 6,
      name: 'Canned Goods',
      picture: 'https://img.freepik.com/free-photo/flat-lay-bunch-fresh-provisions-donation_23-2148733838.jpg?t=st=1650311428~exp=1650312028~hmac=02dc48eb7282e5a83c85f60d04d9699b0fb4e952badfe3da327d7a0d0ff79f4a&w=1800'
    },
    {
      id: 7,
      name: 'Condiments',
      picture: 'https://cdn.pixabay.com/photo/2019/05/01/17/37/sauce-4171459_1280.jpg'
    },
    {
      id: 8,
      name: 'Meat',
      picture: 'https://cdn.pixabay.com/photo/2017/11/10/15/04/steak-2936531_1280.jpg'
    },
    {
      id: 9,
      name: 'Beverages',
      picture: 'https://cdn.pixabay.com/photo/2017/11/03/14/32/beverages-2914497_1280.jpg'
    },
    {
      id: 10,
      name: 'Seafood',
      picture: 'https://cdn.pixabay.com/photo/2013/07/19/00/18/seafood-165220_1280.jpg'
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.cardSpace}>
        <FlatList
          data={grocery}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={()=>{
                navigation.navigate('Item', {
                  id: item.id,
                  name: item.name
                });
              }}
            >
              <View style={styles.container}>
                <Card>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Divider />
                  <View style={styles.container2}>
                    <Image
                      style={{ width: 300, height: 200 }}
                      resizeMode="contain"
                      source={{uri: item.picture}}
                    />
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            
          )}
        />
        </View>
      </View>
  );
}

function ItemInfo({route}){
  const { id, name } = route.params;

  // all the object arrays here

  // object array for produce
  let produce = [
    {
      id: 1,
      name: "Apples (3lb Bag)",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2018/08/02/21/51/apples-3580560_1280.jpg"
    },
    {
      id: 2,
      name: "Banana",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg"
    },
    {
      id: 3,
      name: "Grapes",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/02/02/14/04/grapes-2032838_1280.jpg"
    },
    {
      id: 4,
      name: "Mango",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241_1280.jpg"
    },
    {
      id: 5,
      name: "Lemon",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/03/06/12/00/lemon-2121307_1280.jpg"
    },
    {
      id: 6,
      name: "Lime",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/03/10/15/15/lime-2133091_1280.jpg"
    },
    {
      id: 7,
      name: "Kiwi",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/03/05/23/02/breakfast-1239438_1280.jpg"
    },
    {
      id: 8,
      name: "Pear",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2010/12/13/10/06/food-2280_1280.jpg"
    },
    {
      id: 9,
      name: "Raspberries",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/04/28/17/12/raspberries-2268901_1280.jpg"
    },
    {
      id: 10,
      name: "Blackberries",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2010/12/13/10/05/berry-2275_1280.jpg"
    },
    {
      id: 11,
      name: "Blueberries",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2018/06/07/16/38/blueberries-3460423_1280.jpg"
    },
    {
      id: 12,
      name: "Cherries",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2018/05/27/16/10/cherries-3433775_1280.jpg"
    },
    {
      id: 13,
      name: "Strawberries",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg"
    },
    {
      id: 14,
      name: "Watermelon",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/01/10/19/05/watermelon-1969949_1280.jpg"
    },
    {
      id: 15,
      name: "Pineapple",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2015/02/14/18/10/pineapple-636562_1280.jpg"
    },
    {
      id: 16,
      name: "Oranges",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/10/07/14/11/tangerines-1721633_1280.jpg"
    },
    {
      id: 17,
      name: "Cranberries",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2019/10/02/19/10/food-4521744_1280.jpg"
    },
    {
      id: 18,
      name: "Asparagus",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2015/03/30/20/45/asparagus-700153_1280.jpg"
    },
    {
      id: 19,
      name: "Avocado",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/03/05/19/03/appetite-1238257_1280.jpg"
    },
    {
      id: 20,
      name: "Beet",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/10/09/13/39/red-beets-1725799_1280.jpg"
    },
    {
      id: 21,
      name: "Peas",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2010/12/10/08/peas-1144_1280.jpg"
    },
    {
      id: 22,
      name: "Broccoli",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg"
    },
    {
      id: 23,
      name: "Brussels Sprouts",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2012/03/04/00/40/brussels-sprouts-22009_1280.jpg"
    },
    {
      id: 24,
      name: "Cabbage",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2022/03/31/12/27/savoy-cabbage-7102903_1280.jpg"
    },
    {
      id: 25,
      name: "Carrot",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2015/12/08/16/10/isolated-1083235_1280.png"
    },
    {
      id: 26,
      name: "Cauliflower",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/07/24/09/28/cauliflower-2534064_1280.png"
    },
    {
      id: 27,
      name: "Celery",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2018/05/18/04/03/celery-3410302_1280.png"
    },
    {
      id: 28,
      name: "Chickpea",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2019/08/10/08/39/chickpeas-4396439_1280.jpg"
    },
    {
      id: 29,
      name: "Corn",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/07/10/08/27/vegetable-2489368_1280.png"
    },
    {
      id: 30,
      name: "Cucumber",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_1280.jpg"
    },
    {
      id: 31,
      name: "Eggplant",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/09/10/17/47/eggplant-1659784_1280.jpg"
    },
    {
      id: 32,
      name: "Lettuce",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/07/03/18/14/lettuce-2468495_1280.png"
    },
    {
      id: 33,
      name: "Mushroom",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2018/04/03/08/37/mushroom-3286258_1280.jpg"
    },
    {
      id: 34,
      name: "Onion",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2013/02/21/19/14/onion-bulbs-84722_1280.jpg"
    },
    {
      id: 35,
      name: "Potato",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2012/12/24/08/39/agriculture-72254_1280.jpg"
    },
    {
      id: 36,
      name: "Pumpkin",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2012/12/24/08/40/autumn-72294_1280.jpg"
    },
    {
      id: 37,
      name: "Radish",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2019/01/25/22/36/radish-3955463_1280.jpg"
    },
    {
      id: 38,
      name: "Spinach",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/11/05/00/05/spinach-1799266_1280.jpg"
    },
    {
      id: 39,
      name: "Squash",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2014/07/22/14/03/butternut-squash-399415_1280.jpg"
    },
    {
      id: 40,
      name: "Tomato",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_1280.jpg"
    },
    {
      id: 41,
      name: "Zucchini",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2018/06/17/14/45/zucchini-3480653_1280.jpg"
    },

  ]
  // object array for dair
  let dairy = [
    {
      id: 42,
      name: "Milk",
      price: 0,
      pic: "https://img.freepik.com/free-vector/milk-splash-pouring-swirl-with-realistic-drops_107791-264.jpg?w=1800&t=st=1651021815~exp=1651022415~hmac=68f143923a37e1b2571ecd56c74310d3fd4c474d1ae9645b9d91ffbb6ad2aa03"
    },
    {
      id: 43,
      name: "Eggs",
      price: 0,
      pic: "https://img.freepik.com/free-photo/brown-eggs_2829-13455.jpg?w=1800&t=st=1651021927~exp=1651022527~hmac=ab89aa9d979c222d3070b5acec4725f370129bb29adfc9f2765dd7136a4c1c9b"
    },
    {
      id: 44,
      name: "Yogurt",
      price: 0,
      pic: "https://img.freepik.com/free-photo/bowl-greek-yogurt_165536-11228.jpg?w=1800"
    },
    {
      id: 45,
      name: "Butter",
      price: 0,
      pic: "https://img.freepik.com/free-photo/butter-white-background_62856-1913.jpg?w=1480"
    },
    {
      id: 46,
      name: "Cheese",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/01/11/19/56/cheese-1972744_1280.jpg"
    },
    {
      id: 47,
      name: "Ice Cream",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2014/10/06/15/24/ice-cream-476361_1280.jpg"
    },
    {
      id: 48,
      name: "Coffee Creamer",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2019/08/13/07/12/creamer-powder-4402671_1280.jpg"
    },
    {
      id: 49,
      name: "Sour Cream",
      price: 0,
      pic: "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/24172457/ING-sour-cream-2-main.jpg"
    },
  ]

  // object array for bread
  let bread = [
    {
      id: 52,
      name: "Sliced White Bread",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/08/25/06/47/bread-1618856_1280.jpg"
    },
    {
      id: 53,
      name: "Sliced Multigrain Bread",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/03/05/22/21/baked-1239259_1280.jpg"
    },
    {
      id: 54,
      name: "French Baguette",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/06/23/23/57/bread-2436370_1280.jpg"
    },
    {
      id: 55,
      name: "Brioche Bread",
      price: 0,
      pic: "https://media.istockphoto.com/photos/homemade-traditonal-greek-brioche-with-marmalade-picture-id1182207693?k=20&m=1182207693&s=612x612&w=0&h=2dAVZ5Kx5mrpKO08DT8imbmRbtY0cYcBFf0FsNzaP2g="
    },
    {
      id: 56,
      name: "Ciabatta Bread",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2021/08/22/17/39/ciabatta-6565715_1280.jpg"
    },
    {
      id: 57,
      name: "Pita",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/02/17/09/56/baked-2073693_1280.jpg"
    },
    {
      id: 58,
      name: "Rye Bread",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/01/28/22/52/bread-2016757_1280.jpg"
    },
    {
      id: 59,
      name: "Sourdough Bread",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_1280.jpg"
    },
    {
      id: 60,
      name: "Sliced Whole Wheat Bread",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/07/11/18/42/bread-1510298_1280.jpg"
    },
    {
      id: 61,
      name: "Bagels",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2017/04/04/17/30/food-2202338_1280.jpg"
    },
    {
      id: 62,
      name: "Tortillas",
      price: 0,
      pic: "https://static7.depositphotos.com/1007298/717/i/450/depositphotos_7176507-stock-photo-flour-tortillas.jpg?forcejpeg=true"
    },
    {
      id: 63,
      name: "Muffins",
      price: 0,
      pic: "https://img.freepik.com/free-photo/blueberry-muffins-with-powdered-sugar-fresh-berries_1205-557.jpg?1&t=st=1651032649~exp=1651033249~hmac=926f147f9d3baaf5e100cc8189f7b1b30fb1fe8a5c8456fc0dd311edbeb533ef&w=1800"
    },
    {
      id: 64,
      name: "Sweet Rolls",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2019/12/25/17/55/cinnamon-roll-4719023_1280.jpg"
    },
    {
      id: 65,
      name: "Croissant",
      price: 0,
      pic: "https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438_1280.jpg"
    },
  ]

  // object array for cereal
  let cereal = [
    {
      id: 66,
      name: "Cinnamon Toast Crunch",
      price: 0,
      pic: "https://images.heb.com/is/image/HEBGrocery/000032012?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"
    },
    {
      id: 67,
      name: "Cocoa Pebbles",
      price: 0,
      pic: "https://bjs.scene7.com/is/image/bjs/224510?$bjs-Initial480$"
    },
    {
      id: 68,
      name: "Frosted Flakes",
      price: 0,
      pic: "https://bjs.scene7.com/is/image/bjs/3633?$bjs-Initial480$"
    },
    {
      id: 69,
      name: "Lucky Charms",
      price: 0,
      pic: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1520w,f_auto,q_auto:best/rockcms/2022-04/220407-lucky-charms-se-358p-ee2c63.jpg"
    },
    {
      id: 70,
      name: "Honey Bunches of Oats",
      price: 0,
      pic: ""
    },
    {
      id: 71,
      name: "Fruity Pebbles",
      price: 0,
      pic: ""
    },
    {
      id: 72,
      name: "Cocoa Puffs",
      price: 0,
      pic: ""
    },
    {
      id: 73,
      name: "Raisin Bran",
      price: 0,
      pic: ""
    },
    {
      id: 74,
      name: "Froot Loops",
      price: 0,
      pic: ""
    },
    {
      id: 75,
      name: "Frosted Mini-Wheats",
      price: 0,
      pic: ""
    },
    {
      id: 76,
      name: "Honey Nut Cheerios",
      price: 0,
      pic: ""
    },
    {
      id: 77,
      name: "Cap'n Crunch",
      price: 0,
      pic: ""
    },
    {
      id: 78,
      name: "Apple Jacks",
      price: 0,
      pic: ""
    },
    {
      id: 79,
      name: "Rice Krispies",
      price: 0,
      pic: ""
    },
    {
      id: 80,
      name: "Corn Pops",
      price: 0,
      pic: ""
    },
    {
      id: 81,
      name: "Trix",
      price: 0,
      pic: ""
    },
    {
      id: 82,
      name: "Reese's Puffs",
      price: 0,
      pic: ""
    },
    {
      id: 83,
      name: "Honey Smacks",
      price: 0,
      pic: ""
    },
  ]

  // object array for snack
  let snacks = [
    {
      id: 84,
      name: "Doritos",
      price: 0
    },
    {
      id: 85,
      name: "Funyuns",
      price: 0
    },
    {
      id: 86,
      name: "Pringles",
      price: 0
    },
    {
      id: 87,
      name: "Lay's",
      price: 0
    },
    {
      id: 88,
      name: "Ruffles",
      price: 0
    },
    {
      id: 89,
      name: "Tostinos",
      price: 0
    },
    {
      id: 90,
      name: "Sun CHips",
      price: 0
    },
    {
      id: 91,
      name: "Fritos",
      price: 0
    },
    {
      id: 92,
      name: "Cheetos",
      price: 0
    },
    {
      id: 93,
      name: "Oreos",
      price: 0
    },
    {
      id: 94,
      name: "Reese's Peanut Butter Cups",
      price: 0
    },
    {
      id: 95,
      name: "Goldfish",
      price: 0
    },
    {
      id: 96,
      name: "M&Ms",
      price: 0
    },
    {
      id: 97,
      name: "Skittles",
      price: 0
    },
    {
      id: 98,
      name: "Cheez-Its",
      price: 0
    },
    {
      id: 99,
      name: "Gummy Bears",
      price: 0
    },
    {
      id: 100,
      name: "Kit Kat",
      price: 0
    },
    {
      id: 101,
      name: "Twix",
      price: 0
    },
    {
      id: 102,
      name: "Starbust",
      price: 0
    },
    {
      id: 103,
      name: "Snickers",
      price: 0
    },
    {
      id: 104,
      name: "Trail Mix",
      price: 0
    },
    {
      id: 105,
      name: "Pretzels",
      price: 0
    },
    {
      id: 106,
      name: "Butterfinger",
      price: 0
    },
    {
      id: 107,
      name: "Oatmeal Creme Pies",
      price: 0
    },
    {
      id: 108,
      name: "Twinkies",
      price: 0
    },
    {
      id: 109,
      name: "Chocolate Chips",
      price: 0
    },
    {
      id: 110,
      name: "Popcorn",
      price: 0
    },
  ]

  // object array for cans
  let cans = [
    {
      id: 111,
      name: "Tuna",
      price: 0
    },
    {
      id: 112,
      name: "Cream of Mushroom Soup",
      price: 0
    },
    {
      id: 113,
      name: "Vienna Sausage",
      price: 0
    },
    {
      id: 114,
      name: "Chicken Noodle Soup",
      price: 0
    },
    {
      id: 115,
      name: "Tomato Soup",
      price: 0
    },
    {
      id: 116,
      name: "Cream of Chicken Soup",
      price: 0
    },
    {
      id: 117,
      name: "Sweet Corn",
      price: 0
    },
    {
      id: 118,
      name: "Diced Tomatoes",
      price: 0
    },
    {
      id: 119,
      name: "Spaghetti and Meatballs",
      price: 0
    },
    {
      id: 120,
      name: "Green Beans",
      price: 0
    },
    {
      id: 121,
      name: "Beef Ravioli",
      price: 0
    },
    {
      id: 122,
      name: "Baked Beans",
      price: 0
    },
    {
      id: 123,
      name: "Chicken Broth",
      price: 0
    },
    {
      id: 124,
      name: "Cranberry Sauce",
      price: 0
    },
  ]

  // object array for condiments
  let condiments = [
    {
      id: 125,
      name: "Ketchup",
      price: 0
    },
    {
      id: 126,
      name: "Mustard",
      price: 0
    },
    {
      id: 127,
      name: "Mayonnaise",
      price: 0
    },
    {
      id: 128,
      name: "Salt",
      price: 0
    },
    {
      id: 129,
      name: "Pepper",
      price: 0
    },
    {
      id: 130,
      name: "Buffalo Sauce",
      price: 0
    },
    {
      id: 131,
      name: "Relish",
      price: 0
    },
    {
      id: 132,
      name: "Honey Mustard",
      price: 0
    },
    {
      id: 133,
      name: "Dijon Mustard",
      price: 0
    },{
      id: 134,
      name: "Ranch Dressing",
      price: 0
    },
    {
      id: 135,
      name: "Caesar Dressing",
      price: 0
    },
    {
      id: 136,
      name: "Italian Dressing",
      price: 0
    },
    {
      id: 137,
      name: "Sugar",
      price: 0
    },
    {
      id: 138,
      name: "Tar Tar Sauce",
      price: 0
    },
    {
      id: 139,
      name: "Peanut Butter",
      price: 0
    },
    {
      id: 140,
      name: "Grape Jelly",
      price: 0
    },
    {
      id: 141,
      name: "Strawberry Jelly",
      price: 0
    },
    {
      id: 142,
      name: "Maple Syrup",
      price: 0
    },
    {
      id: 143,
      name: "Hot Sauce",
      price: 0
    },
    {
      id: 144,
      name: "Soy Sauce",
      price: 0
    },
    {
      id: 145,
      name: "Olive Oil",
      price: 0
    },
    {
      id: 146,
      name: "Honey",
      price: 0
    },
    {
      id: 147,
      name: "Balsamic Vinegar",
      price: 0
    },
  ]

  // object array for meat
  let meat = [
    {
      id: 148,
      name: "Pork",
      price: 0
    },
    {
      id: 149,
      name: "Beef",
      price: 0
    },
    {
      id: 150,
      name: "Lamb",
      price: 0
    },
    {
      id: 151,
      name: "Chicken",
      price: 0
    },
    {
      id: 152,
      name: "Turkey",
      price: 0
    },
    {
      id: 153,
      name: "Steak",
      price: 0
    },
    {
      id: 154,
      name: "Duck",
      price: 0
    },
    {
      id: 155,
      name: "Hot Dog",
      price: 0
    },
    {
      id: 156,
      name: "Sausage",
      price: 0
    },
    {
      id: 157,
      name: "Bacon",
      price: 0
    },
    {
      id: 158,
      name: "Ham",
      price: 0
    },
  ]

  // object array for beverage
  let beverage = [
    {
      id: 159,
      name: "Water",
      price: 0
    },
    {
      id: 160,
      name: "Orange Juice",
      price: 0
    },
    {
      id: 161,
      name: "Apple Juice",
      price: 0
    },
    {
      id: 162,
      name: "Cranberry Juice",
      price: 0
    },
    {
      id: 163,
      name: "Grape Juice",
      price: 0
    },
    {
      id: 164,
      name: "Lemonade",
      price: 0
    },
    {
      id: 165,
      name: "Tea",
      price: 0
    },
    {
      id: 166,
      name: "Hot Chocolate",
      price: 0
    },
    {
      id: 167,
      name: "Coffee",
      price: 0
    },
  ]

  // object array for seafood
  let seafood = [
    {
      id: 168,
      name: "Cod",
      price: 0
    },
    {
      id: 169,
      name: "Salmon",
      price: 0
    },
    {
      id: 170,
      name: "Trout",
      price: 0
    },
    {
      id: 171,
      name: "Tuna",
      price: 0
    },
    {
      id: 172,
      name: "Haddock",
      price: 0
    },
    {
      id: 173,
      name: "Crab",
      price: 0
    },
    {
      id: 174,
      name: "Shrimp",
      price: 0
    },
    {
      id: 175,
      name: "Lobster",
      price: 0
    },
    {
      id: 176,
      name: "Prawn",
      price: 0
    },
    {
      id: 177,
      name: "Crayfish",
      price: 0
    },
    {
      id: 178,
      name: "Krill",
      price: 0
    },
    {
      id: 179,
      name: "Squid",
      price: 0
    },
    {
      id: 180,
      name: "Octopus",
      price: 0
    },
    {
      id: 181,
      name: "Snails",
      price: 0
    },
    {
      id: 182,
      name: "Mussels",
      price: 0
    },
    {
      id: 183,
      name: "Clams",
      price: 0
    },
    {
      id: 184,
      name: "Oysters",
      price: 0
    },
    {
      id: 185,
      name: "Scallops",
      price: 0
    },
  ]

  // create multiple flatlists and multiple object arrays; make a switch case that will return a particular render based on the value of 'name'
  switch(name){
    case 'Produce': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={produce}/>
        </View>
      );
    }
    case 'Dairy': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={dairy}/>
        </View>
      );
    }
    case 'Bread': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={bread}/>
        </View>
      );
    }
    case 'Breakfast Cereal': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={cereal}/>
        </View>
      );
    }
    case 'Candy and Snacks': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={snacks}/>
        </View>
      );
    }
    case 'Canned Goods': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={cans}/>
        </View>
      );
    }
    case 'Condiments': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={condiments}/>
        </View>
      );
    }
    case 'Meat': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={meat}/>
        </View>
      );
    }
    case 'Beverages': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={beverage}/>
        </View>
      );
    }
    case 'Seafood': {
      return (
        <View style={styles.listSpace}>
          <OrderFlatList order={name} items={seafood}/>
        </View>
      );
    }
  }
}

// pass the add to cart count here for every click of the add to car/remove to cart button so that I can display that and run a function that calculates prices
function CartInfo({route}){
  // const {cart} = route.params;
  return (
    <View style={styles.container}>
      <Text>My Cart</Text>
    </View>
  );
}

// Sets up the display for the profile screen
function ProfileInfo({route, navigation}){
  
  const {fName, lName} = route.params;

  // Capitalizes the first letter of the first and last name to display in the profile icon
  const av = fName.charAt(0).toUpperCase() + lName.charAt(0).toUpperCase();

  // set state for the rating
  const [rating, setRating] = useState(false);

  // set state for the about
  const [about, setAbout] = useState(false);

  // set state for the share
  const [share, setShare] = useState(false);

  // set state for the log out
  const [logout, setLogout] = useState(false);

  // high order function that changes the value of rating
  const onPressR = () => setRating(!rating);

  // high order function that changes the value of about
  const onPressA = () => setAbout(!about);

  // high order function that changes the value of share
  const onPressS = () => setShare(!share);

  // high order function that changes the value of log out
  const onPressL = () => setLogout(!logout);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.profile}>Profile</Text>
        <Avatar
          size={64}
          rounded
          title={av} 
          containerStyle={{ backgroundColor: '#000000', justifyContent: 'center' }}
        />
        <Text style={{fontWeight: 'bold', paddingTop: 15}}>{fName} {lName}</Text>


        <View style={{paddingTop: 20, alignContent: "center"}}>

          {/* Touchable Display for the Begin Order touch */}
          <TouchableOpacity onPress={()=>{
                navigation.navigate('Order', {
                });
              }} style={{paddingTop: 30, paddingBottom: 30}}>
              <Text style={{fontWeight:'bold', fontSize: 20}}><FontAwesome name="shopping-basket" size={22} color="#ffd02c" />     Begin Order</Text>
          </TouchableOpacity>
          
          {/* For About Us Button on Profile Screen */}
          <TouchableOpacity onPress={onPressA} style={{paddingTop: 20}}>
            <Divider style={{flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
              <Text><Ionicons name="information-circle-outline" size={24} color="black" />     About Us</Text>
            </Divider>
          </TouchableOpacity>
          <Overlay style={{}} isVisible={about} onBackdropPress={onPressA}>
            <Text style={{paddingBottom: 20}}>Hello, {fName}!</Text>
            <Text style={{paddingBottom: 20}}>The Grocery Store App is a place where you{'\n'} can get all your essential food items carted,{'\n'} paid for and delivered to you with ease!</Text>
            <Button
              style={{paddingTop: 10}}
              title="Okay"
              onPress={onPressA}
            />
          </Overlay>

          {/* For Ratings Button on Profile Screen */}
          <TouchableOpacity onPress={onPressR} style={{paddingTop: 20}}>
            <Divider style={{flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
              <Text><FontAwesome name="star-o" size={24} color="black" style={{textAlign: 'left'}}/>     Rate This App</Text>
            </Divider>
          </TouchableOpacity>
          <Overlay isVisible={rating} onBackdropPress={onPressR}>
            <Text style={{paddingBottom: 20}}>Hello, {fName}!</Text>
            <Text style={{paddingBottom: 20}}>
              How do you like our app so far?
            </Text>
            <Rating
              fractions={0}
              imageSize={30}
              minValue={0}
              ratingBackgroundColor="#FFF"
              ratingColor="#FF0"
              ratingCount={5}
              ratingImage="star"
              ratingTextColor="#222"
              startingValue={0}
              style={{paddingBottom: 5}}
              type="star"
            />
            <Button
              style={{paddingTop: 10}}
              title="Submit Review"
              onPress={onPressR}
            />
          </Overlay>

          {/* For Share App Button on Profile Screen */}
          <TouchableOpacity onPress={onPressS} style={{paddingTop: 20}}>
            <Divider style={{flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
              <Text><AntDesign name="sharealt" size={24} color="black" />     Share App</Text>
            </Divider>
          </TouchableOpacity>
          <Overlay isVisible={share} onBackdropPress={onPressS}>
            <Text>Do you like our app? We'd love to hear about it! Find Us on Facebook, Twitter and Instagram!</Text>
            <View style={styles.soc}> 
              <SocialIcon
                fontStyle={{}}
                iconSize={25}
                iconStyle={{}}
                iconType="font-awesome"
                onPress={() => console.log("get this to work one day")}
                style={{ paddingHorizontal: 10 }}
                title="Facebook"
                type="facebook"
              />
              <SocialIcon
                fontStyle={{}}
                iconSize={25}
                iconStyle={{}}
                iconType="font-awesome"
                onPress={() => console.log("get this to work one day")}
                style={{ paddingHorizontal: 10 }}
                title="Twitter"
                type="twitter"
              />
              <SocialIcon
                fontStyle={{}}
                iconSize={25}
                iconStyle={{}}
                iconType="font-awesome"
                onPress={() => console.log("get this to work one day")}
                style={{ paddingHorizontal: 10 }}
                title="Instagram"
                type="instagram"
              />
            </View>  
              <Button
                style={{paddingTop: 10}}
                title="Done"
                onPress={onPressS}
              />
          </Overlay>

          {/* <Button
            title="Begin Order"
            buttonStyle={{ backgroundColor: '#ffd02c'}}
            containerStyle={{ paddingTop: 50, paddingBottom: 40 }}
            onPress={()=>{
              navigation.navigate('Order', {
              });
            }}
          ></Button> */}

          {/* For Log Out Button on Profile Screen */}
          <TouchableOpacity onPress={onPressL} style={{paddingTop: 20}}>
            <Divider style={{flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
              <Text><MaterialIcons name="logout" size={24} color="black" />     Log Out</Text>
            </Divider>
          </TouchableOpacity>
        </View>
      </View>
      
    </>
  );
}

function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
            name="Home" 
            component={HomeInfo}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#31422e'
              },
              headerTintColor: '#fff',
              tabBarLabel:"Home",
              // hides tab bar in home
              tabBarStyle: {display: 'none'},
              tabBarActiveTintColor: "#31422e",
              tabBarIcon: () => (
                <FontAwesome name="home" size={20}/>
              )
            }}
          />
          <Tab.Screen
            name="Order"
            component={OrderScreen} 
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#31422e'
              },
              headerTintColor: '#fff',
              tabBarLabel:"Order",
              tabBarActiveTintColor: "#31422e",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="food-fork-drink" size={20}/>
              )
            }} 
          />
          <Tab.Screen
            name="Cart" 
            component={CartInfo} 
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#31422e'
              },
              headerTintColor: '#fff',
              tabBarLabel:"Cart",
              tabBarActiveTintColor: "#31422e",
              tabBarIcon: () => (
                <FontAwesome name="shopping-cart" size={20}/>
              )
            }}

          />
          <Tab.Screen
            name="Profile" 
            component={ProfileInfo} 
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#31422e'
              },
              headerTintColor: '#fff',
              tabBarLabel:"Profile",
              tabBarActiveTintColor: "#31422e",
              tabBarIcon: () => (
                <Ionicons name="person" size={20}/>
              )
            }}

          />
      </Tab.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b8bc86'
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'center',
  },
  cardSpace: {
    flex: 1,
    backgroundColor: '#b8bc86',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 50
  },
  listSpace: {
    flex: 1,
    backgroundColor: '#b8bc86',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 50
  },
  // bolds the name of each Item section
  itemBold: {
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  // profile styling 
  profile: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 25,
    paddingBottom: 25
  },
  soc: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
});

export default App;