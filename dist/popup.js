import { fetchCurrentPageSource } from './inject/injectScript.js';
// Function to log the full HTML of the current page
function logHTMLSource() {
    const actionBtn = document.getElementById('actionBtn');
    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            fetchCurrentPageSource();
        });
    }
}
logHTMLSource();
//# sourceMappingURL=popup.js.map