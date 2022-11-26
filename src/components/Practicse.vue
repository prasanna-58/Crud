<template>
  <div>
    <h2>Title</h2>
    <button @click="increaseCount">Count</button>
    <span> Count value is {{ count }}</span>
    <div v-for="(item, index) in items" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>
<script>
  import Store from "@/js/store";
  export default {
    data() {
      return {
        items: [],
        count: 0,
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        this.items = await response.json();
      },
      increaseCount() {
        console.log(Store.state.count, "count");
        this.count = Store.state.count++;
      },
    },
  };
</script>
