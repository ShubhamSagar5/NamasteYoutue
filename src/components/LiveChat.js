import React, { useEffect, useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilis/ChatSlice";
import { generateRandomMessage, generateRandomName } from "../utilis/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMess = useSelector((store) => store.chat.message);

  const [liveMess, setLiveMess] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(5) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className=" w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {ChatMess?.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex justify-evenly rounded-lg"
        onSubmit={(e) =>{
            e.preventDefault()
            console.log("live mess " + liveMess)

            dispatch(addMessage({
                name:"Shubham Sagar",
                message:liveMess
            }))

            setLiveMess("")
        }
        }>
        <input
          type="text"
          className="w-[325px] px-2"
          value={liveMess}
          onChange={(e) => {
            setLiveMess(e.target.value);
          }}
        />
        <button className="px-2  bg-green-100 rounded-lg">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
