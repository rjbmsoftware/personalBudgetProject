const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

async function findEnvelope() {
    let response = await fetch(`http://localhost:4001/envelopes/${id}`);
    let myEvelope = await response.json();
    const element = document.getElementById('envelope');
    let htmlText = `<div>name: ${myEvelope.name}</div><div>amount: ${myEvelope.amount}</div><div>description: ${myEvelope.description}</div>`;
    element.innerHTML = htmlText;
}

async function deleteEnvelope() {
    await fetch(`http://localhost:4001/envelopes/${id}`, {method: 'delete'});
    window.location.assign('./index.html')
}

document.getElementById('deleteButton').addEventListener('click', deleteEnvelope);
findEnvelope();
