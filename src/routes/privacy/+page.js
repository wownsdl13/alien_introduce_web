export async function load({ fetch, url, stuff }) {
    let licenseType = '';

    if (typeof window !== 'undefined') {
        // 클라이언트 측에서만 URL 검색 매개변수에 접근
        licenseType = url.searchParams.get("licenseType");
    }

    return {
        licenseType
    };
}
