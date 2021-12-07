import React from 'react';

{
  /*
  React component MedicalTreatment containing the attributes passed through props.
  This component's function is to print in a list all the attributes from props.
  An instance of this component has been created through App.js.
  */
}

function MedicalTreatment(props) {
  return (
    <div>
      {props.medicalTreatment.treatId}
      , {props.medicalTreatment.treatCourseId} 
      , {props.medicalTreatment.type}
      , {props.medicalTreatment.category}
      , {props.medicalTreatment.name}
      , {props.medicalTreatment.startDate}
    </div>
  );
}

export default MedicalTreatment;
