import React from 'react';
import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';

import {
    HtmlEditor,
    Image,
    Inject,
    Link,
    QuickToolbar,
    RichTextEditorComponent,
    Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import {  Header } from '../components';


const Editor = () => {
  const { currentColor } = useStateContext();

    let rteObj;
    let answerSectionEle;
    const answerSectionRef = element => {
        answerSectionEle = element;
    };

    let answerEle;
    const answerRef = element => {
        answerEle = element;
    };
    const resetMessage = () => {
        const answerElement = rteObj.contentModule.getEditPanel();
        answerElement.innerHTML = '';
        rteObj.value = '';
        rteObj.refresh();
    }
    const postMessage = () => {
        const answerElement = rteObj.contentModule.getEditPanel();
        const comment = rteObj.getHtml();
        if (
            comment !== null &&
            comment.trim() !== '' &&
            (answerElement.innerText.trim() !== '' ||
                !isNOU(answerElement.querySelector('img')))
        ) {
            const answer = answerEle;
            const cloneAnswer = answer.cloneNode(true);
            const postContent = cloneAnswer.querySelector('.posting');
            postContent.innerHTML = comment;
            const postElement = answerSectionEle;
            postElement.appendChild(cloneAnswer);
            answerElement.innerHTML = '';
            rteObj.value = '';
            rteObj.refresh();
        }
    }

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <Header category="App" title="Editor" />
                <form>
                    <RichTextEditorComponent id="text-editor"
                        ref={richtexteditor => {
                            rteObj = richtexteditor;
                        }}>
                            <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
                    </RichTextEditorComponent>
                    <div id="buttonSection">
                      <button onClick={resetMessage.bind(this)} className="relative text-xl mt-4 rounded-lg p-3 bg-light-gray">Cancel</button>
                     
                     
                     <button
                          type="button"
                          id="rteSubmit"
                          onClick={postMessage.bind(this)} 
                         style={{ background: currentColor, color: '#fff' }}
                          className="relative text-xl m-4 rounded-lg p-3 hover:bg-light-gray"
                      > Save </button>
            
                       
                    </div>
                </form>
                
            <div
            className="rounded p-4 mt-4 bg-light-gray" 
          >
            <p className='text-xl font-bold tracking-tight text-900'>Your Notes</p>
            <div ref={answerSectionRef}>
                  <div className="answer" ref={answerRef}>
                    <div className="posting" />
                </div>
            </div>
            </div>
        </div>
    );
}
export default Editor;
