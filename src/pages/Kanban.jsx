import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../assets/mockData';
import { Header } from '../components';
import KanbanTemplate from '../components/KanbanTemplate';

const cardTooltip = data => (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>
                        <b>Assignee: </b>
                    </td>
                    <td>{data.Assignee}</td>
                </tr>
                <tr>
                    <td>
                        <b>Type: </b>
                    </td>
                    <td>{data.Type}</td>
                </tr>
                <tr>
                    <td>
                        <b>Estimate: </b>
                    </td>
                    <td>{data.Estimate}</td>
                </tr>
                <tr>
                    <td>
                        <b>Priority: </b>
                    </td>
                    <td>{data.Priority}</td>
                </tr>
                <tr>
                    <td>
                        <b>Summary: </b>
                    </td>
                    <td>{data.Summary}</td>
                </tr>
            </tbody>
        </table>
    </div>
);
let kanbanObj;

const addClick =()=> {
    const cardIds = kanbanObj.kanbanData.map(obj => parseInt(obj.Id.replace('Task ', ''), 10));
    const cardCount = Math.max(...cardIds) + 1;
    const cardDetails = {
        Id: `Task ${cardCount}`,
        Status: 'Open',
        Priority: 'Normal',
        Assignee: 'Andrew Fuller',
        Estimate: 0,
        Tags: '',
        Summary: '',
    };
    kanbanObj.openDialog('Add', cardDetails);
}
const dialogTemplate=(props)=> {
  return (<KanbanTemplate {...props}/>);
}
const Kanban = () => (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="App" title="Kanban" />
        <div className="m-3 ">
            <div className="property-panel-section">
                <div className="property-panel-content">
                    <table id="property" title="Properties">
                        <tr>
                            <td>
                                <button id="addNew" className="bg-light-gray p-2" onClick={addClick.bind(this)}>
                                    Add New Card
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <KanbanComponent
            ref={kanban => {
                kanbanObj = kanban;
            }}
            id="kanban"
            keyField="Status"
            dataSource={kanbanData}
            cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
            dialogSettings={{ template: dialogTemplate.bind(this) }}
            tooltipTemplate={cardTooltip}
            // swimlaneSettings={{ keyField: "Assignee" }} 
            // swimlaneSettings={{ keyField: "Priority" }} 
            enableTooltip
        >
            <ColumnsDirective>
                {kanbanGrid.map((item, index) => (
                    <ColumnDirective key={index} {...item} />
                ))}
            </ColumnsDirective>
        </KanbanComponent>
    </div>
);

export default Kanban;
