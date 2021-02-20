import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

import Header from '../../components/Header'
import Details from './Details'
import History from './History'
import Champions from './Champions'

export default props => {

    const DetailsComponent = () => {
        return (
            <Details userInfo={props.userInfo}/>
        )
    }

    return (
        <>
            <Header
                background={{uri: props.userInfo.banner}}
                photo={{ uri: props.userInfo.photoUser }}
                level={props.userInfo.level}
                nickname={props.userInfo.nickname}
                clearInfo={props.clearInfo}
            />
            <NavigationContainer theme={DarkTheme}>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: '#b99855',
                        inactiveTintColor: '#302f2f',
                        indicatorStyle: {
                            backgroundColor: '#b99855'
                        }
                    }}
                >
                    <Tab.Screen 
                        name="Details" 
                        component={DetailsComponent}
                        options={{
                            title: 'Geral'
                        }}
                    />
                    <Tab.Screen 
                        name="Champions" 
                        component={Champions} 
                        options={{
                            title: 'Campeões'
                        }}
                    />
                    <Tab.Screen 
                        name="Test2" 
                        component={History} 
                        options={{
                            title: 'Estatisticas'
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )

}