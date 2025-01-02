import React, { useState, useEffect } from "react";
import { DeskThing, SocketData } from "deskthing-client";

const App: React.FC = () => {
  // useEffect(() => {
  //     const onAppData = async (data: SocketData) => {
  //         console.log('Received data from the server!')
  //         console.log(data.payload)
  //     }

  //     const removeListener = DeskThing.on('data', onAppData)

  //     return () => {
  //         removeListener()
  //     }
  // })

  const colors = ["#ff0000", "#00ff00", "#0000ff", "white", "black", "cyan", "magenta", "yellow"];

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: colors[colorIndex] }} className="w-screen h-screen flex justify-center items-center"></div>
  );
};

export default App;
