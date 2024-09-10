<script>
    import {_} from 'svelte-i18n';
    import './../../i18n.js';

    export let lang;


    let contacts = [
        {
            type: 'YouTube',
            url: 'https://www.youtube.com/@AlieMap',
            icon: '/icons/youtube.png',
            description: $_('우리 부부의 일상과 앱 개발등을 올리는 곳')
        },
        {type: 'Threads', url: '', icon: '/icons/threads.png', description: $_('앱 개발 기록 & 국제커플에 대한 의견')},
        {
            type: 'X (Twitter)',
            url: 'https://www.threads.net/@alien_application.global',
            icon: '/icons/x.png',
            description: $_('앱 개발 기록 & 국제커플에 대한 의견 (영어)')
        },
        {
            type: 'Email',
            url: 'contact@aliemap.com',  // 'mailto:' 부분을 제거하여 순수 이메일 주소를 보이게 함
            icon: '/icons/email.png',
            description: $_('비즈니스 문의 및 궁금증은 여기로')
        },
    ];

    $: {
        updateContacts(lang);
    }

    function updateContacts(lang) {
        contacts = contacts.map(contact => {
            if (contact.type === 'Threads') {
                return {
                    ...contact,
                    url: lang.startsWith('ko')
                        ? 'https://www.threads.net/@alien_application'
                        : 'https://www.threads.net/@alien_application.global'
                };
            }
            return contact;
        });
    }

    function copyToClipboard(url) {
        navigator.clipboard.writeText(url).then(() => {
            alert($_('이메일이 클립보드에 복사되었습니다'));
        }).catch(err => {
            console.error("클립보드 복사 실패: ", err);
        });
    }
</script>

<div class="contact-container">
    <h1 class="contact-title">SNS & Contact</h1>
    <div class="contact-list">
        {#each contacts as contact}
            <div class="contact-item-wrapper">
                {#if contact.type === 'Email'}
                    <div class="contact-item" on:click={() => copyToClipboard(contact.url)} >
                        <img src={contact.icon} alt={contact.type} class="contact-icon"/>
                        <span>{contact.url}</span> <!-- 이메일 주소를 화면에 보이도록 함 -->
                    </div>
                {:else}
                    <a href={contact.url} target="_blank" class="contact-item">
                        <img src={contact.icon} alt={contact.type} class="contact-icon"/>
                        <span>{contact.type}</span>
                    </a>
                {/if}
                <p class="contact-description">{contact.description}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    .contact-container {
        text-align: center;
        margin: 20px auto;
        padding: 0 20px;
        max-width: 700px;
    }

    .contact-title {
        font-size: clamp(2rem, 7.5vw + 1rem, 2.8rem);
        margin-bottom: 40px;
    }

    .contact-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .contact-item-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-item {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: inherit;
        font-size: clamp(1rem, 3.5vw + 1rem, 1.3rem);
        transition: transform 0.3s ease, color 0.3s ease;
        cursor: pointer;
    }

    .contact-item:hover {
        transform: scale(1.1);
        color: #0073e6;
    }

    .contact-icon {
        width: 35px;
        height: 35px;
        transition: transform 0.3s ease;
    }

    .contact-item:hover .contact-icon {
        transform: scale(1.03);
    }

    .contact-description {
        font-size: clamp(0.8rem, 2vw + 0.5rem, 1.1rem);
        color: darkgrey;
        margin-top: 5px;
        text-align: center;
    }
</style>
