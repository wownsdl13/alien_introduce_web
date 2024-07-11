<script>
    import { _ } from 'svelte-i18n';
    import FadeIn from "$lib/components/FadeIn.svelte";
</script>

<div class="our-goal-container">
    <div class="image-container">
        <img src="/images/study.png" class="small-icon-image"  alt=""/>
    </div>
    <h1 class="sub-goal-title">'Alie Map' is</h1>
    <ol class="goal-list">
        <li><FadeIn>1. {@html $_('<b>\'보수적인 공간이에요\'</b>. 결혼을 하고, 행복한 가정을 꾸리기 위한 곳이요')}</FadeIn></li>
        <li><FadeIn>2. {@html $_('우리의 목표는 짧은 인연이 아닌 <b>\'평생의 인연을 찾을 수 있는 공간\'</b>을 만들어주는 거에요')}</FadeIn></li>
        <li><FadeIn>3. {@html $_('불건전하거나 좋지 않은 사람들로부터 <b>여러분들을 지켜주고 싶어요.</b> 이상한 사람들은 저희의 금전적인 이득과 상관없이 불이익이 있을꺼에요. 여기는 그런 곳이에요')}</FadeIn></li>
        <li><FadeIn>4. {@html $_('<b>국제 부부의 장점을 널리 알리고 싶어요.</b> 장점들을 알려주고, 저희가 경험했던 놀라운 것들을 공유하고싶어요')}</FadeIn></li>
    </ol>
</div>

<style>

    .our-goal-container {
        text-align: center;
        margin: 20px auto;
        padding: 0 20px;
        max-width: 800px;
    }

    .sub-goal-title {
        font-size: 2.9rem;
        font-weight: bold;
        margin: 0 10px 40px;
    }

    .image-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px; /* 각 박스 사이의 간격 */
        align-items: center; /* 항목을 가운데 정렬 */
        margin-bottom: 20px;
    }


    .small-icon-image {
        width: 46%; /* 원하는 너비 값 */
        height: auto; /* 비율을 유지하면서 높이를 자동으로 조절 */
        margin: 0 0;
    }

    .goal-list {
        text-align: left;
        font-size: 2.2rem;
        line-height: 1.6;
        color: #555;
        padding: 0 20px;
        margin: 10px auto;
    }

    .goal-list li {
        margin-bottom: 40px;
    }

    @media (max-width: 600px) {
        .goal-list {
            font-style: italic; /* 기울기 */
            font-size: 1.25rem;
            line-height: 2.05; /* 줄 간격 설정 */
        }
    }
</style>