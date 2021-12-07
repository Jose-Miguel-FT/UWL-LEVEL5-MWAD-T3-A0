import React from 'react';
import './style.css';
import MedicalTreatment from './components/MedicalTreatment';
import MedicalTreatmentList from './components/MedicalTreatmentList';
import MedicalTreatmentPanel from './components/MedicalTreatmentPanel';

{
  /*
  One instance of MedicalTreatment has been created.
  Using props, the values stored in the medicalTreatment1 object
  have been passed on to the MedicalTreatment.js component. 
  */
}

export default function App() {
  const medicalTreatment1 = {
    treatId: '001',
    treatCourseId: '010',
    type: 'alpha',
    category: 'bravo',
    name: 'charlie',
    startDate: new Date(2021, 10, 19).toLocaleDateString(),
  };

  const normalData = [
    {
      treatId: '01',
      treatCourseId: '10',
      type: 'alpha',
      category: 'bravo',
      name: 'charlie',
      startDate: new Date(2020, 0, 1),
    }, 
    {
      treatId: '02',
      treatCourseId: '20',
      type: 'delta',
      category: 'echelon',
      name: 'foxtrot',
      startDate: new Date(2020, 1, 2),
    },
    {
      treatId: '03',
      treatCourseId: '30',
      type: 'golf',
      category: 'hotel',
      name: 'india',
      startDate: new Date(2020, 2, 3),
    },
    {
      treatId: '04',
      treatCourseId: '40',
      type: 'juliet',
      category: 'kilo',
      name: 'lima',
      startDate: new Date(2020, 3, 4),
    },
    {
      treatId: '05',
      treatCourseId: '50',
      type: 'mike',
      category: 'november',
      name: 'oscar',
      startDate: new Date(2020, 4, 5),
    },
    {
      treatId: '06',
      treatCourseId: '60',
      type: 'mike',
      category: 'november',
      name: 'oscar',
      startDate: new Date(2020, 4, 5),
    }
  ];

  const jsonData = JSON.stringify(normalData);

  return (
    <div>
      <h1>LH MEDICAL COMPANY</h1>
      <br />
      <MedicalTreatment medicalTreatment={medicalTreatment1} />
      <br />
      <MedicalTreatmentList string={jsonData} />
      <br />
      <MedicalTreatmentPanel />
    </div>
  );
}
