import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Image, Text, Button, Animated} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {COLORS, FONTS, icons, images, SIZES, api_calls} from "../constants"
import * as Device from 'expo-device';


const Catalog = ({navigation}) => {
    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "[Nombre sede]",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }


    const categoryData = [
        {
            id: 1,
            name: "Nokia",
            icon: images.nokia,
        },
        {
            id: 2,
            name: "Motorola",
            icon: images.motorola,
        },
        {
            id: 3,
            name: "Apple",
            icon: images.apple,
        },
        {
            id: 4,
            name: "Xiaomi",
            icon: images.xiaomi,
        },
        {
            id: 5,
            name: "Celulares",
            icon: images.nokia3310,
        },
        {
            id: 6,
            name: "Tablets",
            icon: images.ipad128gb,
        }

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Nokia 3310",
            rating: 4.8,
            categories: [1,5],
            priceRating: affordable,
            photo: images.nokia3310,
            price: "19.990",
            camera: "NO",
            planes:[
                    {   
                        planid:3,
                        pagocontado:"no",
                        planinternet:"10GB",
                    },
                    {   
                        planid:6,
                        planinternet:"20GB",
                    },
                    {   
                        planid:12,
                        planinternet:"40GB",
                    }
            ]

        },
        {
            id: 8,
            name: "Redmi Note 8 Pro",
            rating: 4.5,
            categories: [4, 5],
            priceRating: fairPrice,
            photo: images.rednote9pro,
            price: "149.990",
            camera: "8mp",
            planes:[
                    {   
                        planid:3,
                        pagocontado:"no",
                        planinternet:"10GB",
                    },
                    {   
                        planid:6,
                        planinternet:"20GB",
                    },
                    {   
                        planid:12,
                        planinternet:"40GB",
                    }
            ]
        },
        {
            id: 2,
            name: "Iphone 11",
            rating: 4.8,
            categories: [3, 5],
            priceRating: expensive,
            photo: images.iphone11,
            price: "799.990",
            camera: "12mp",
            planes:[
                    {   
                        planid:3,
                        pagocontado:"no",
                        planinternet:"10GB",
                    },
                    {   
                        planid:6,
                        planinternet:"20GB",
                    },
                    {   
                        planid:12,
                        planinternet:"40GB",
                    }
            ]
        },{
            id: 3,
            name: "Xiaomi RedNote 9 Pro",
            rating: 4.7,
            categories: [4, 5],
            priceRating: fairPrice,
            photo: images.rednote9pro,
            price: "199.990",
            camera: "9mp",
            planes:[
                    {   
                        planid:3,
                        pagocontado:"no",
                        planinternet:"10GB",
                    },
                    {   
                        planid:6,
                        planinternet:"20GB",
                    },
                    {   
                        planid:12,
                        planinternet:"40GB",
                    }
            ]
        },{
            id: 4,
            name: "Ipad 128GB",
            rating: 4.4,
            categories: [3, 6],
            priceRating: expensive,
            photo: images.ipad128gb,
            price: "699.990",
            camera: "9mp",
            planes:[
                    {   
                        planid:3,
                        pagocontado:"no",
                        planinternet:"10GB",
                    },
                    {   
                        planid:6,
                        planinternet:"20GB",
                    },
                    {   
                        planid:12,
                        planinternet:"40GB",
                    }
            ]
        },{
            id: 5,
            name: "Moto G9 Power",
            rating: 4.8,
            categories: [2, 5],
            priceRating: expensive,
            photo: images.motog9power,
            price: "249.990",
            camera: "8mp",
            planes:[
                    {   
                        planid:3,
                        pagocontado:"no",
                        planinternet:"10GB",
                    },
                    {   
                        planid:6,
                        planinternet:"20GB",
                    },
                    {   
                        planid:12,
                        planinternet:"40GB",
                    }
            ]
        },
        
    ]
    
    api_calls.getArticlesFromApi();

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    // const [restaurants, setRestaurants] = React.useState(api_calls.getArticlesFromApi())
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)
    const [loading, setLoading] = React.useState(false)

    const [testingText, setTestingText] = React.useState("")

    function onPressResetCatalog(){

        setRestaurants(null)
        setSelectedCategory(null)
        setLoading(true)
    }

    function onPressReloadCatalog(){

        setRestaurants(restaurantData)
        setSelectedCategory(null)
        setLoading(false)
    }


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }


    function renderHeader() {
        
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
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
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => goToThisDevice()}
                >
                    <Image
                        source={icons.phone}
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

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        if (loading) {    
            return (<View></View>);  
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Marcas</Text>
                <Text style={{ ...FONTS.h1 }}>de Celular</Text>
                <Text style={{ ...FONTS.h3 }}>{testingText}</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function esItem(item) {
        return item.name == Device.modelName;
    }

    function goToThisDevice(){

        var resto = restaurants.find(esItem)

        if (resto){
            navigation.navigate("Product", {
                    resto})

        }

        setTestingText(Device.modelName)       
    }

    function renderDeviceList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Product", {
                    item
                })
            }
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.price}</Text>
                    </View>
                </View>

                {/* Device Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        if (loading) {    
            return (<View></View>);  
        }

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderDeviceList()}


            {loading ? 
                <>
                    <CountdownCircleTimer
                        isPlaying
                        duration={1}
                        onComplete={() => {
                          onPressReloadCatalog()
                          return [true, 1000] // repeat animation in 1.5 seconds
                        }}
                        colors={[
                          ['#004777', 0.4],
                          ['#F7B801', 0.4],
                          ['#A30000', 0.2],
                        ]}
                      >
                        {({ remainingTime, animatedColor }) => (
                          <Animated.Text style={{ color: animatedColor }}>
                            
                          </Animated.Text>
                        )}
                      </CountdownCircleTimer>
                      <Button
                          onPress={onPressReloadCatalog}
                          title="Simulando llegada datos API"
                          color="#841584"
                          accessibilityLabel="Reiniciar Catálogo"
                        />
                </>

            : <Button
              onPress={onPressReloadCatalog}
              title="Reiniciar Catálogo"
              color="#841584"
              accessibilityLabel="Reiniciar Catálogo"
            /> }

            

        </SafeAreaView>
    )
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
        backgroundColor: COLORS.lightGray4
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


export default Catalog;