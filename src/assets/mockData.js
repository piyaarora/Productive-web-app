import React from 'react';
import { AiOutlineCalendar} from 'react-icons/ai';
import { FiShoppingBag, FiEdit } from 'react-icons/fi';
import { BsKanban} from 'react-icons/bs';
import { IoTimerOutline} from 'react-icons/io5';


// ********* Sidebar links *********
export const links = [
  {
    title: 'Apps',
    links: [
      {
        name: 'Home',
        icon: <FiShoppingBag />,
      },
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'pomodoro',
        icon: <IoTimerOutline size={20} />,
      },
    ],
  },

];


// ************* Calendar **************
export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2023-01-10T04:00:00.000Z',
    EndTime: '2023-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2023-01-11T06:30:00.000Z',
    EndTime: '2023-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2023-01-12T04:00:00.000Z',
    EndTime: '2023-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2023',
    Location: 'Space Center USA',
    StartTime: '2023-01-13T07:30:00.000Z',
    EndTime: '2023-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2023-01-14T06:30:00.000Z',
    EndTime: '2023-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2023-01-14T04:00:00.000Z',
    EndTime: '2023-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2023-01-15T05:30:00.000Z',
    EndTime: '2023-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2023-01-16T03:30:00.000Z',
    EndTime: '2023-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2023-01-18T05:30:00.000Z',
    EndTime: '2023-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2023-01-20T05:30:00.000Z',
    EndTime: '2023-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2023',
    Location: 'London',
    StartTime: '2023-01-21T04:00:00.000Z',
    EndTime: '2023-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2023-01-08T04:30:00.000Z',
    EndTime: '2023-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2023-01-06T05:00:00.000Z',
    EndTime: '2023-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2023-01-05T04:30:00.000Z',
    EndTime: '2023-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2023-01-19T04:00:00.000Z',
    EndTime: '2023-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  
];


// ********* Kanban Page ************
export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];
  export const kanbanData = [
    {
      Id: 'Task 1',
      Title: 'Task - 29001',
      Status: 'Open',
      Summary: 'Analyze the new requirements gathered from the customer.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-nancy-davloio',
    },
    {
      Id: 'Task 2',
      Title: 'Task - 29002',
      Status: 'InProgress',
      Summary: 'Improve application performance',
      Type: 'Improvement',
      Priority: 'Normal',
      Tags: 'Improvement',
      Estimate: 6,
      Assignee: 'Andrew Fuller',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-normal, e-andrew-fuller',
    },
    {
      Id: 'Task 3',
      Title: 'Task - 29003',
      Status: 'Open',
      Summary: 'Arrange a web meeting with the customer to get new requirements.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Meeting',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#1F88E5',
      ClassName: 'e-others, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 4',
      Title: 'Task - 29004',
      Status: 'InProgress',
      Summary: 'Fix the issues reported in the IE browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'IE',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 5',
      Title: 'Task - 29005',
      Status: 'Review',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-steven-walker',
    },
    {
      Id: 'Task 6',
      Title: 'Task - 29007',
      Status: 'Validate',
      Summary: 'Validate new requirements',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Robert King',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-robert-king',
    },
    {
      Id: 'Task 7',
      Title: 'Task - 29009',
      Status: 'Review',
      Summary: 'Fix the issues reported in Safari browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
    {
      Id: 'Task 8',
      Title: 'Task - 29010',
      Status: 'Close',
      Summary: 'Test the application in the IE browser.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Review,IE',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 3,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 9',
      Title: 'Task - 29011',
      Status: 'Validate',
      Summary: 'Validate the issues reported by the customer.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Validation,Fix',
      Estimate: 1,
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-steven-walker',
    },
    {
      Id: 'Task 10',
      Title: 'Task - 29015',
      Status: 'Open',
      Summary: 'Show the retrieved data from the server in grid control.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Database,SQL',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
      Id: 'Task 11',
      Title: 'Task - 29016',
      Status: 'InProgress',
      Summary: 'Fix cannot open user’s default database SQL error.',
      Priority: 'Critical',
      Type: 'Bug',
      Tags: 'Database,Sql2008',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#E64A19',
      ClassName: 'e-bug, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 12',
      Title: 'Task - 29017',
      Status: 'Review',
      Summary: 'Fix the issues reported in data binding.',
      Type: 'Story',
      Priority: 'Normal',
      Tags: 'Databinding',
      Estimate: '3.5',
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-normal, e-janet-leverling',
    },
    {
      Id: 'Task 13',
      Title: 'Task - 29018',
      Status: 'Close',
      Summary: 'Analyze SQL server 2008 connection.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Grid,Sql',
      Estimate: 2,
      Assignee: 'Andrew Fuller',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-release, e-andrew-fuller',
    },
    {
      Id: 'Task 14',
      Title: 'Task - 29019',
      Status: 'Validate',
      Summary: 'Validate databinding issues.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Margaret hamilt',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 15',
      Title: 'Task - 29020',
      Status: 'Close',
      Summary: 'Analyze grid control.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Analyze',
      Estimate: 2.5,
      Assignee: 'Margaret hamilt',
      RankId: 5,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
];

// ********** Editor Page **************
export const EditorData = () => (
  <div>
    <h4>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.
    </h4>
  </div>
);



