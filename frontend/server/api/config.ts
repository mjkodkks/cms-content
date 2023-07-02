export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const url = `${config.public.API_URL}/api/seo`
    console.log(url);
    
    const seo = await $fetch(url).catch((error) => error.data)
    console.log(seo);
    
    return seo
})
