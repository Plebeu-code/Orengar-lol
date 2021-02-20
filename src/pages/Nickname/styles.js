import styled from 'styled-components/native'
import * as Animatable from 'react-native-animatable'

export const Container = styled.ImageBackground.attrs({
    source: require('../../../assets/images/backgroun-nickname.jpg')
})`
    flex: 1;
`
export const Adjust = styled.KeyboardAvoidingView.attrs({
    behavior: 'padding',
    enabled: true
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const Header = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
export const Title = styled(Animatable.Text).attrs({
    animation: 'pulse',
    iterationCount: Infinity,
    useNativeDriver: true
})`
    font-family: 'OptimusPrincepsSemiBold';
    font-size: 35px;
    color: #b99855;
`
export const Form = styled(Animatable.View).attrs({
    animation: 'bounceIn',
    duration: 1000,
    useNativeDriver: true
})`
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const InputBox = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Input = styled.TextInput.attrs({
    placeholder: 'Nickname',
    placeholderTextColor: '#fff'
})`
    flex: 1;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.error ? '#e82027' : '#fff'};
    padding: 5px;
    color: #fff;
    background-color: ${props => props.focused ? '#00000030' : 'transparent'};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
export const Button = styled.TouchableOpacity`
    width: 80%;
    border-radius: 10px;
    background-color: ${props => props.state ? '#e82027' : '#f1f1f1'};
    padding: 5px 0;
    margin: 20px 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const ButtonText = styled.Text`
    color: ${props => props.state ? '#fff' : '#b0a5a5'};
    font-size: 20px;
    padding: 10px;
    font-weight: bold;
`