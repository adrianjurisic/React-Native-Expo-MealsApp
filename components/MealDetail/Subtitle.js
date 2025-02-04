import { Text, View ,StyleSheet } from "react-native";

function Subtitle({subtitle}){
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginBottom: 10,
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12,
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});