<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div
      class="q-pa-md example-row-column"
      style="
        position: relative;
        left: 331px;
        margin-bottom: 20px;
        margin-top: 15px;
        size: 100rem;
      "
    >
      <q-img src="yorum.png" class="q-pa"></q-img>
    </div>
    <div class="q-pa-sm q-gutter-lg">
      <div class="text-weigth-bold justify-center">
        <q-img src="alt.png"></q-img>
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
