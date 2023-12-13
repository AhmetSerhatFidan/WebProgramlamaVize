<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div class="q-pa-s">
      <div class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="item in items2"
          :key="item.id"
          class="slot"
          style="margin-bottom: 120px; height: 290px; width: 290px"
        >
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <div
                class="text-h10 q-mb-xs"
                style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                "
              >
                <q-avatar size="31px">
                  <img :src="item.avatar" />
                </q-avatar>
                {{ item.satici }}
                <q-btn
                  outline
                  color="red-6"
                  icon="add"
                  size="8px"
                  label="takip et"
                />
              </div>
              <div class="row no-wrap items-center">
                <q-rating
                  v-model="ratingModel"
                  size="1.5em"
                  color="green-5"
                  icon="star_border"
                  icon-selected="star"
                />
                <span class="text-caption text-grey q-ml-sm">{{
                  item.rate
                }}</span>
              </div>
            </q-card-section>
            <q-img :src="item.source" width="262px" height="147px" />

            <q-card-actions
              style="
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              "
            >
              <div class="q-pa-md example-row-equal-width">
                <div class="row">
                  <div class="col justify-start text-h7">{{ item.info }}</div>
                  <div class="col absolute-bottom-right text-h5">
                    {{ item.fiyat }} TL
                  </div>
                </div>
              </div>
            </q-card-actions>
            <q-card-actions>
              <q-btn size="8px" unelevated unrounded color="cyan" icon="add" />
            </q-card-actions>
          </q-card>
        </q-intersection>
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
