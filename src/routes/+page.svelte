<script>
    import { _ } from 'svelte-i18n';
    import Downloads from "$lib/components/Downloads.svelte";
    import FadeIn from "$lib/components/FadeIn.svelte";
    import Youtube from "$lib/components/Youtube.svelte";
    import OurGoal from "$lib/components/OurGoal.svelte";
    import AboutUs from "$lib/components/AboutUs.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import {onMount} from "svelte";

    let lang = 'en';

    const images = [
        {src: "/images/apple.png", alt: "Apple"},
        {src: "/images/google.png", alt: "Google"}
    ];


    onMount(() => {
        const g = navigator.language;
        lang = g.split('-')[0]; // "ko"만 추출
    });

</script>
<FadeIn delay="0s">
    <div class="image-container">
        <img src="/images/family.png" style="width: 65%; max-width: 500px; margin-top: 10px; margin-bottom: 10px"
             alt=""/>
        <p class="image-caption">T, J and M</p>
    </div>
</FadeIn>
<FadeIn delay="0.2s">
    <h1 class="center-alie-map-title">Alie Map</h1>
</FadeIn>
<FadeIn delay="0.4s">
    <p class="center-title">{$_('국제부부가 진심을 담아 글로벌 데이트앱을 운영중이에요!')}</p>
</FadeIn>
<FadeIn delay="0.6s">
    <Downloads {images}></Downloads>
</FadeIn>

<div style="margin-top: 75px">
    <FadeIn delay="0.8s">
        <Youtube videoId="dpD0LPPOh-8"
                 description={$_('우리의 유튜브 (Alien Diary), 우리의 이야기를 들을 수 있어요. 일상 기록과 개발 일기가 올라가요')}></Youtube>
    </FadeIn>
    <div style="margin-top: 90px">
        <AboutUs></AboutUs>
    </div>
    <div style="margin-top: 160px">
        <OurGoal></OurGoal>
    </div>
    <div style="margin-top: 120px; margin-bottom: 120px">
        <Contact {lang}></Contact>
    </div>
</div>


<style>
    .center-alie-map-title {
        text-align: center;
        font-size: clamp(1rem, 7.5vw + 1rem, 7rem);
        margin: 0 0;
    }

    .center-title {
        text-align: center;
        font-size: clamp(1rem, 2.2vw + 1rem, 7rem); /* 뷰포트 너비에 따라 동적으로 조절되는 글씨 크기 */
        margin: 0 30px;
    }

    .image-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .image-caption {
        font-size: 1.3rem; /* 작은 글씨 크기 */
        font-style: italic; /* 기울기 */
        text-align: center; /* 중앙 정렬 */
        margin-bottom: 3px;
    }
</style>