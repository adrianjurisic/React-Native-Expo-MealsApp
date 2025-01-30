import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color}){
    return(
        <View style={styles.girdItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}} 
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    girdItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 12,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});