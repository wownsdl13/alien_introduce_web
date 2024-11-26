<script>
    import { onMount } from 'svelte';
    export let data;

    // Initialize variables with fallback values
    let licenseData = "";
    let licenseType = data.licenseType || ""; // Get licenseType from data passed by load function
    let languageCode = "en"; // Default language code
    let dataLoaded = false;

    onMount(async () => {
        // Get the user's preferred language
        const g = navigator.language;
        languageCode = g.split('-')[0];

        // Perform the fetch based on the extracted language code and licenseType
        try {
            const response = await fetch(`https://europe.server.aliemap.com/util/get_license?languageCode=${languageCode}&licenseType=${licenseType}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch license data: ${response.statusText}`);
            }
            licenseData = await response.text();
        } catch (error) {
            console.error('Error fetching license data:', error);
            licenseData = "Error loading license data.";
        } finally {
            dataLoaded = true; // Stop showing loading indicator
        }
    });
</script>

<style>
    .loading {
        font-size: 1.5rem;
        text-align: center;
        margin-top: 2rem;
    }

    .license-content {
        padding: 1rem;
        border-radius: 8px;
        white-space: pre-wrap;
        font-family: monospace;
    }

    p {
        font-size: 1rem;
        color: #333;
    }
</style>

<!-- Render the template based on the loaded data -->
{#if dataLoaded}
    <div class="license-content">
        <p>{licenseData}</p> <!-- Display license data with preserved formatting -->
    </div>
{:else}
    <div class="loading">Loading...</div>
{/if}
