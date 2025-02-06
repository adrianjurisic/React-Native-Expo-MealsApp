import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from '../data/dummy-data';


function FavoritesScreen(){
    const items = useContext(FavoritesContext);
    const meals = MEALS.filter(meal => items.ids.includes(meal.id));

    return(
        meals.length === 0 ? 
            <View style={styles.noMeals}>
                <Text style={styles.text}>No Favorites!</Text>
            </View> 
        :
        <View style={styles.screen}>
            <MealsList items={meals}/>
        </View>
        
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#3f2f25',
    },
    noMeals: {
        flex: 1,
        backgroundColor: '#3f2f25',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
});