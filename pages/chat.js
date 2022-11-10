import ChatMessage from "../components/ChatMessage";
import { useDisconnect } from "@thirdweb-dev/react";

export default function Chat() {
  const disconnect = useDisconnect({ reconnectPrevious: false });

  return (
    <div className="container flex flex-1 mx-auto min-h-screen ">
      <div className="container flex flex-col w-full bg-purple-100 max-w-6xl mx-auto rounded max-h-screen overflow-y-scroll">
        <div className="flex flex-row justify-between items-center sticky top-0 p-5 bg-purple-500 bg-opacity-50 border-b border-purple-500 backdrop-blur-sm">
          <h1 className="text-3xl font-bold">Public Chat</h1>
          <div className="flex flex-col items-end justify-center">
            <p>0xc123xckasldasd9782098xc97812398723</p>
            <button
              className="transition-colors duration-200 bg-purple-500 px-4 py-2 rounded-full text-white text-base shadow-md hover:bg-opacity-80"
              onClick={disconnect}
            >
              Disconnect
            </button>
          </div>
        </div>
        <div className="p-5">
          {Array(50)
            .fill(0)
            .map((item, index) => {
              return (
                <ChatMessage isUserMessage={index % 2 == 0} key={index}>
                  Chat here Chat hereChat hereChat hereChat hereChat hereChat
                  hereChat hereChat hereChat hereChat hereChat hereChat hereChat
                  hereChat hereChat hereChat hereChat hereChat hereChat hereChat
                  hereChat hereChat hereChat hereChat hereChat hereChat hereChat
                  hereChat hereChat hereChat hereChat hereChat hereChat hereChat
                  here {index % 2 == 0 ? "true" : "false"}
                </ChatMessage>
              );
            })}
        </div>
      </div>
    </div>
  );
}
