import React from 'react';

// Using the array filter operation, filter and display the treatments for a given category.

function MedicalTreatmentList(props) {
  const treatmentsJson = props.string;
  const medicalTreatmentsArray = JSON.parse(treatmentsJson);

  const [box, setBox] = React.useState('');

  const listMedicalTreats = medicalTreatmentsArray.map((item) => (
    <li>
      Record {item.treatId} details:
      <div>
        Course ID = {item.treatCourseId}
        <br />
        Type = {item.type}
        <br />
        Category = {item.category}
        <br />
        Name = {item.name}
        <br />
        Date = {item.startDate}
      </div>
      <br />
    </li>
  ));

  const filtering = medicalTreatmentsArray
    .filter((m) => m.category.includes('november'))
    .map((filteredElement) => (
      <li>
        {filteredElement.treatCourseId} | {filteredElement.type} |{' '}
        {filteredElement.category} | {filteredElement.name}
      </li>
    ));

  return (
    <div>
      {listMedicalTreats}
      <p> Course ID | Type | Category | Name </p>
      {filtering}
    </div>
  );
}

export default MedicalTreatmentList;
