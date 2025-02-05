import { StyleSheet, Text, View } from "react-native";


function FavoritesScreen(){
    return(
        <View style={styles.screen}>
            <Text>Favorites will be here...</Text>
        </View>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#3f2f25',
    }
});