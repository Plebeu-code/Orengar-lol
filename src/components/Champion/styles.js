import styled from 'styled-components/native';
import { ImageBackground, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'

const IgmBackground = Animatable.createAnimatableComponent(ImageBackground)

export const ButtonContainer = styled.TouchableOpacity`
    width: ${Dimensions.get('window').width / 2.01 - 10}px;
    height: ${Dimensions.get('screen').height / 1.98 - 10}px;
    margin: 10px 0 10px 8px;
    border-radius: 10px;
    overflow: hidden;
`

export const Champion = styled(IgmBackground).attrs({
    animation: 'flipInY',
    duration: 1000,
    // iterationCount: Infinity,
    useNativeDriver: true
})`
    flex: 1;
    justify-content: flex-end;
`
export const ChampionName = styled.Text`
    color: #fff;
    font-size: 20px;
    margin: 10px;
    font-weight: bold;
`