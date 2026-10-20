// Native links keep every project accessible without JavaScript.
const printButton = document.getElementById('print-case');
if (printButton) printButton.addEventListener('click', () => window.print());
