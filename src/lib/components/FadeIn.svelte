<script>
    export let duration = '1s';
    export let delay = '0s';
</script>

<div class="fade-in" style="--duration: {duration}; --delay: {delay}">
    <slot></slot>
</div>

<style>
    .fade-in {
        opacity: 0; /* 초기 상태 */
        animation: fadeIn var(--duration) ease-out var(--delay) forwards;
    }

    @keyframes fadeIn {
        from {
            transform: translateY(-15px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>