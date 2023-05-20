<template>
  <v-container>
    <v-row>
      <v-col cols="6" v-bind="$attrs" v-on="$listeners">
        <v-card height="500" max-height="500">
          <v-form style="align-items: center">
            <br/>
            <v-text-field label="Descript" v-model="caption"></v-text-field>
            <v-text-field label="Tag" v-model="tag"></v-text-field>
            <v-text-field label="style" v-model="style"></v-text-field>
            <v-layout align-center justify-center fill-height row>
              <v-btn color="primary" @click="onSubmit" style="justify-self: center" class="submit-btn">Submit</v-btn>
            </v-layout>
          </v-form>
          <br/>
          <v-img :src="imageUrl" v-if="imageUrl" max-height="300px"></v-img>
          <canvas ref="canvas" style="display: none;"></canvas>
        </v-card>
      </v-col>
      <v-col cols="6" v-bind="$attrs" v-on="$listeners">
        <v-card height="500">
          <v-card-title>Generated IMG</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
      caption: 'default dummy',
      style: 'default dummy',
      tag: 'default dummy',
      imageSize: '',
      imageType: ''
    }
  },
  methods: {
    onImageUpload(event) {
      this.imageUrl = URL.createObjectURL(event.target.files[0])
      this.imageSize = `${event.target.files[0].size} bytes`
      this.imageType = event.target.files[0].type
    },
    onSubmit() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.font = '48px serif';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(this.caption, canvas.width/2, canvas.height/2);
        const dataURL = canvas.toDataURL();
        this.imageUrl = dataURL;
      };
      img.src = this.imageUrl;
    }
  }
}
</script>
<style>
.submit-btn {
  background-color: #2196f3;
  color: black;
  font-size: 1.2rem;
  padding: 10px 95px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.submit-btn:hover {
  background-color: #1976d2;
}

@media (max-width: 960px) {
  .switch-col {
    order: -1;
  }
}
</style>
