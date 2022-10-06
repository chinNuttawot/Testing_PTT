import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    text: color => ({
        fontSize: 18,
        color: color,
        marginTop: 10,
        marginLeft: 10,
    }),
    textError: color => ({
        fontSize: 20,
        color: color,
        padding: 20,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    }),
    BackgroundColor: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    ViewMainShow: {
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'column'
    },
    styleViewAuth: [
        {
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.5)'
        },
        {
            width: '100%', height: '100%', justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        }],
    input: {
        height: '8%',
        width: '70%',
        borderWidth: 2,
        borderColor: '#192f6a',
        borderRadius: 10,
        marginBottom: 30,
        color: "#fff",
        paddingLeft: 10
    },
    mainHomeAdd: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainBtSave: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    stylesText: {
        color: '#fff',
        fontSize: 16
    },
    stylesBtSave: (status) => ({
        width: '30%',
        backgroundColor: status ? '#006400' : '#A9A9A9',
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        borderRadius: 20
    }),
    stylesImage: {
        marginTop: 10,
        width: 200,
        height: 200
    },
    inputForfilter: fontSize => ({
        width: wp(90),
        height: hp(5),
        fontSize: fontSize,
        borderBottomWidth: 1,
        borderColor: 'rgba(116, 116, 116, 0.3)',
    }),
    KeyboardAvoidingView: {
        justifyContent: "center",
        alignItems: "center",
        width: wp(50),
        height: hp(5),
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    }
})