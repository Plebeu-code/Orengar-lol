import React, { useState } from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

import Nickname from '../Nickname'
import App from '../Navigation'


export default () => {
    
    const [userInfo, setUserInfo] = useState(null)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#111'
        }}>
           <StatusBar hidden />
            {
                userInfo ? (
                    <App 
                        userInfo={userInfo}
                        clearInfo={() => setUserInfo(null)}
                    />
                ) : (
                    <Nickname 
                        setUserInfo={setUserInfo}
                    />
                )
            } 
        </SafeAreaView>
    )
}