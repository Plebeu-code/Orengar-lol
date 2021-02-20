import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons'

import { Header, ReturnButton, Profile, ProfileImage, Photo, Level, LevelText, Nickname } from './styles';

export default props => {
    
    return (
        <Header source={props.background}>
            <ReturnButton onPress={() => props.clearInfo()} >
                <Icons name="arrow-back" size={25} color="#fff" />
            </ReturnButton>
            <Profile>
                <ProfileImage>
                    <Photo source={props.photo} />
                    <Level>
                        <LevelText>{props.level}</LevelText>
                    </Level>
                </ProfileImage>
                <Nickname>{props.nickname}</Nickname>
            </Profile>
        </Header>
    )
}