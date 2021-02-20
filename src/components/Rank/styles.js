import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'

export const RankContainer = styled(Animatable.View).attrs({
    animation: 'bounceInRight',
    useNativeDriver: true
})`
    justify-content: center;
    align-content: center;
    margin: 10px;
    padding: 10px;
    flex: 1;
    background-color: #111;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left-width: 2px;
    border-left-color: #b99855;
`
export const Progress = styled.ProgressBarAndroid`
    width: 100%;
    height: 20px;
`
export const RankInformation = styled.View`
    align-content: center;
    flex-direction: row;
`
export const RankImage = styled.Image`
    width: ${Dimensions.get('window').width / 3.5}px;
    height: ${Dimensions.get('window').width / 3.5}px;
`
export const RankInfo = styled.View`
    padding: 10px;
    flex: 1;
`
export const RankTitle = styled.Text`
    font-size: 20px;
    color: #b99855;
    font-family: 'OptimusPrincepsSemiBold';
`
export const RankInfoText = styled.Text`
    color: #b99855;
    font-size: 19px;
`
export const LolStyle = styled.Text`
    color: #b99855;
    font-size: 19px;
    font-family: 'OptimusPrincepsSemiBold';
`