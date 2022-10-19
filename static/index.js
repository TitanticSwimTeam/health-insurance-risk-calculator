async function calculateBMI(){
    //Gets variables from the form
    var height = document.getElementById("height");
    height = height.toString();
    var heightUnits = document.getElementById("heightUnits");
    var weight = document.getElementById("weight");
    weight = weight.toString();
    var weightUnits = document.getElementById("weightUnits");
    var age = document.getElementById("age");
    age = age.toString();
    var bloodPressure = document.getElementById("bloodPressure");

    // See if Check Boxes are Checked
    var diabetesCheck = document.getElementById("diabetesCheck");
    const isDiabetesChecked = document.querySelector('#diabetesCheck');

    var alzheimerCheck = document.getElementById("alzheimerCheck");
    const isAlzheimerChecked = document.querySelector('#alzheimerCheck');

    var cancerCheck = document.getElementById("cancerCheck");
    const isCancerChecked = document.querySelector('#cancerCheck');

    //response
    const response = await fetch(`https://health-insurance-risk-calc-api.azurewebsites.net/api/bmi?height=${height}&heightUnits=${heightUnits}&weight=${weight}&weightUnits=${weightUnits}&age=${age}&bloodpressure=${bloodPressure}&diabetes=${isDiabetesChecked.checked}&alzheimers=${isAlzheimerChecked.checked}&cancer=${isCancerChecked.checked}`);
    const responseJson = await response.json();
    console.log(responseJson.bmi);
    
}