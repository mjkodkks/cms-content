<template>
  <q-page class="">
    <form @submit="onSubmit" class="column q-gutter-sm q-pa-lg">
      <div class="row">
        <div class="col-3">
          <label for="">ชื่อเนื้อหา *</label>
        </div>
        <div class="col-6">
          <q-input outlined v-model="title" stack-label dense />
          <!-- <q-input outlined v-model="content" label="content" stack-label dense /> -->
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="">รายละเอียดของเนื้อหา</label>
        </div>
        <div class="col-6">
          <q-editor v-model="content" :definitions="{
            bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' }
          }" />
        </div>
      </div>
      <div class="row ">
        <q-btn type="submit" color="primary">บันทึก</q-btn>
      </div>
    </form>
  </q-page>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
const { handleSubmit, controlledValues } = useForm({
  initialValues: {
    title: '',
    content: ''
  }
});
const { errorMessage: errMesTitle, value: title } = useField<string>('title');
const { errorMessage: errMesContent, value: content } = useField<string>('content');
const onSubmit = handleSubmit(async (value) => {
  // Send only controlled values to the API
  // Only fields declared with `useField` or `useFieldModel` will be sent
  console.log(value);

});
</script>
