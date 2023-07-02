<script setup lang="ts">
type TSeoGlobal = {
  id: string
  title_tag: string
  description: string | null
  google_keyword: string | null
}
type TBlog = {
    id: string
    title: string
    content: string
    published: boolean
    author: string | null
    authorId: string | null
    Seo: TSeoGlobal | null
}

const config = useRuntimeConfig()
const { data: metaSeo } = await useFetch<TSeoGlobal>(`${config.public.API_URL}/api/seo`)
const { data: blogs, pending} = await useFetch<TBlog[]>(`${config.public.API_URL}/api/blog`)

console.log(metaSeo.value)
console.log(blogs.value)

useHead({
  title: metaSeo.value?.title_tag || 'Title',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: metaSeo.value?.description || '' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>

<template>
  <div>
    <h1 class="text-2xl">index page</h1>
    <template v-if="!pending">      
      <div class="border " v-for="blog in blogs" :key="blog.id">
       <div class="text-2xl">{{ blog.title }}</div>
       <div>{{ blog.content }}</div>
       <div>is published : {{ blog.published }}</div>
      </div>
    </template>
  </div>
</template>
