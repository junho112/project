<template>
  <v-container>
    <v-container>
      <v-sheet class="mx-auto text-center text-h2">나만의 여행 꿀꿀팁</v-sheet>
    </v-container>
    <router-view></router-view>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        { no: "1", title: "여행꿀팁", author: "변준호", time: "11:30" },
        { no: "2", title: "여행꿀팁", author: "변준호", time: "11:30" },
        { no: "3", title: "여행꿀팁", author: "변준호", time: "11:30" },
        { no: "4", title: "여행꿀팁", author: "변준호", time: "11:30" },
        { no: "5", title: "여행꿀팁", author: "변준호", time: "11:30" },
        { no: "6", title: "여행꿀팁", author: "변준호", time: "11:30" },
        { no: "7", title: "여행꿀팁", author: "변준호", time: "11:30" },
      ],
    };
  },
};
</script>
<style lang=""></style>
