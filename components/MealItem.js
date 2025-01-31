import { Image, Pressable, Text, View, StyleSheet, Platform } from "react-native";

function MealItem({title, imageUrl, duration, complexity, affordability}){
    return (
        <View style={styles.all}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => pressed ? styles.buttonPressed : null}
            >
                <View>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoItem}>{duration} min</Text>
                        <Text style={styles.infoItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.infoItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    all: {
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 8,
        margin: 16,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerAll: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
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
    },
    buttonPressed: {
        opacity: 0.5,
    }
});