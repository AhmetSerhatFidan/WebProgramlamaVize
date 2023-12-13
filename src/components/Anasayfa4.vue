<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div class="q-ma-md">
      <q-scroll-area style="height: 200px; max-width: 1200px; left: 331px">
        <div class="q-ma-md bg-white">
          <br />
          <b>En Çok Aranan Kelimeler</b><br /><br />
          <q-btn color="white" text-color="black" label="Nike" />
          <q-btn color="white" text-color="black" label="Lacoste" />
          <q-btn color="white" text-color="black" label="Reebok" />
          <q-btn color="white" text-color="black" label="Koton" />
          <q-btn color="white" text-color="black" label="Zara" />
          <q-btn color="white" text-color="black" label="Defacto" />
          <q-btn color="white" text-color="black" label="Mango" />
          <q-btn color="white" text-color="black" label="Bershka" />
          <q-btn color="white" text-color="black" label="Saat" />
          <q-btn color="white" text-color="black" label="Balenciaga" />
          <q-btn color="white" text-color="black" label="Nike Spor Ayakkabı" />
          <q-btn color="white" text-color="black" label="Kemal Tanca" />
          <q-btn color="white" text-color="black" label="Puma" />
          <q-btn color="white" text-color="black" label="Colin's" />
          <q-btn color="white" text-color="black" label="Elibse" />
          <q-btn color="white" text-color="black" label="LC Waikiki" />
          <q-btn color="white" text-color="black" label="Alvina" />
          <q-btn color="white" text-color="black" label="Columbia" />
          <q-btn color="white" text-color="black" label="Standard" />
          <q-btn color="white" text-color="black" label="Tommy Hilfiger" />
          <q-btn color="white" text-color="black" label="Harley Davidson Bot" />
          <q-btn color="white" text-color="black" label="Yargıcı" />
          <q-btn color="white" text-color="black" label="Converse" />
          <q-btn color="white" text-color="black" label="Tozlu" />
          <q-btn color="white" text-color="black" label="English Home" />
          <q-btn color="white" text-color="black" label="Joker" />
          <q-btn color="white" text-color="black" label="Beymen" />
          <q-btn color="white" text-color="black" label="Skechers" />
          <q-btn color="white" text-color="black" label="Raisa & Vanessa" />
          <q-btn color="white" text-color="black" label="Nine West" />
          <q-btn color="white" text-color="black" label="Asos" />
          <q-btn color="white" text-color="black" label="Cat Bot" />
          <q-btn color="white" text-color="black" label="Cassio Saat" />
          <q-btn color="white" text-color="black" label="Adidas" />
          <q-btn color="white" text-color="black" label="Hummel" />
          <q-btn color="white" text-color="black" label="New Balance" />
        </div>
      </q-scroll-area>
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
