import Constants from 'expo-constants';
const current_version = Constants.manifest.version;

const initial_state = {
  asset: {
    images: {
      splash: require('../../assets/splash.png'),
    },
    colors: {
      White: "#FFFFFF",
      bgClassRoom: '#1f3a93',
      grayLight: '#999999',
      evaluation_sdq: '#cf000f',
      black: '#000000',
      DarkOrange: "#FF8C00",
      Darkblue: "#4169E1",
    },
  },
  image: [],
  colors_blue: ["#87CEFA", "#4169E1", "#000080"],
  current_version,
  font_size_SS: 11,
  font_size_S: 13,
  font_size_S_M: 12,
  font_size_M: 14,
  font_size_L: 16,
  font_size_L2: 20,
  font_size_L3: 22,
  font_size_L4: 24,
  font_size_XL: 25,
  font_size_XXL: 30,
};
const ACTION_TYPE = {
  SET_IS_LOADING: 'SET_IS_DATAS',
  UPDATE_REDUX: 'UPDATE_REDUX',
};
export default (state = initial_state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_IS_DATAS:
      return {
        ...state,
        image: action.Datas
      }
    default:
      return state
  }
};