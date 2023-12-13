<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div class="q-col">
      <div class="kategori" style="width: 40em">
        <div class="q-pa-md" style="width: 26em">
          <q-list class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="list"
              label="KATEGORİLER"
              caption="Kadın"
              default-opened
              style="font-weight: bolder"
            >
              <q-expansion-item
                :header-inset-level="1"
                expand-separator
                icon="list"
                label="Ayakkabı"
                default-opened
              >
                <q-expansion-item
                  switch-toggle-side
                  dense-toggle
                  label="Spor Ayakkabı"
                  :header-inset-level="1"
                  :content-inset-level="2"
                >
                  <q-btn
                    flat
                    class="full-width"
                    color="dark"
                    label="Az Kullanılmış"
                    style="
                      font-size: 0.75rem;
                      text-align: center;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      opacity: 0.75;
                    "
                  /><q-btn
                    flat
                    color="dark"
                    class="full-width"
                    label="Yeni & Etiketli"
                    style="
                      font-size: 0.75rem;
                      text-align: center;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      opacity: 0.75;
                    "
                  /><q-btn
                    flat
                    class="full-width"
                    color="dark"
                    label="Yeni Gibi"
                    style="
                      font-size: 0.75rem;
                      text-align: center;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      opacity: 0.75;
                    "
                  />
                </q-expansion-item>
              </q-expansion-item>
            </q-expansion-item>

            <q-expansion-item
              :content-inset-level="0.5"
              expand-separator
              icon="place"
              label="LOKASYONLAR"
              caption="İstanbul"
              default-opened
              style="font-weight: bolder"
            >
              <q-expansion-item
                expand-separator
                :content-inset-level="0.5"
                icon="place"
                label="Türkiye"
              >
                <q-expansion-item label="İstanbul" :content-inset-level="0.5">
                  <q-btn
                    flat
                    color="dark"
                    label="Ümraniye"
                    style="opacity: 0.75"
                    class="full-width"
                  />
                  <q-btn
                    flat
                    color="dark"
                    label="Atasehir"
                    style="opacity: 0.75"
                    class="full-width"
                  />
                  <q-btn
                    flat
                    color="dark"
                    label="Pendik"
                    style="opacity: 0.75"
                    class="full-width"
                  />
                  <q-btn
                    flat
                    color="dark"
                    label="Bagcılar"
                    style="opacity: 0.75"
                    class="full-width"
                  />
                  <q-btn
                    flat
                    color="dark"
                    label="Esenyurt"
                    style="opacity: 0.75"
                    class="full-width"
                  />
                  <q-btn
                    flat
                    color="dark"
                    label="Yenikapı"
                    style="opacity: 0.75"
                    class="full-width"
                  />
                  <q-btn
                    flat
                    color="dark"
                    label="Üsküdar"
                    style="opacity: 0.75"
                    class="full-width"
                  />
                </q-expansion-item>
              </q-expansion-item>
            </q-expansion-item>
          </q-list>
          <br />
          <br /><br />
          Filtreler
          <br /><br />
          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="money"
            label="FİYAT"
            default-opened
            style="font-weight: bolder"
          >
            Bir aralık seç <br />
            <br />

            <input
              v-model="text"
              placeholder="en az"
              style="
                width: 5em;
                height: 2em;
                border: 1px solid black;
                margin: 1em;
              "
            />
            -
            <input
              v-model="text"
              placeholder="en fazla"
              style="
                width: 5em;
                height: 2em;
                border: 1px solid black;
                margin: 1em;
              "
            />
            <q-btn flat rounded color="teal-5" label="Uygula" />
          </q-expansion-item>
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
      text: ref(""),
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

      const q = query(collection(this.$db, "dolapilan2"));
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
.example-item
  height: 280px
  width: 280px
</style>
