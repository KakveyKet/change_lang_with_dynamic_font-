<template>
  <div class="flex items-center justify-center h-screen">
    <div class="space-y-2">
      <h2
        class="text-center bg-blue-300 rounded-md text-blue-800"
        :class="dynamicFont"
      >
        {{ t("message.helloworld") }}
      </h2>

      <div class="flex items-center justify-start space-x-3">
        <button
          @click="handleChangeLangue('eng')"
          class="px-4 py-2 bg-indigo-500 rounded-lg shadow-lg text-white font-Roboto"
        >
          English
        </button>
        <button
          @click="handleChangeLangue('khm')"
          class="px-4 py-2 bg-red-500 rounded-lg shadow-lg text-white font-NotoSerif"
        >
          ភាសាខ្មែរ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t, locale } = useI18n();
    const dynamicFont = computed(() => {
      switch (locale.value) {
        case "khm":
          return "font-NotoSerif";
        case "eng":
          return "font-Roboto";

        default:
          return "";
      }
    });
    const handleChangeLangue = (lang) => {
      locale.value = lang;
    };
    return { dynamicFont, t, handleChangeLangue };
  },
};
</script>

<style></style>
