async function getValues() {
    let response = await fetch('http://localhost:4001/envelopes');
    let evelopes = await response.json();
    let listItems = "";
    evelopes.forEach(element => {
        listItems += evelopeToListItem(element);
    });
    let list = document.getElementById('envelopes');
    list.innerHTML = listItems;
}

function evelopeToListItem(envelope) {
    return `<li><a href="./envelope.html?id=${envelope._id}">${envelope.name}</a></li>`;
}

getValues();