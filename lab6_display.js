function updateAccordion() {
    fetch('accordion_data.json')
        .then(response => response.json())
        .then(data => {
            let accordionHTML = '';
            for (let i = 1; i <= data.numElements; i++) {
                accordionHTML += `<div>Element ${i}: ${data['element'+i]}</div>`;
            }
            document.getElementById('accordion').innerHTML = accordionHTML;
        });
}

setInterval(updateAccordion, 5000);