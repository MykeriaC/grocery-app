import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
// import './App';
// import CartInfo from './App';


function OrderFlatList({order, items, /*navigation*/}){

    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        setCart([...cart, item]);
        console.log(cart);
    }

    // flatlist here
    return (
        <>
            <Text style={styles.itemBold}>{order}</Text>
            {/* <Text>Items in Cart: ({cart.length})</Text> */}
            <FlatList 
                data={items}
                renderItem={({ item }) => (
                    <>
                    <Card>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Divider />
                        <View style={styles.container}>
                        
                        <Image
                            style={{ width: 250, height: 133 }}
                            resizeMode="contain"
                            source={{uri: item.pic}}
                        />
                        <Text style={styles.priceStyle}>${item.price}</Text>
                        </View>

                        <Button
                            title="Add To Cart" 
                            buttonStyle={{ backgroundColor: '#ffd02c' }} 
                            onPress={() => 
                                {   
                                    handleClick(item);
                                }
                            }
                        ></Button>
                        {/* <Text>Added To Cart: {item.count}</Text> */}
                    </Card>
                    
                    </>
                )}
            />
            {/* <Button
                style={{paddingTop: 30}}
                title={"Go To Cart"}
                // onPress={()=>
                //     navigation.navigate('Cart',{
                //         cart: cart
                //     })
                // }
                
            ></Button> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardSpace: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
      paddingBottom: 50
    },
    listSpace: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
      paddingBottom: 50
    },
    // bolds the name of each Item section
    itemBold: {
      fontWeight: 'bold',
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingBottom: 20
    },

    priceStyle: {
        fontWeight: 'bold',
        fontSize: 17,
        paddingTop: 20,
        paddingBottom: 10

    }
  });

export default OrderFlatList;