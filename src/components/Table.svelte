<script>
import { onMount } from 'svelte';
import { Table } from 'sveltestrap';
import { coronaService } from '../services/corona';

let loading = true
let data = []

onMount(async () => {
  const response = await coronaService.getCountries()
  data = response
  loading = false
})

</script>

{#if loading}
  <div>Loading...</div>
{/if}

{#if !loading}
<Table striped bordered>
  <thead>
    <tr>
      <td>№</td>
      <td>Country</td>
      <td>Cases</td>
      <td>Deaths</td>
      <td>Flag</td>
    </tr>
  </thead>
  <tbody>
    {#each data as item, idx}
      <tr>
        <td>{idx}</td>
        <td>
          {item.country}
        </td>
        <td className="table-cell-chart">
          {item.cases}
        </td>
        <td className="table-cell-chart">
          {item.deaths}
        </td>
        <td>
          <span>
            <img src={item.countryInfo.flag} alt={`Flag of ${data.country}`} width="32px" />
          </span>
        </td>
      </tr>
    {/each}
  </tbody>
</Table>
{/if}