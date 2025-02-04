import { Text, View ,StyleSheet } from "react-native";

function List({data}){
    return(
        data.map(one => (
            <View style={styles.listItem} key={one}>
                <Text style={styles.text}>{one}</Text>
            </View>
        ))
    );
}

export default List;

const styles = StyleSheet.create({
    text:{
        color: '#351401',
        marginLeft: 10,
        margin: 1.15,
    },
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: '#e2b497',
    }
});