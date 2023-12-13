<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-blue text-white" height-hint="98">
      <q-tabs align="left">
        <q-route-tab to="/" label="Anasayfa1" />
        <q-route-tab to="/Anasayfa2" label="anasayfa2" />
        <q-route-tab to="/Anasayfa3" label="anasayfa3" />
        <q-route-tab to="/Anasayfa4" label="anasayfa4" />
        <q-route-tab to="/Anasayfa5" label="anasayfa5" />
        <q-route-tab to="/Ayakkabi1" label="ayakkabi1" />
        <q-route-tab to="/Ayakkabi2" label="ayakkabi2" />
        <q-route-tab to="/Ayakkabi3" label="ayakkabi3" />
        <q-route-tab to="/Ayakkabi4" label="ayakkabi4" />
        <q-route-tab to="/Kaydol" label="Üye ol sayfası" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>


export default {
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped></style>
