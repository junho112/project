<template>
  <v-app>
    <v-app-bar app class="white">
      <v-container class="fill-height">
        <v-app-bar-title>ENJOY TRIP 해보자</v-app-bar-title>
        <v-spacer />
        <v-btn text @click="$router.push('/')"> Home </v-btn>
        <v-btn text @click="$router.push('/board')"> 여행 꿀팁 공유 </v-btn>
        <v-btn text @click="$router.push('/attraction')"> 지역별 관광지 정보 </v-btn>

        <v-spacer></v-spacer>
      </v-container>
      <v-btn text> 로그인</v-btn>
      <v-btn text> 회원가입 </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
