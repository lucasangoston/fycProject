<template>
    <h1 class="center-text"> Billets: </h1>
    <table>
      <thead>
      <tr>
        <th>Train Number</th>
        <th>Departure</th>
        <th>Arrival</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="ticket in tickets" :key="ticket.id">
        <td>{{ ticket.trainNumber }}</td>
        <td>{{ ticket.departure }}</td>
        <td>{{ ticket.arrival }}</td>
        <td>{{ ticket.price }}</td>
      </tr>
      </tbody>
    </table>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      tickets: [
         {
           trainNumber:'9765',
           departure:'15H01',
           arrival:'17H03',
           price:'199€',
          },
        {
          trainNumber:'5749',
          departure:'12H01',
          arrival:'19H03',
          price:'389€',
        },
        {
          trainNumber:'4458',
          departure:'08H39',
          arrival:'14H45',
          price:'429€',
        },
        {
          trainNumber:'9742',
          departure:'18H01',
          arrival:'22H46',
          price:'99€',
        },
        {
          trainNumber:'3645',
          departure:'14H01',
          arrival:'15H83',
          price:'74€',
        },
      ]
    }
  }
}
</script>

<style>
  table {
    margin: 0 auto; /* center the table horizontally */
    border-collapse: collapse;
    width: 90%; /* increase the width of the table to 100% of the container */
    font-size: 1.2em; /* increase the font size of the text inside the table */
  }

  th, td {
    border: 1px solid gray; /* add a border around each cell */
    padding: 10px; /* increase the padding inside the cells */
  }
  th {
    background-color: green; /* change the background color of the table head to green */
    color: white; /* change the text color to white */
  }
  tr:nth-child(even) td {
    background-color: lightgray; /* change the background color of even rows to light gray */
  }

  .center-text{
    text-align: center;
  }


</style>