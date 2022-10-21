async function calculateBMI(){
    //Gets variables from the form
    var height = document.getElementById("height").value;
    const heightString = height.toString();
    var heightUnits = document.getElementById("heightUnits").value;
    var weight = document.getElementById("weight").value;
    const weightString = weight.toString();
    var weightUnits = document.getElementById("weightUnits").value;
    var age = document.getElementById("age").value;
    const ageString = age.toString();
    var bloodPressure = document.getElementById("bloodPressure").value;

    // See if Check Boxes are Checked
    var diabetesCheck = document.getElementById("diabetesCheck");
    const isDiabetesChecked = document.querySelector('#diabetesCheck');

    var alzheimerCheck = document.getElementById("alzheimerCheck");
    const isAlzheimerChecked = document.querySelector('#alzheimerCheck');

    var cancerCheck = document.getElementById("cancerCheck");
    const isCancerChecked = document.querySelector('#cancerCheck');

    //response
    const response = await fetch(`https://health-insurance-risk-calc-api.azurewebsites.net/api/bmi?height=${heightString}&heightUnits=${heightUnits}&weight=${weightString}&weightUnits=${weightUnits}&age=${ageString}&bloodpressure=${bloodPressure}&diabetes=${isDiabetesChecked.checked}&alzheimers=${isAlzheimerChecked.checked}&cancer=${isCancerChecked.checked}`);
    const responseJson = await response.json();
    console.log(responseJson.bmi);
    
}