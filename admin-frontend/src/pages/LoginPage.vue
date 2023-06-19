<template>
  <q-page class="row items-center justify-evenly">
    <div style="margin-top: -10rem;" class="">
      <h2 class="text-h2 q-ma-lg">Admin Portal</h2>
      <q-input outlined v-model="username" label="ชื่อผู้ใช้งาน" stack-label :dense="true" />
      <q-input outlined v-model="password" type="password" label="รหัสผ่าน" stack-label :dense="true" class="q-mt-md">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>
      <div>
        <q-btn @click="login" :loading="loading" icon-right="send" label="ล๊อคอิน" color="primary"
          class="q-mt-lg q-w-full q-ml-auto w-full" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const username = ref('')
const password = ref('')
const isPwd = ref(true)
const loading = ref(false)

async function login() {
  loading.value = true
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        text: 'success'
      })
    }, 1200);
  })
  loading.value = false
  router.push('/dashboard')
}
</script>
