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
    const res1 = await fetch(`https://health-insurance-risk-calc-api.azurewebsites.net/api/bmi?height=${heightString}&heightUnits=${heightUnits}&weight=${weightString}&weightUnits=${weightUnits}`);
    const res1JSON = await res1.json();
    var bmi = res1JSON.bmi;
    console.log(bmi);

    //Validates Input
    if(bmi === null || bmi === 0 || bloodPressure === ""){
        if(height < 2){
            alert("Please enter a valid height. (Minimum 2)");
        }
        if(weight <= 0){
            alert("Please enter a valid weight.");
        }
        if(age <= 0){
            alert("Please enter a valid age.");
        }
        if(bloodPressure === ""){
            alert("Please select a blood pressure option.");
        }

    }
    else{
    //response
    const res2 = await fetch(`https://health-insurance-risk-calc-api.azurewebsites.net/api/risk?bmi=${bmi}&age=${ageString}&bloodpressure=${bloodPressure}&diabetes=${isDiabetesChecked.checked}&alzheimers=${isAlzheimerChecked.checked}&cancer=${isCancerChecked.checked}`);
    const res2JSON = await res2.json();
    console.log(res2JSON);
    document.getElementById('risk').innerHTML = `<b>${res2JSON.risk}</b>`;
    document.getElementById('score').innerHTML = `<b>${res2JSON.score}</b>`;
    }
}