import React,{useState, useEffect} from 'react'
import { Header } from '../components'
import ConfigurePage from '../components/ConfigureTimer';
import StartTimer from '../components/StartTimer'

const Pomodoro = () => {
const [isConfigure, setIsConfigure] = useState(false);
  const [pomodoro, setPomodoro] = useState(0);
  const [pomoBreak, setPomoBreak] = useState(0);
  const updateConfigure = (bool) => {
    setIsConfigure(bool);
  };
  const updatePomodoro = (pomo_doro, pomo_Break) => {
    setPomodoro(pomo_doro);
    setPomoBreak(pomo_Break);
  };

  useEffect(() => {
    setIsConfigure(isConfigure);
  }, [isConfigure]);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="App" title="Pomodoro"/>
        <StartTimer  updateConfigure={updateConfigure}
        pomodoro={pomodoro}
        pomoBreak={pomoBreak}/>
        {isConfigure && (
        <ConfigurePage
          updateConfigure={updateConfigure}
          updatePomodoro={updatePomodoro}
        />
      )}
      </div> 
    )
}

export default Pomodoro

