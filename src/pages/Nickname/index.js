import React, { useState } from 'react'
import { ActivityIndicator, Keyboard } from 'react-native'
import {
    Container,
    Adjust,
    Header,
    Title,
    Form,
    InputBox,
    Input,
    Button,
    ButtonText
} from './styles'
import Icons from 'react-native-vector-icons/MaterialIcons'

import { getUserInfo, getChampion, getChampionData, getRank } from '../../services/api'

export default props => {

    const [nickname, setNickname] = useState('')
    const [error, setError] = useState(false)
    const [focus, setFocus] = useState(false)
    const [loading, setLoad] = useState(false)

    async function getUserInformation() {

        if (!nickname) return
        if (error) setError(false)
        Keyboard.dismiss()
        setLoad(true)
        try {
            const response_summoners = await getUserInfo(nickname)
            const response_champion = await getChampion(response_summoners.data.accountId)
            const infoChampion = await getChampionData(response_champion.data.matches[0].champion)
            const infoRank = await getRank(response_summoners.data.id)

            props.setUserInfo({
                nickname: response_summoners.data.name,
                banner: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${infoChampion.image.full.replace('.png', '')}_0.jpg`,
                photoUser: `http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/${response_summoners.data.profileIconId}.png`,
                level: response_summoners.data.summonerLevel,
                rank1: infoRank.data[0] || {},
                rank2: infoRank.data[1] || {}
            })

        } catch(err) {
            setError(true)
            setLoad(false)
        }
        
    }

    return (
        <Container>
            <Adjust>
                <Header>
                    <Title>O RengarApp</Title>
                </Header>
                <Form>
                    <InputBox>
                        <Icons name="label" size={30} color={error ? '#e82027' : '#fff'} />
                        <Input
                            value={nickname}
                            onChangeText={setNickname}
                            error={error}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            focused={focus}
                        />
                    </InputBox>
                    {
                        loading ? (
                            <Button state={nickname} onPress={getUserInformation}>
                                <ActivityIndicator
                                    color="#fff"
                                    size="small"
                                    style={{
                                        padding: 10
                                    }}
                                />
                            </Button>
                        ) : (
                                <Button disabled={!nickname} state={nickname} onPress={getUserInformation}>
                                    <Icons name="check" size={30} color={nickname ? '#fff' : '#b0a5a5'} />
                                    <ButtonText state={nickname} >Pronto</ButtonText>
                                </Button>
                            )
                    }
                </Form>
            </Adjust>
        </Container>
    )

}