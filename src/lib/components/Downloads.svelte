<script>
    import { _ } from 'svelte-i18n';
    export let images = [
        { src: "/images/apple.png", alt: "Apple" },
        { src: "/images/google.png", alt: "Google" }
    ];

    function showAlert() {
        alert(`${$_('앱이 곧 완성돼요! 조금만 기다려주세요')}`);
    }
</script>

<div class="responsive-images">
    {#each images as image}
        <img src={image.src} alt={image.alt} class="responsive-image" on:click={showAlert} />
    {/each}
</div>

<p class="completion-message">{$_('※ 곧 앱이 완성돼요!')}</p>

<style>
    .responsive-images {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 13px;
        margin: 20px 0;
    }

    .responsive-image {
        width: 100%;
        max-width: 200px;
        cursor: pointer; /* 커서가 포인터 모양으로 바뀌도록 추가 */
    }

    .completion-message {
        font-size: 1.3rem; /* 작은 글씨 크기 */
        color: darkgrey;
        text-align: center;
        margin-top: 10px;
    }

    @media (min-width: 600px) {
        .responsive-images {
            flex-direction: row;
        }
    }

    @media (max-width: 599px) {
        .responsive-images {
            margin-top: 35px;
            flex-direction: column;
        }
    }
</style>
