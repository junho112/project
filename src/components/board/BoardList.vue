<template>
  <v-main>
    <v-container>
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
            <tr v-for="item in articles" :key="item.name">
              <td class="text-left">{{ item.article_no }}</td>
              <td class="text-left">{{ item.subject }}</td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-left">{{ item.hit }}</td>
              <th class="text-left">{{ item.register_time }}</th>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  name: "BoardList",
  components: {},
  data() {
    return {
      articles: [],
    };
  },
  created() {
    const URL = "http://localhost/board/list";
    axios
      .get(URL)
      .then((response) => {
        console.log("게시물 리스트 " + response.data);
        this.articles = response.data.articles;
        console.log(this.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>

<style scoped></style>