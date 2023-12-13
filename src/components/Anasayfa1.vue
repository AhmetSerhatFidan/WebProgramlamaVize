<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div class="q-mt-none">
      <div class="row items-center justify-center q-gutter-md">
        <q-img
          src="https://cdn.dolap.com/web/images/logo-5.svg"
          style="max-width: 140px; height: 68px"
        />

        <div class="col-5">
          <q-input
            v-model="arama"
            filled
            type="search"
            placeholder="Ürün, @üye, #etiket ara"
            class="col-5"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="row items-center">
          <q-btn flat color="black" label="Markalar" />
          <q-btn flat color="black" label="giris yap" />
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row">
        <div class="col bg-deep-purple-6">
          <q-btn flat color="white" label="Giyim" class="full-width" />
        </div>
        <div class="col bg-teal-6">
          <q-btn flat color="white" label="Çanta" class="full-width" />
        </div>
        <div class="col bg-pink-8">
          <q-btn flat color="white" label="Ayakkabı" class="full-width" />
        </div>
        <div class="col bg-amber-6">
          <q-btn flat color="white" label="Aksesuar" class="full-width" />
        </div>
      </div>
    </div>
 </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export default {
  data() {
    const $q = useQuasar();
    return {
      arama: ref(""),
      ratingModel: ref(4),
      uyeler: [],
      ilanlar: [],
      items2: [],
    };
  },
  async created() {
    await this.getItems();
    const ilanlar = this.ilanlar;
  },
  methods: {
    async getItems() {
      this.items2 = [];

      const q = query(collection(this.$db, "dolapilan"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log({ ...doc.data(), id: doc.id });
        const data = doc.data();
        const { avatar, fiyat, id, info, rate, satici, source } = data;
        this.items2.push({ avatar, fiyat, id, info, rate, satici, source });
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
.slot
  height: 280px
  width: 280px
</style>
