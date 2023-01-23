<script>
  import { onMount } from "svelte";
  let data;
  async function fetchData() {
    const response = await fetch("http://localhost:3000/api");
    data = await response.json();
  }

  onMount(fetchData);
</script>

<main>
  <h1 class="text-4xl">Vite + Svelte + Express</h1>

  {#if data}
    <p>Data:</p>
    <ul>
      {#each Object.entries(data) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/if}
</main>
