<script>
    import Contact from "$lib/components/Contact.svelte";
    import {onMount} from "svelte";
    import {get} from "svelte/store";
    import {locale} from "svelte-i18n";
    let lang = 'en';
    onMount(() => {
        const g = get(locale);
        lang = g.split('-')[0]; // "ko"만 추출
        console.log(`current > ${lang}`);
    });
</script>
<Contact {lang}></Contact>