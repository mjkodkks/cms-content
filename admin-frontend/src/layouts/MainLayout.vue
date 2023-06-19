<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          Admin Dashboard
        </q-toolbar-title>
        <q-btn flat round dense icon="account_circle">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item>
                <q-item-section>USER</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section avatar class="q-text-center q-pr-sm" style="min-width: auto;">
                  <q-icon color="primary" name="logout" />
                </q-item-section>
                <q-item-section class="q-pr-md flex">ล๊อคเอ๊า</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <div class="q-mt-md ">
        <EssentialLink v-for="link in essentialLinks" v-bind="link" :key="link.title"></EssentialLink>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'บทความ',
    caption: 'จัดการบทความ',
    icon: 'article',
    link: '/dashboard/contents'
  },
  {
    title: 'สินค้า',
    caption: 'จัดการสินค้า',
    icon: 'local_mall',
    link: '/dashboard/products'
  },
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
