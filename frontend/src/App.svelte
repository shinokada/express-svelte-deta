<script>
  import Router, { link } from "svelte-spa-router";
  import { routes } from "./routes.js";
  import { onMount } from "svelte";
  let data;
  async function fetchData() {
    const response = await fetch("http://localhost:3000/api");
    data = await response.json();
  }

  onMount(fetchData);
</script>

<main>
  <h1>Vite + Svelte + Express + Svelte-Spa-Router</h1>
  <Router {routes} />
  {#if data}
    <p>Data:</p>
    <ul>
      {#each Object.entries(data) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/if}
</main>
