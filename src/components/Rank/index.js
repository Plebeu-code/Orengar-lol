import React, {useState} from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons'

import { 
    RankContainer,
    RankInformation,
    Progress,
    RankImage,
    RankInfo,
    RankTitle,
    RankInfoText,
    LolStyle
} from './styles'
import { color } from 'react-native-reanimated'

export default props => {
    
    let barColor = '#b99855'
    let colorIndex = 0

    function renderRank(rank) {
        switch (rank) { 
            case 'BRONZE':
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/BRONZE.png')}
                    />
                )
            case 'CHALLENGER':
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/CHALLENGER.png')}
                    />
                )
            case 'DIAMOND':
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/DIAMOND.png')}
                    />
                )
            case 'GOLD':
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/GOLD.png')}
                    />
                )
            case 'GRANDMASTER':
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/GRANDMASTER.png')}
                    />
                )
            case 'IRON':
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/IRON.png')}
                    />
                )
            case 'MASTER':
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/MASTER.png')}
                    />
                )
            case 'PLATINUM':
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/PLATINUM.png')}
                    />
                )
            case 'SILVER':
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/SILVER.png')}
                    />
                )
            default:
                return (
                    <RankImage 
                        source={require('../../../assets/ranked/DEFAULT.png')}
                    />
                ) 
        }
    }

    return (
        props.tier ? (
            <RankContainer>
                <RankInformation>
                    {renderRank(props.tier)}
                    <RankInfo>
                        <RankTitle>{props.title}</RankTitle>
                        <RankInfoText><LolStyle>{props.pdl}</LolStyle> PDL</RankInfoText>
                        <RankInfoText><LolStyle>{props.v}</LolStyle>V <LolStyle>{props.d}</LolStyle>D <LolStyle style={{color: '#eb2f2f'}}>({props.winrate}%)</LolStyle></RankInfoText>
                        <Progress 
                            styleAttr="Horizontal"
                            progress={props.progress}
                            indeterminate={false}
                            color="#b99855"
                        />
                    </RankInfo>
                </RankInformation>
            </RankContainer>
        ) : (
            <RankContainer>
                <RankInformation>
                    {renderRank(props.tier)}
                    <RankInfo style={{ justifyContent: 'center' }}>
                        <RankInfoText><LolStyle style={{fontSize: 30}}>Unranked</LolStyle></RankInfoText>
                    </RankInfo>
                </RankInformation>
            </RankContainer>
        )
    )
}
