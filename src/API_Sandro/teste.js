const bodyParser = require('body-parser')
const axios = require('axios')
const userKey = 'api_key=RGAPI-05993ae8-e6bf-4287-997a-5334a973570b'
const AccountId = encodeURI('Fq28xabAw3yNId8n_gDCryrQ0SVT7QSd8y6o3C-XdLEynUE')

//Detalhes superficial dos jogos 
axios.get(`https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/${AccountId}?endIndex=6&${userKey}`)
    .then(function (response) {
        var i
        // Profile
        for (i = 0; i < 2; i++) {
            console.log(`Partida ${i}:`)
            console.log('Plataforma:', response.data.matches[`${i}`].platformId)
            console.log('GameID:', response.data.matches[`${i}`].gameId)
            var gameriD = response.data.matches[0].gameId
            console.log('champion:', response.data.matches[`${i}`].champion)
            console.log('lane:', response.data.matches[`${i}`].lane)
    
            console.log('           ')
        }

        axios.get(`https://br1.api.riotgames.com/lol/match/v4/matches/${gameriD}?${userKey}`)
        .then(function (response) {
            console.log('----------')
            console.log('Tipo de Gamer:', response.data.gameMode)
            console.log('Tipo de Gamer:', response.data.gameId)

            console.log(' ') 
            console.log('----------')
            console.log(' ')

            console.log('Primeiro Time')
            console.log('TeamID', response.data.teams[0].teamId)
            console.log('Resultado win:', response.data.teams[0].win)
            console.log('Bans do time:', response.data.teams[0].bans)
    
            
            console.log(' ')
            //dados detalhados dos participantes
            console.log('ParticipanteID', response.data.participants[0].participantId)
            
            console.log(' ')
            //spell
            console.log('spellID 1:', response.data.participants[0].spell1Id)
            console.log('spellID 2:', response.data.participants[0].spell2Id)
            
            console.log(' ')
            //itens
            console.log('SLOOT 0:', response.data.participants[0].stats.item0)
            console.log('SLOOT 1:', response.data.participants[0].stats.item1)
            console.log('SLOOT 2:', response.data.participants[0].stats.item2)
            console.log('SLOOT 3:', response.data.participants[0].stats.item3)
            console.log('SLOOT 4:', response.data.participants[0].stats.item4)
            console.log('SLOOT 5:', response.data.participants[0].stats.item5)
            console.log('SLOOT 6:', response.data.participants[0].stats.item6)

            console.log(' ')
            //KDA
            console.log('Kills:', response.data.participants[0].stats.kills)
            console.log('Mortes:', response.data.participants[0].stats.deaths)
            console.log('Assistencia:', response.data.participants[0].stats.assists)
            console.log('ChampLevel:', response.data.participants[0].stats.champLevel)

            console.log(' ')
            console.log('----------')
            console.log(' ')
            
            //segundo time
            // console.log('Segundo Time')
            // console.log('TeamID', response.data.teams[1].teamId)
            // console.log('Resultado win:', response.data.teams[1].win)
            // console.log('Bans do time:', response.data.teams[1].bans)
        })

        //TODOS OS CHAMPS
        // axios.get('http://ddragon.leagueoflegends.com/cdn/10.14.1/data/pt_BR/champion.json')
        // // .then(function (response) {
        // //     // Profile
            
        // //     // console.log(response.data.data)

        // //     const getThisKey = 523 // KEY QUE QUER PEGAR

        // //     // GERANDO UMA LISTA EM VEZ DE NOME DO CAMPEÃO
        // //     const championsList = Object.values(response.data.data)
        // //     // FILTRA E RETORNA SE A KEY FOR IGUAL
        // //     const champion = championsList.filter(
        // //         value => value.key === getThisKey.toString() // POEM TO STRING SE FOR UM NUMBER
        // //     )
        // //     // MOSTRA O CAMPEÃO
        // //     console.log(champion)

        // })
        .catch(function (error) {
            // handle error
            console.warn('ERRO API CHAMP')
            console.log(error.response.status)
        })

    })
    .catch(function (error) {
        console.log('erro api geral')
        console.log(error.response.status)
    })




    // "leagueId": "107ca4f4-c436-42d1-bd3f-3aa600eb5bb0",
    // "queueType": "RANKED_SOLO_5x5",
    // "tier": "GOLD",
    // "rank": "III",
    // "summonerId": "OJNJjo4zrT1Sru2T3Bkp1ttmK2AbeD_Wh9P6tIKunuk7kZM",

    //http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/3796.png
    //Rankeada
    // https://br1.api.riotgames.com//lol/league/v4/entries/by-summoner/{encryptedSummonerId} //summonerId EX: OJNJjo4zrT1Sru2T3Bkp1ttmK2AbeD_Wh9P6tIKunuk7kZM"

            //JOGADORES DA PARTIDA
        // axios.get(`https://br1.api.riotgames.com/lol/match/v4/matches/2003927787?${userKey}`)
        // .then(function (response) {
        //     for (i = 0; i < 10; i++) {
        //         console.log(response.data.participantIdentities[`${i}`].participantId)
        //         console.log(response.data.participantIdentities[`${i}`].player.summonerName)
        //         console.log(response.data.participantIdentities[`${i}`].player.profileIcon)

        //         console.log(' ')
        //         console.log('-----------')
        //     }

        // })
        // .catch(function (error) {
        //     // handle error
        //     console.warn(error)
        // })














                            //ITEM
        // axios.get('http://ddragon.leagueoflegends.com/cdn/10.14.1/data/pt_BR/item.json')
        // .then(function (response) {
        //     console.log(response.data.data)

        // })
        // .catch(function (error) {
        //     // handle error
        //     console.warn(error)
        // })