<script>
    import { footerText, accountLicenses, termsOfServices } from "$lib/constants";
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'; // SvelteKit의 페이지 이동 기능

    const date = new Date();
    const year = date.getFullYear();
    let lang = 'en'; // 기본 언어 코드 설정

    onMount(() => {
        const g = navigator.language;
        lang = g.split('-')[0]; // 언어 코드의 첫 부분을 추출
    });

    function navigateToLicense(licenseType) {
        goto(`/privacy?licenseType=${licenseType}`);
    }
</script>

<p>© {year}. {footerText}</p>
<div class="footer">
    <p class="bottom-text" on:click={() => navigateToLicense('account_license')}>* {accountLicenses}</p>
    <p class="bottom-text" on:click={() => navigateToLicense('terms_of_services')}>* {termsOfServices}</p>
</div>

<style>
    p {
        color: #ddd;
        font-size: 0.9rem;
    }

    .bottom-text {
        width: 100%;
        color: #767676;
        cursor: pointer; /* 클릭 가능하도록 포인터 커서 추가 */
        margin-top: 5px; /* 간격 추가 */
    }

    .footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>
