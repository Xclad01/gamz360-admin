
import offerContext from "./offerContext"

const host = "http://192.168.0.203:2828";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQ5Y2NlM2JhNDA4YTJlMjg3ZjJlYzUiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQHNpc3VnYW16LmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHhZZzVMUlNRRWxiNENOZnVocjdncmUyUjNMOUQ5eDhaWmc0c0QxSW9uY1N6ZWFTSHgzMTIuIiwiY3JlYXRlZEF0IjoiMjAyMy0xMS0wN1QwNTozNjozNS42NjBaIiwibW9kaWZpZWRBdCI6IjIwMjMtMTEtMDdUMDU6MzY6MzUuNjYwWiIsImlhdCI6MTY5OTMzNTQxMywiZXhwIjoxNjk5OTQwMjEzfQ.NrLsWSnyD09P3h30rsng_R3bygn3TsKl8nXyD7qom4c";

const OfferState = (props) => {
    
    const dashboardData = async () => {
        try{
            console.log("${host}/admin/dashboard",`${host}/admin/dashboard`)
            const response = await fetch(`${host}/admin/dashboard`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from ::::...", json)
            return await json

        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const latatestUser = async () => {
        try{
            console.log("${host}/admin/latatestUser",`${host}/admin/dashboard/latatestUser`)
            const response = await fetch(`${host}/admin/dashboard/latatestUser`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.RecentUser


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    // ========= User Details =================

    const PlayerList = async () => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/user/UserList`)
            const response = await fetch(`${host}/admin/user/UserList`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.userList


        }catch(e){
            console.log("e :" ,e)
        }
    } 



    const PlayerAdd = async (data) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/user/AddUser`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                },
                body:JSON.stringify(data)
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const PlayerDelete = async (userId) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/user/DeleteUser/`+userId, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    
    const PlayerData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/user/UserData`)
            const response = await fetch(`${host}/admin/user/UserData?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.userInfo


        }catch(e){
            console.log("e :" ,e)
        }
    } 
    // History 
    const GetRouletteHistoryData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/UserData`,userId)
            const response = await fetch(`${host}/admin/userhistory/rouletteHistory?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.rouletteHistoryData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GetCompleteWithdrawalData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/completeWithdrawal`,userId)
            const response = await fetch(`${host}/admin/userhistory/completeWithdrawal?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.completeWithdrawalData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GetCompleteDespositeData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/completeDeposite`,userId)
            const response = await fetch(`${host}/admin/userhistory/completeDeposite?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.completeDepositeData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GetRegisterReferralBonusData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/registerRaferralBonus`,userId)
            const response = await fetch(`${host}/admin/userhistory/registerRaferralBonus?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.registerRaferralBonusData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GetMyReferralData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/myRaferrals`,userId)
            const response = await fetch(`${host}/admin/userhistory/myRaferrals?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.myRaferralsData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    //======================
    // game History 

    const RummyGameHistory = async () => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/games/rummyGameHistory`)
            const response = await fetch(`${host}/admin/games/rummyGameHistory`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.gameHistoryData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const LudoGameHistory = async () => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/games/ludoGameHistory`)
            const response = await fetch(`${host}/admin/games/ludoGameHistory`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.gameHistoryData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GameLogicSet = async (data) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/games/gameLogicSet`)
            const response = await fetch(`${host}/admin/games/gameLogicSet`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':Token
                },
                body:JSON.stringify(data)   
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    

    return (
        <offerContext.Provider value={{dashboardData,latatestUser,PlayerList,PlayerData,
            PlayerAdd,PlayerDelete,RummyGameHistory,LudoGameHistory,GameLogicSet,GetRouletteHistoryData,GetCompleteWithdrawalData,
            GetCompleteDespositeData,GetRegisterReferralBonusData,GetMyReferralData  }}>
            {props.children}
        </offerContext.Provider>)

}

export default OfferState;