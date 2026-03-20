import { Chatbot } from "supersimpledev";
import { useState } from "react";
import './Chatinput.css'



export function ChatInput({ chatMessages , setChatMessage}){
            const [inputText , setInputText] = useState('')
            function saveInputText(event){
                setInputText(event.target.value);
            }

            function sendMessage(){
                const newChatMessages=[
                    ...chatMessages,   // spread operator to coppy an array
                    {
                        message: inputText,
                        sender: 'user',
                        id: crypto.randomUUID()  //generate random id(java script code)
                    }
                ]
                setChatMessage(newChatMessages);

                const response = Chatbot.getResponse(inputText);

                setChatMessage([
                    ...newChatMessages,
                    {
                        message: response,
                        sender: 'robot',
                        id: crypto.randomUUID()
                    }
                ])

                setInputText('');
            }

            return (  //fragment <> </> does not insert div full work like a div

                <div className="chat">   
                    <input 
                        placeholder="Send a message to Chatbot" 
                        size="30"
                        onChange={saveInputText}
                        value={inputText}   // this make the text box empty  //controlled input 
                        className = "chatinput"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
                    />
                    <button
                        onClick={sendMessage}    
                        className="sendbutton"
                    >Send</button>
                </div>
            );
        }


