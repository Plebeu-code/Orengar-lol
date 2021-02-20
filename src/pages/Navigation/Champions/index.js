import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { FlatList as ChampionsList } from 'react-native'

import {
    Container,
} from './styles'
import Champion from '../../../components/Champion'
import getChampions from '../../../services/champions.json'

export default props => {

    const [champions, setChampions] = useState(getChampions)

    useEffect(() => {
        console.log('Loaded - use Effects')
        console.log(champions)
    }, [])

    return (
        <Container>
            <ChampionsList 
                numColumns={2}
                data={champions}
                keyExtractor={(_, index) => String(index)}
                renderItem={({item}) => (
                    <Champion {...item} />
                )}
            />
        </Container>
    )
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    }
})