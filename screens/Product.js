import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Animated, FlatList} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from '../constants';

const Product = ({route, navigation}) => {

    const scrollX = new Animated.Value(0);
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        let {item} = route.params;

        setProduct(item)
    })

    function renderHeader() {
        
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{product?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderFoodInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ], { useNativeDriver: false })}
            >
                {
                    
                        <View
                            style={{ alignItems: 'center' }}
                        >
                            <View >
                                {/* Food Image */}
                                <Image
                                    source={product?.photo}
                                    resizeMode="cover"
                                    style={{
                                        width: 300,
                                        height: 500
                                    }}
                                />
                               
                            </View>

                            {/* Name & Description */}
                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    paddingHorizontal: SIZES.padding * 2
                                }}
                            >
                                <Text style={{ marginVertical: 10, textAlign: 'center', fontSize: 22 }}>{product?.name} - {product?.price}</Text>
                                <Text style={{ fontSize: 18 }}>Insertar descripción</Text>
                            </View>
                            <View>
                                <FlatList
                                    data={product?.planes}
                                    vertical
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={item => `${item.planid}`}
                                    renderItem={renderItem}
                                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                                />
                            </View>

                            
                        </View>
                    
                }
            </Animated.ScrollView>
        )
    }

    const renderItem = ({item}) => (
        <View>
            <Text>Plan {item.planid} meses: {item.planid} cuotas de {(parseInt(product?.price)/item.planid).toFixed(3)}</Text>
            <Text>Internet: {item.planinternet}</Text>
        </View>
        )

    return (
        <SafeAreaView style={styles.container}>
            
            {renderHeader()}
            {renderFoodInfo()}
            

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        justifyContent: "center",
        alignItems: "center",
    },
    containerImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Product;