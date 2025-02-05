import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";

function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler}
            />
        );
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
            style= {styles.screen}
        />
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#3f2f25'
    }
});