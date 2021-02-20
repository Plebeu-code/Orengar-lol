import styled from 'styled-components/native';
import { ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable'

const IgmBackground = Animatable.createAnimatableComponent(ImageBackground)

export const Header = styled(IgmBackground).attrs({
    animation: 'bounceInDown',
    duration: 1000,
    useNativeDriver: true
})`
    height: 250px;
`
export const ReturnButton = styled.TouchableOpacity`
    width: 50px;
    padding: 10px;
    justify-content: center;
    align-items: center;

`
export const Profile = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const ProfileImage = styled.View`
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`
export const Photo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-width: 3px;
    border-color: #b99855;
`
export const Level = styled.View`
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 45px;
    height: 45px;
    background-color: #111;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-color: #b99855;
`
export const LevelText = styled.Text`
    color: #b99855;
    font-weight: bold;
`
export const Nickname = styled.Text`
    color: #b99855;
    font-family: 'OptimusPrincepsSemiBold';
    font-size: 30px;
    padding: 5px;
`