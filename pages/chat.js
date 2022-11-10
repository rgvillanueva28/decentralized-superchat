import ChatMessage from "../components/ChatMessage";

export default function chat() {
  return (
    <div className="container flex flex-1 mx-auto min-h-screen ">
      <div className="container flex flex-col w-full bg-purple-100 max-w-6xl mx-auto rounded max-h-screen overflow-y-scroll">
        <h1 className="sticky top-0 text-3xl font-bold p-5 bg-purple-500 bg-opacity-50 border-b border-purple-500 backdrop-blur-sm">
          Public Chat
        </h1>
        <div className="p-5">
          {Array(50)
            .fill(0)
            .map((item, index) => {
              return (
                <ChatMessage isUserMessage={index % 2 == 0} key={index}>
                  Chat here Chat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat hereChat here {index % 2 == 0 ? "true" : "false"}
                </ChatMessage>
              );
            })}
        </div>
      </div>
    </div>
  );
}
