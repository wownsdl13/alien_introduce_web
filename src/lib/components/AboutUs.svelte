<script context="module">
    import { _ } from 'svelte-i18n';
</script>

<div class="our-goal-container">
    <div class="image-container">
        <img src="/images/love.png" class="small-icon-image"  alt=""/>
        <p class="text-description">
            {$_('좋은 인연 검색중...')}
        </p>
    </div>
    <h1 class="goal-title">About us</h1>
    <div style="margin-top: 50px"
    ></div>

    <div class="image-container">
        <img src="/images/profile1.jpg" alt="우리 가족" class="goal-image" />
        <p class="text-description">
            {$_('우리의 어릴때 모습. 훈훈했다')}
        </p>
    </div>

    <div style="margin-top: 50px"
    ></div>

    <p class="goal-description">
        {$_('우리는 어플리케이션을 통해 만난 국제 부부에요.')}
    </p>

    <p class="goal-description">
        {$_('지금은 예쁜 두 아이의 부모죠.')}
    </p>

    <p class="goal-description">
        {@html $_('같이 행복한 시간들을 지내다보니, <b>국제부부에 대한 장점</b>들이 많이 있더라구요.')}
    </p>



    <div class="image-container">
        <img src="/images/profile2.jpg" alt="우리 가족" class="goal-image" />
        <p class="text-description">
            {$_('결혼식날 모습')}
        </p>
    </div>


    <p class="goal-description">
        {@html $_('하지만 어떻게 만나야하는지, 또 나쁜 사람은 아닐지에 대한 <b>걱정이 많은 사람들을 많이 봤어요</b>')}
    </p>

    <p class="goal-description">
        {$_('그래서 저희가 직접 운영해보려고 해요.')}
    </p>
    <p class="goal-description">
        {@html $_('저희가 생각하는 <b>이상적인 가정을 꾸릴 수 있는 그런 만남</b>을 목적으로요')}
    </p>
    <div style="margin-top: 100px">

    </div>
    <div class="image-container">
        <img src="/images/coding.png" alt="" class="coding-icon-image" />
        <p class="text-description">
            {$_('우리의 목적을 위해')}
        </p>
        <p class="text-description">
            {$_('J가 열심히 개발하고 있어요')}
        </p>
    </div>
    <p class="goal-description">
        {@html $_('가볍지 않은 <b>진중한 만남을 꿈꾸는 분</b>이라면 들어오세요.')}
    </p>
    <h1 class="goal-big-description">
        {$_('저희가 도와드릴께요')}
    </h1>
</div>

<style>
    .our-goal-container {
        text-align: center;
        margin: 20px auto;
        padding: 0 20px;
        max-width: 800px;
    }

    .goal-title {
        font-size: 3.8rem;
        font-weight: bold;
        margin: 20px;
    }

    .image-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px; /* 각 박스 사이의 간격 */
        align-items: center; /* 항목을 가운데 정렬 */
        margin-bottom: 20px;
    }

    .coding-icon-image {
        width: 38%; /* 원하는 너비 값 */
        height: auto; /* 비율을 유지하면서 높이를 자동으로 조절 */
        margin: 0 0;
    }

    .small-icon-image {
        width: 46%; /* 원하는 너비 값 */
        height: auto; /* 비율을 유지하면서 높이를 자동으로 조절 */
        margin: 0 0;
    }

    .goal-image {
        width: 80%;
        max-width: 450px;
        border-radius: 7%; /* 이미지에 둥근 모서리를 적용 */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .text-description {
        font-size: 1.2rem;
        color: darkgrey;
        margin: 0 0;
        line-height: 8px;
    }

    .goal-description {
        font-size: 1.7rem;
        line-height: 1.8;
        margin-bottom: 40px;
        color: #555;
    }

    .goal-big-description {
        font-size: 2.7rem;
        line-height: 1.6;
        color: #555;
    }

    @media (max-width: 600px) {
        .goal-title {
            font-size: 3.6rem;
            margin: 40px;
        }

        .goal-description {
            font-size: 1.3rem;
            margin: 38px 15px;
            line-height: 2.15; /* 줄 간격 설정 */
        }

        .goal-big-description {
            font-size: 2.2rem;
            margin: 50px 15px;
            line-height: 1.85; /* 줄 간격 설정 */
        }
    }
</style>