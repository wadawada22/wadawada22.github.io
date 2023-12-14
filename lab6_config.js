function createAccordion() {
    //збереження
    const formData = new FormData(document.getElementById('accordionForm'));
    fetch('lab6_save.php', {
        method: 'POST',
        body: formData
    });
}

function updateForm()
{
    const numElements = document.getElementById('numElements').value;

    let accordionElementsHTML = '';
    for (let i = 1; i <= numElements; i++) {
        accordionElementsHTML += `<div>
            <label for="element${i}">Елемент №${i}:</label>
            <input type="text" id="element${i}" name="element${i}" required>
        </div>`;
    }

    document.getElementById('accordionElements').innerHTML = '<br>'+ accordionElementsHTML+'<br><button type="button" onclick="createAccordion()">Створити акордіон</button>';

}
