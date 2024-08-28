export async function load({ fetch, url }) {
    const licenseType = url.searchParams.get("licenseType");
    return {
        licenseType
    }
}
