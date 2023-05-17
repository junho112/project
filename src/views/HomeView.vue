<template>
  <div>
    <v-parallax src="@/assets/gung.jpg" height="1000"></v-parallax>
    <v-sheet class="mx-auto text-center text-h2 py-5"
      >오늘의 추천 여행지</v-sheet
    >
    <v-sheet class="mx-auto" max-width="1000">
      <v-slide-group show-arrows>
        <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="purple white--text"
            depressed
            rounded
            @click="toggle"
          >
            Options {{ n }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-container>
      <v-row>
        <v-col v-for="n in 4" :key="n">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Top western road trips </v-card-title>

            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
      <v-container class="mx-auto">
        <v-btn> 새로고침 </v-btn>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      items: [
        {
          src: "https://i.ibb.co/0nLYsK9/gyeongbok-palace-g2c283e850-1920.jpg",
        },
        {
          src: "https://i.ibb.co/0nLYsK9/gyeongbok-palace-g2c283e850-1920.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
