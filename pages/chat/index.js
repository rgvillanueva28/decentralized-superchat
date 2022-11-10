import ChatMessage from "../../components/ChatMessage";
import {
  useDisconnect,
  useContract,
  useContractRead,
  useContractWrite,
  useAddress,
} from "@thirdweb-dev/react";
import { contractAddress, abi } from "../../constants";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Chat() {
  const address = useAddress();
  const disconnect = useDisconnect({ reconnectPrevious: false });
  const { contract } = useContract(contractAddress, abi);
  const { data: messages } = useContractRead(contract, "getMessages");
  const {
    mutate: createMessage,
    isLoading,
    error,
  } = useContractWrite(contract, "createMessage");

  const [typedMessage, setTypedMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  async function handleSendMessage() {
    if (typedMessage === "") {
      return;
    }
    try {
      createMessage([typedMessage]);
    } catch (error) {
      console.log(error);
    } finally {
      setTypedMessage("");
    }
  }

  function getLastTwentyMessages() {
    let validMessages = messages?.filter((message) => {
      return message.isDeleted === false;
    });
    setChatMessages(validMessages);
  }

  useEffect(() => {
    contract?.events.addEventListener("Action", (event) => {
      console.log(event);
    });
    getLastTwentyMessages();
  }, []);

  useEffect(() => {
    getLastTwentyMessages();
  }, [messages]);

  return (
    <>
      <Head>
        <title>Superchat Dapp</title>
      </Head>
      <div className="container flex flex-1 mx-auto min-h-screen ">
        <div className="container w-full flex flex-col max-h-screen max-w-6xl mx-auto ">
          <div className="flex flex-col w-full bg-purple-100 h-full overflow-y-auto">
            <div className="flex flex-row justify-between items-center sticky top-0 p-5 bg-purple-500 bg-opacity-50 border-b border-purple-500 backdrop-blur-sm">
              <h1 className="text-3xl font-bold">Public Chat</h1>
              <div className="flex flex-col items-end justify-center">
                <p>{address && address}</p>
                <button
                  className="transition-colors duration-200 bg-purple-500 px-4 py-2 rounded-full text-white text-base shadow-md hover:bg-opacity-80"
                  onClick={disconnect}
                >
                  Disconnect
                </button>
              </div>
            </div>
            <div className="flex flex-col h-full p-5">
              {chatMessages?.map((item, index) => {
                return (
                  <ChatMessage
                    senderAddress={item.sender}
                    isUserMessage={item.sender === address}
                    key={index}
                  >
                    {item.body}
                  </ChatMessage>
                );
              })}
            </div>
          </div>
          <div className="w-full p-5 flex bg-purple-200">
            <textarea
              placeholder="Type your message here"
              className="ring-0 px-4 py-2 flex flex-1 bg-purple-50 overflow-hidden rounded mr-2 resize-none overflow-y-auto"
              rows={2}
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
            />
            <button
              className="transition-colors duration-200 bg-purple-500 px-4 py-2 rounded-full text-white text-base shadow-md hover:bg-opacity-80 m-auto"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
