<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>
                User Profile
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-img
                        src="src/assets/imgs/Tim.png"
                        alt="User Avatar"
                        contain
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="8">
                    <h2>{{ user.name }}</h2>
                    <p>{{ user.email }}</p>
                    <p>{{ user.phone }}</p>
                    <p>{{ user.address }}</p>
                    <p>{{ user.bio }}</p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <div class="pt-16">
          <h2 class="text-h4 font-weight-bold pb-4">Featured</h2>

          <v-row>
            <v-col v-for="i in 3" :key="i" cols="6" lg="4">
              <v-card dark flat to="/detail">
                <v-img
                    :aspect-ratio="16 / 9"
                    class="elevation-2 fill-height"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    height="600px"
                    src="src/assets/imgs/final.jpg"
                >
                  <div
                      class="d-flex flex-column justify-space-between fill-height"
                  >
                    <v-card-text>
                      <v-btn color="accent">More Principles</v-btn>
                    </v-card-text>

                    <v-card-text>
                      <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                      >
                        Further Math insights about DNN(Deep Neural Network).
                      </div>

                      <div class="d-flex align-center">
                        <v-avatar color="accent" size="36">
                          <v-icon dark>mdi-vector-bezier</v-icon>
                        </v-avatar>

                        <div class="pl-2">Yiming Huang · March 2023</div>
                      </div>
                    </v-card-text>
                  </div>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </v-app>


</template>

<script>
export default {
  data: () => ({
      user: {
        name: 'Yiming Huang',
        email: 'huangyiming2002@126.com',
        phone: '15010090889',
        address: '北京工业大学',
        bio: 'God in his heaven, all\'s right with the world.'
      }
  })
}
</script>
