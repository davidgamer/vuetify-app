<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <router-link to="/">
          <v-list-item @click>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="pessoa">
          <v-list-item @click>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Pessoas</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Agenda</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-start wrap>
          <v-flex text-justify align-self-start xs10>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
