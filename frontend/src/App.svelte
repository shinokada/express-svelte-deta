<script>
  import { onMount } from "svelte";
  let data;
  const apiEndpoint = import.meta.env.API_ENDPOINT;

  async function fetchData() {
    const response = await fetch(apiEndpoint);
    data = await response.json();
  }

  onMount(fetchData);
</script>

<main>
  <h1>Vite + Svelte + Express</h1>

  {#if data}
    <p>Data: {data}</p>
  {/if}
</main>
