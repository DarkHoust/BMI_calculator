
const unitSelectorHeader = document.getElementById('unitSelectorHeader');
const unitSelectorBMI = document.getElementById('unitSelectorBMI');
const deleteButton = document.getElementById('deleteButton');
const resultContainer = document.getElementById('resultContainer');
            
const preferedUnit = localStorage.getItem('unit');

if (preferedUnit) {
    unitSelectorHeader.value = preferedUnit;
    unitSelectorBMI.value = preferedUnit;
};

 unitSelectorHeader.addEventListener('change', () => {
    unitSelectorBMI.value = unitSelectorHeader.value;
    localStorage.setItem('unit', unitSelectorHeader.value)
});

const resultMessage = new URLSearchParams(window.location.search).get('result');
if (resultMessage) {
    resultContainer.innerHTML = `
        <div class="alert alert-success" role="alert">
            ${resultMessage}
        </div>`;
};
            
deleteButton.addEventListener("click", () => {
    document.querySelector('form').reset();
    resultContainer.innerHTML = '';
});