import { useEffect , useRef } from "react";
import robot from '../assets/robot.png'
import user from '../assets/robot.png'
import "./ChatMessages.css"



      //function that set the chatMessage data as props  
      //this function is being used by the chatMessages

        function ChatMessage(props){            //destructuring function ChatMessage({ message, sender })
                                                //probs == variable similar
            const { message } = props;
            const sender = props.sender;        // alternative advancd
                                                 // const { message,sender } = props;

            return (
                <div className={sender === 'user' ? "user" : "robot"}>
                    {sender === 'robot' && (
                        <img src={robot} width="50" />)
                    }
                    <div className="chatmessage">
                        {message} 
                    </div>
                    {sender === 'user' && (
                        <img src={user} width="50" />
                    )}
                </div>
            )
        }





        //lifiting the stateUP 
        //move the chatMessage, setChatMessage to App form chatmessages






        export function ChatMessages({ chatMessages }){
            const chatMessagesRef = useRef(null);


            useEffect(() => {} , [chatMessages])
                const containerElem = chatMessagesRef.current
                if(containerElem){
                    containerElem.scrollTop = containerElem.scrollHeight;
                }
            return (
            <div className="chatmessagecomp"
            ref={chatMessagesRef}>
            { chatMessages.map((chatMessage)=>{
                    return(
                            <ChatMessage 
                                message ={chatMessage.message}
                                sender = {chatMessage.sender}
                                key = {chatMessage.id}
                            />
                    );
            })}
        </div>
    )}

