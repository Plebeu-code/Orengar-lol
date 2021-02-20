import React from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons'

import {
    Container, RankContainer, Rank
} from './styles'

export default props => {

    return (
        <Container>
            <RankContainer>
                <Rank 
                    tier={props.userInfo.rank1.tier}
                    title={`${props.userInfo.rank1.tier} - ${props.userInfo.rank1.rank}`}
                    pdl={props.userInfo.rank1.leaguePoints}
                    v={props.userInfo.rank1.wins}
                    d={props.userInfo.rank1.losses}
                    winrate={(
                        (props.userInfo.rank1.wins / (props.userInfo.rank1.wins + props.userInfo.rank1.losses) * 100).toFixed(0)
                    )}
                    progress={(
                        ((props.userInfo.rank1.wins / (props.userInfo.rank1.wins + props.userInfo.rank1.losses) * 100).toFixed(0)) / 100
                    )}
                />
                <Rank 
                    tier={props.userInfo.rank2.tier}
                    title={`${props.userInfo.rank2.tier} - ${props.userInfo.rank2.rank}`}
                    pdl={props.userInfo.rank2.leaguePoints}
                    v={props.userInfo.rank2.wins}
                    d={props.userInfo.rank2.losses}
                    winrate={(
                        (props.userInfo.rank2.wins / (props.userInfo.rank2.wins + props.userInfo.rank2.losses) * 100).toFixed(0)
                    )}
                    progress={(
                        ((props.userInfo.rank1.wins / (props.userInfo.rank1.wins + props.userInfo.rank1.losses) * 100).toFixed(0)) / 100
                    )}
                />
            </RankContainer>
        </Container>
    )
}