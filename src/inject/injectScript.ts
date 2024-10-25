// Function to fetch the source code of the current page
export async function fetchCurrentPageSource() {
    try {
        // Get the current URL
        const url = window.location.href;

        // Fetch the page's HTML
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/html',
            }
        });

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`Failed to fetch the page: ${response.status}`);
        }

        // Get the text of the page (source code)
        const sourceCode = await response.text();

        // Log the source code to the console
        console.log(sourceCode);

        
    } catch (error) {
        console.error('Error fetching page source:', error);
    }
}


