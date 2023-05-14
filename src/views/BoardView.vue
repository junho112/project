<template>
  <v-container>
    <v-container>
      <v-sheet class="mx-auto text-center text-h2">나만의 여행 꿀꿀팁</v-sheet>
    </v-container>
    <v-simple-table>
      <template v-slot:default>
        <colgroup>
          <col width="10%" />
          <col width="55%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th class="text-left">게시물 번호</th>
            <th class="text-center">제목</th>
            <th class="text-left">작성자</th>
            <th class="text-left">작성시간</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td class="text-left">{{ item.no }}</td>
            <td class="text-left">{{ item.title }}</td>
            <td class="text-left">{{ item.author }}</td>
            <th class="text-left">{{ item.time }}</th>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
