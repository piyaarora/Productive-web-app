import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Header from "./Header";
import { useStateContext } from '../contexts/ContextProvider';


const ConfigurePage = (props) => {
  const { currentColor } = useStateContext();
  const { updateConfigure, updatePomodoro } = props;
  const [pomodoro, setPomodoro] = useState("");
  const [pomoBreak, setPomoBreak] = useState("");
  // onSubmitFunction Function
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (pomodoro === "" || pomoBreak === "") return;
    updateConfigure(false);
    updatePomodoro(pomodoro, pomoBreak);
  };
  const changeConfigure = () => {
    updateConfigure(false);
  };
  return (
    <div className="configure__section bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="configure__section--box  float-right dark:text-gray-200  bg-white dark:bg-[#484B52] w-400" >
        <div className="configure__section--box-upper">
          <Header title="Set Timer"/>
          <p onClick={changeConfigure}>
          <button
            type="button"
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
           
          </p>
        </div>
        <div className="filler-line"></div>
        <form className="configure__section--form" onSubmit={onSubmitForm}>
          <div>
            <label>Focus/Session Time (In Minutes)</label>
            <input
              type="number"
              placeholder="Eg.25"
              
              onChange={(e) => {
                setPomodoro(e.target.value);
              }}
              className="w-full mt-4 mb-4"

              value={pomodoro}
              required
              maxLength="2"
              minLength="0"
              max="59"
              min="0"
              step="1"
            />
          </div>
          <div>
            <label>Break Time (In Minutes)</label>
            <input
              type="number"
              placeholder="Eg.5"
              className="w-full mt-4 mb-4"
              onChange={(e) => {
                setPomoBreak(e.target.value);
              }}
              value={pomoBreak}
              required
              maxLength="2"
              minLength="0"
              max="59"
              min="0"
              step="1"
            />
          </div>

          <div className="configure__section--form-btn">
            <button style={{ background: currentColor, color: '#fff' }}
              className="relative text-xl m-4 rounded-lg p-3 hover:bg-light-gray">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfigurePage;
