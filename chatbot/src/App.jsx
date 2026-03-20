import { useState } from 'react'
import { ChatInput } from './components/Chatinput'
import { ChatMessages } from './components/ChatMessages';
import './App.css'


    //APP function

        function App(){
            //react useState return array
            const [chatMessages , setChatMessage]=useState(()=>{
                return(
            [])});
             //array destructuring 
            //const chatMessages = array[0];  //first value of useState is an array
            //const setChatMessage = array[1];  //second value of useState is a function -->updater fundtion

            //react state end 


             // next step
        //map create a new array and perform the operation or function given in the array    // array.map((value , index , array)=>{operation/function})
            return(
            <div className="app">  
                <ChatMessages
                chatMessages ={chatMessages}
                />
                <ChatInput 
                    chatMessages ={chatMessages}
                    setChatMessage = {setChatMessage}
                    />

            </div>
        )
        }


export default App
