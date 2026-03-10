async function searchResult(){

let seat = document.getElementById("seatNo").value;

let response = await fetch("database.json");
let data = await response.json();

let student = data.find(s => s.seatNo === seat);

let resultCard = document.getElementById("resultCard");

if(student){

resultCard.innerHTML = `
<div class="result">

<h2>${student.name}</h2>
<p>Seat No: ${student.seatNo}</p>
<p>Branch: ${student.branch}</p>

<h3>Marks</h3>

<p>Data Structures: ${student.DS}</p>
<p>Artificial Intelligence: ${student.AI}</p>
<p>Operating Systems: ${student.OS}</p>
<p>DELD: ${student.DELD}</p>

<h2>Result: ${student.Result}</h2>

</div>
`;

}else{

resultCard.innerHTML="<h3>No Student Found</h3>";

}

}
