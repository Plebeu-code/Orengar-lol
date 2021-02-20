import axios from 'axios'
const defaultToken = `api_key=${require('./config.json').token}`

export const getUserInfo = name => {
    const nickname = encodeURI(name)
    return axios.get(`${nickname}?${defaultToken}`, {
        baseURL: 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
    })
}

export const getChampion = accountId => {
    return axios.get(`${accountId}?endIndex=6&${defaultToken}`, {
        baseURL: 'https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/'
    })
}

export const getChampionData = async championId => {
    const champions = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.14.1/data/pt_BR/champion.json')
    const championsList = Object.values(champions.data.data)
    const champion = championsList.filter(
        value => value.key === championId.toString()
    )
    return champion[0]
}

export const getRank = id => {
    return axios.get(`${id}?${defaultToken}`, {
        baseURL: 'https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/'
    })
}

