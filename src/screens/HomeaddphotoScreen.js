import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CustomHeader from '../components/CustomHeader';
import _ from 'lodash';
import {
    ImageBackground,
    View,
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
import Spinner from "react-native-loading-spinner-overlay";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { styles } from '../screens/HomeStyle'
import * as ImagePicker from 'expo-image-picker';
import API from '../providers/API'
library.add(fas, far);
class Homeaddphoto extends Component {
    constructor(props) {
        super(props);
        console.log('[Homeaddphoto]');
        this.state = {
            loader_Visible: false,
            image: '',
            nameImage: ''
        };

    }

    pickImage = async () => {
        this.setState({ loader_Visible: true }, async () => {
            console.log("pickImage");
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri })
            }
            this.setState({ loader_Visible: false })
        })
    };

    onSave = async () => {
        console.log("onSave");
        if (!this.state.nameImage.length > 0) {
            Alert.alert("แจ้งเตือน", "กรุณาใส่ชื่อรูป")
            return
        }
        if (!this.state.image.length > 0) {
            Alert.alert("แจ้งเตือน", "กรุณาใส่รูป")
            return
        }

        let Data = {
            path: this.state.image,
            name: this.state.nameImage
        }
        // API.post('API-push-image', Data, `Bearer ${this.Token}`)
        // .then((res)=> {

        // })
        // .catch((err)=> {

        // })
        this.props.image.push(Data)
        EventRegister.emit('Home')
        this.props.navigation.goBack()
    }

    render() {
        const Colors_main = this.props.colors_blue
        return (
            <Fragment>
                <CustomHeader
                    background_Color={this.props.asset.colors.bgClassRoom}
                    goBack={() => this.props.navigation.goBack()}
                    font_color={this.props.asset.colors.White}
                    font_size={this.props.font_size_XL}
                    mainColor={Colors_main}
                    title={"เพิ่มรูป"}
                />
                <Spinner
                    visible={this.state.loader_Visible}
                    textContent={"กำลังโหลดข้อมูล..."}
                    textStyle={{ color: Colors_main[2] }}
                    overlayColor='rgba(167, 213, 240, 0.8)'
                    color={Colors_main[2]}
                />
                <ImageBackground
                    style={{ flex: 1 }}
                    source={this.props.asset.images.splash}
                    resizeMode='cover' >
                    <View style={styles.mainHomeAdd}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(nameImage) => this.setState({ nameImage })}
                            value={this.state.nameImage}
                            placeholder="ชื่อรูปภาพ"
                            keyboardType="default"
                        />
                        <Button title="เลือกรูป" onPress={() => this.pickImage()} />
                    </View>
                    <View style={styles.mainBtSave}>
                        <TouchableOpacity style={styles.stylesBtSave(true)} onPress={() => { this.onSave() }}>
                            <Text style={styles.stylesText}>{"Save"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.stylesBtSave(false)} onPress={() => { this.props.navigation.goBack() }}>
                            <Text style={styles.stylesText}>{"Cancel"}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Fragment>
        );
    }
}
const mapStateToProps = state => state.GlobalReducer;
export default connect(mapStateToProps)(Homeaddphoto);