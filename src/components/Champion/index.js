import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons'

import { ButtonContainer, Champion, ChampionName } from './styles';

export default props => {

    return (
        <ButtonContainer onPress={() => {alert('Em breve...')}}>
            <Champion
                source={{ uri: props.photo }}
            >
                <ChampionName>{props.name}</ChampionName>
            </Champion>
        </ButtonContainer>
    )
}