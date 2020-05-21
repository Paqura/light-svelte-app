<script>
  import {onMount} from 'svelte'
  const url = 'https://jsonplaceholder.typicode.com/todos'

  let todos;
  onMount(async () => {
    await fetch(url)
      .then(r => r.json())
      .then(data => {
        todos = data;
      });
  })
</script>

{#if todos}
  {#each todos as todo }
    <ul>
      <li>
        {todo.title}
      </li>
    </ul>
  {/each}
{:else}
  <p class="loading">loading...</p>
{/if}