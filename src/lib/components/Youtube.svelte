<script>
    export let videoId;
    export let description;
</script>

<div class="thumbnail-container">
    <a href={`https://www.youtube.com/@AlienApp`} target="_blank" class="thumbnail-link">
        <div class="thumbnail-wrapper">
            <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt="YouTube Thumbnail" class="thumbnail-image" />
            <div class="play-icon">
                <!-- SVG Play Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path d="M8 5v14l11-7z" fill="white"/>
                </svg>
            </div>
        </div>
    </a>
    <p class="description">{description}</p>
</div>

<style>
    .thumbnail-container {
        text-align: center;
        margin: 20px 0;
    }

    .thumbnail-link {
        display: inline-block;
        text-decoration: none;
        color: inherit;
    }

    .thumbnail-wrapper {
        position: relative; /* 부모 요소를 기준으로 플레이 아이콘 위치 설정 */
        display: inline-block; /* 부모 요소의 크기를 내용물에 맞춤 */
    }


    .thumbnail-image {
        object-fit: cover; /* 이미지가 비율을 유지하며 꽉 채우도록 설정 */
        width: 80%;
        max-width: 1500px; /* 원하는 최대 너비로 설정 */
        border-radius: 8px;
    }

    .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경색 */
        border-radius: 50%;
        width: 70px; /* 고정된 너비 설정 */
        height: 70px; /* 고정된 높이 설정 */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .description {
        text-align: center;
        font-size: clamp(1rem, 0.6vw + 1rem, 2rem); /* 뷰포트 너비에 따라 동적으로 조절되는 글씨 크기 */
        color: darkgrey;
        margin: 5px 30px;
    }
</style>
