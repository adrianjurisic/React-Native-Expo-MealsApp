import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealDetailsScreen({route}){
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    return(
        <View>
            <Image source={{uri: selectedMeal.imageUrl}}/>
            <Text>{selectedMeal.title}</Text>
            <View style={styles.info}>
                <Text style={styles.infoItem}>{selectedMeal.duration} min</Text>
                <Text style={styles.infoItem}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={styles.infoItem}>{selectedMeal.affordability.toUpperCase()}</Text>                
            </View>
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}
            <Text>Steps</Text>
            {selectedMeal.steps.map(step => (
                <Text key={step}>{step}</Text>
            ))}
        </View>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    infoItem: {
       marginHorizontal: 4,
       fontSize: 12, 
    },

});