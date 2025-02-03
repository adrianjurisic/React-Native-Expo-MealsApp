import { FlatList, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    function renderMealItem(itemData){
        return <MealItem title={itemData.item.title}
                         imageUrl={itemData.item.imageUrl}
                         duration={itemData.item.duration}
                         complexity={itemData.item.complexity}
                         affordability={itemData.item.affordability}
                         id={itemData.item.id}
        />
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});