<template>
  <div>
    <v-hover
        v-slot:default="{ hover }"
        close-delay="50"
        open-delay="50"
    >
    <v-card
        :color="hover ? 'white' : 'transparent'"
        :elevation="hover ? 12 : 0"
        flat
        hover
        to="/detail"
    >
      <v-img
          :aspect-ratio="16 / 9"
          class="elevation-2"
          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
          height="200px"
          :src="pic"
          style="border-radius: 16px"
      >
        <v-card-text>
          <v-btn color="accent" to="category">{{btText}}</v-btn>
        </v-card-text>
      </v-img>

      <v-card-text>
        <div class="text-h5 font-weight-bold primary--text">
          {{text}}
        </div>

        <div class="text-body-1 py-4">
          {{summary}}
        </div>

        <div class="d-flex align-center">
          <v-avatar color="accent" size="36">
            <v-icon dark>mdi-vector-bezier</v-icon>
          </v-avatar>

          <div class="pl-2">{{name}}</div>
        </div>
      </v-card-text>
    </v-card>
    </v-hover>
  </div>

</template>

<script>
export default {
  props: {
    pic: {
      default: "@/assets/imgs/cyber.jpg"
    },
    btText: {
      default: 'TIPS'
    },
    text: {
      default: "How to"
    },
    summary: {
      default:"Yeah!"
    },
    name: {
      default: "Yiming Huang"
    }
  },
  data: () => ({
    pic: "@/assets/imgs/cyber.jpg"
  }),
  /*data: (
      pic="src/assets/imgs/cyber.png",
      btText='TIPS',
      text="How to use Alchemy AIGC to create your own artistic insights?",
      summary="You guys already withnessed the booming development of AICG\n" +
      "          in recent months...",
      name="Yiming Huang · March 2023"

  )=> ({
    pic: pic,
    btText: btText,
    text: text,
    summary: summary,
    name: name
  }),*/

}
</script>

<style scoped>

</style>