<script>
  import '../i18n.js';
  import {isLoading} from 'svelte-i18n';
  import { waitLocale } from 'svelte-i18n'
  import "$lib/css/reset.css";
  import "$lib/css/global.css";
  import "$lib/css/syntax-highlight.css";
  import SidebarToggle from "$lib/components/SidebarToggle.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { isSidebarOpen } from "$lib/stores";
  import Header from "$lib/components/Header.svelte";
  import {onMount} from "svelte";
  import {get} from "svelte/store";

  export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    return waitLocale()
  }

  export let data;
  let blogUrl = '';
  let lang = '';
  onMount(() => {
    lang = navigator.language.split('-')[0]; // "ko"만 추출
  });
  $:{
    blogUrl = data.supportedLangList.includes(lang) ? `https://alien.durumis.com/${lang}` : 'https://alien.durumis.com/en';
  }
</script>

<div class="wrapper overflow-hidden">
  <Sidebar {blogUrl}/>
  {#if !$isLoading}
    <main class:show={$isSidebarOpen}>
      <SidebarToggle />
      <Header />
      <article class="container">
        <slot />
      </article>
    </main>
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    overflow: hidden;
  }
  main {
    width: 100%;
  }

  article {
    margin: 2rem auto;
  }
</style>
