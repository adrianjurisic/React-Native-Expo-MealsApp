import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailsScreen({route, navigation}){
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={headerButtonPressHandler} color='white' icon='star'/>
            }
        });
    }, [navigation, headerButtonPressHandler]);

    function headerButtonPressHandler(){
        console.log('Pressed!')
    }

    return(
        <ScrollView style={styles.main}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View style={styles.info}>
                <Text style={styles.infoItem}>{selectedMeal.duration} min</Text>
                <Text style={styles.infoItem}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={styles.infoItem}>{selectedMeal.affordability.toUpperCase()}</Text>                
            </View>
            <View style={styles.centered}>
                <View style={styles.listContainer}>
                    <Subtitle subtitle="Ingredients"/>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle subtitle="Steps"/>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    main:{
        marginBottom: 32,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    infoItem: {
       marginHorizontal: 4,
       fontSize: 12, 
       color: 'white',
    },
    image: {
        width: '100%',
        height: 350,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    listContainer: {
        width: '80%',
    },
    centered: {
        alignItems: 'center',
    }
});