<script>
  import { isSidebarOpen } from "$lib/stores";
  import Footer from "$lib/components/Footer.svelte";
  import { siteTitle } from "$lib/constants";
  import Nav from "$lib/components/Nav.svelte";

  export let blogUrl;

</script>

<div class="sidebar" class:show={$isSidebarOpen}>
  <div class="wrapper">
    <h1>{siteTitle}</h1>
  </div>
  <Nav {blogUrl}/>
  <div class="wrapper">
    <Footer />
  </div>
</div>

<style>
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    left: -18rem;
    width: 18rem;
    height: 100vh;
    background-color: var(--sidebar-bg);
    font-size: 1rem;
    z-index: 9999;
  }

  h1 {
    color: #ddd;
    font-weight: bold;
    font-size: 2rem;
  }

  .show {
    transform: translateX(18rem);
    box-shadow: 0 10px 5px var(--sidebar-bg);
  }

  .wrapper {
    padding: 2rem;
  }

  @media screen and (max-width: 800px) {
    .sidebar {
      left: -16rem;
      width: 16rem;
    }
    .show {
      transform: translateX(16rem);
    }
  }
</style>
