<template>
  <div>
    <v-card absolute app color="primary" dark flat>
      <v-container>
        <v-row align="start">
          <v-col cols="12" md="3">
            <h4 class="text-h5 font-weight-bold">
              Alchemy AIGC
            </h4>
            <p class="text-body-1">
              Create, prototype, collaborate and turn your ideas into incredible
              products with powerful AIGC tools.
            </p>
          </v-col>

          <v-col cols="12" md="3">
            <v-list color="transparent" flat>
              <v-subheader class="text-h6">Tim</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                    v-for="(item, i) in heroui"
                    :key="i"
                    :href="item.href"
                    dense
                    target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title
                        class="text-body-1"
                        v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <v-list color="transparent" flat>
              <v-subheader class="text-h6">Stable diffusion</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                    v-for="(item, i) in shock"
                    :key="i"
                    :href="item.href"
                    dense
                    target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title
                        class="text-body-1"
                        v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <div>
              <h5 class="text-h6 font-weight-bold">
                Subscribe
              </h5>
              <p class="text-body-1">
                The brilliant works.
              </p>
            </div>

            <v-row>
              <v-col cols="8">
                <v-text-field
                    hide-details
                    label="Filled"
                    light
                    solo
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-btn block color="secondary" large>
                  Subscribe
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <div class="text-center mt-6">
          Copyright &copy;
          <a
              class="white--text"
              href="https://heroui.net"
              rel="noopener noreferrer"
              target="_blank"
          >Alchemy AIGC</a
          >
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    heroui: [
      {
        text: "Github",
        href: "https://github.com/TimTargaryen",
      },
      {
        text: "Themes",
        href: "https://github.com/",
      },
    ],
    shock: [
      {
        text: "Download",
        href: "https://github.com/TimTargaryen",
      },
      {
        text: "Issues",
        href: "https://github.com/TimTargaryen",
      },
      {
        text: "LICENSE",
        href: "https://github.com/TimTargaryen",
      },
    ],
  }),
};
</script>
