import React, { Component, Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import CustomHeader from '../components/CustomHeader';
import _, { divide } from 'lodash';
import { EventRegister } from 'react-native-event-listeners'
import {
    ScrollView,
    ImageBackground,
    View,
    Image,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    TextInput,
    FlatList
} from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { styles } from '../screens/HomeStyle'
library.add(fas, far);
class Home extends Component {
    constructor(props) {
        super(props);
        console.log('[HomeScreen]');
        this.state = {
            loader_Visible: false,
            datakeyword: ''
        };

    }

    componentDidMount() {
        this.listener = EventRegister.addEventListener('Home', () => {
            console.log("Home");
            this.setState({
                loader_Visible: false,
                datakeyword: ''
            })
        })
    }
    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }
    goto = () => {
        this.props.navigation.navigate("Addphoto");
    }
    onChangeText = async (data, keyword) => {
        if (keyword === '') {
            this.setState({ datakeyword: "" })
        } else {
            const data_keyword = [];
            _.map(data, (item, i) => {
                let re_check = new RegExp(`${keyword}`);
                let result_check = re_check.test(`${item.name}`);
                if (result_check === true) {
                    data_keyword.push(item);
                }
            });
            this.setState({ datakeyword: data_keyword })
        }
    }
    renderItem = ({ item }) => (
        <View style={styles.ViewMainShow}>
            <TouchableOpacity style={{ marginTop: 20 }}>
                <Text>{`ชื่อรูป :  ${item.name}`}</Text>
                <Image source={{ uri: item.path }} style={styles.stylesImage} />
            </TouchableOpacity>
        </View>
    );

    render() {
        const Colors_main = this.props.colors_blue
        return (
            <Fragment>
                <CustomHeader
                    background_Color={this.props.asset.colors.bgClassRoom}
                    goto={() => this.goto()}
                    font_color={this.props.asset.colors.White}
                    font_size={this.props.font_size_XL}
                    mainColor={Colors_main}
                    title={""}
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
                    <View style={styles.BackgroundColor}>
                        <View style={{ marginTop: 10, alignItems: 'center' }}>
                            <KeyboardAvoidingView
                                style={styles.KeyboardAvoidingView}
                                behavior={Platform.OS === "ios" ? "height" : null}
                            >
                                <TextInput
                                    style={styles.inputForfilter}
                                    placeholder={">>> ใส่คำที่ต้องการค้นหา <<<"}
                                    placeholderTextColor='#000'
                                    onChangeText={val => this.onChangeText(this.props.image, val)}
                                />
                            </KeyboardAvoidingView>
                        </View>
                        <FlatList
                            data={this.state.datakeyword ? this.state.datakeyword : this.props.image}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </ImageBackground>
            </Fragment>
        );
    }
}
const mapStateToProps = state => state.GlobalReducer;
export default connect(mapStateToProps)(Home);