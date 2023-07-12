import "./App.css";
import { Container, Button, Col, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";

const buttons = [
  {
    id: "Heater 1",
    text: "Q",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "Heater 2",
    text: "W",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "Heater 3",
    text: "E",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "Heater 4",
    text: "A",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: "Clap",
    text: "S",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: "Open-HH",
    text: "D",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "Kick-n'-Hat",
    text: "Z",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "Kick",
    text: "X",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "Closed-HH",
    text: "C",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true);
  }, []);

  function handleClick(event) {
    setData(event.target.id);
    let tempButton = buttons.find((element) => element.id === event.target.id);
    let audio = document.getElementById(tempButton.text);

    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
  }

  function handleKeyDown(event) {
    const keyList = ["A", "Z", "E", "Q", "S", "D", "W", "X", "C"];
    if (keyList.indexOf(event.key.toUpperCase()) >= 0) {
      let tempKey = buttons.find(
        (element) => element.text === event.key.toUpperCase()
      );
      document.getElementById(tempKey.id).click();
    }
  }

  return (
    
      <div className="App-header">
        <Container id="drum-machine" className="size">
          
        <Stack direction="horizontal" gap={2} className="mx-auto">
            
            {buttons.slice(0, 3).map((button, key) => (
              <Col className="d-grid mb-2"><Button variant="secondary"
                key={key}
                className="drum-pad"
                id={button.id}
                onClick={handleClick}
              >
                {button.text}
                <audio
                  src={button.audioSrc}
                  className="clip"
                  id={button.text}
                ></audio>
              </Button></Col>
            ))}
          </Stack>
          <Stack direction="horizontal" gap={2} className="mx-auto">
            
            {buttons.slice(3, 6).map((button, key) => (
              <Col className="d-grid mb-2"><Button variant="secondary"
                key={key}
                className="drum-pad"
                id={button.id}
                onClick={handleClick}
              >
                {button.text}
                <audio
                  src={button.audioSrc}
                  className="clip"
                  id={button.text}
                ></audio>
              </Button></Col>
            ))}
          </Stack>
          <Stack direction="horizontal" gap={2} className="mx-auto">
            
            {buttons.slice(6, 9).map((button, key) => (
              <Col className="d-grid"><Button variant="secondary"
                key={key}
                className="drum-pad"
                id={button.id}
                onClick={handleClick}
              >
                {button.text}
                <audio
                  src={button.audioSrc}
                  className="clip"
                  id={button.text}
                ></audio>
              </Button></Col>
            ))}
          </Stack>
        </Container>
        <Container className="text-center empty"><div id="display">{data}</div></Container>
      </div>
    
  );
}

export default App;
