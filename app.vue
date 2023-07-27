<template>
<DelayHydration>
  <div class="bg-gradient-to-t from-base-200 via-base-200 to-base-900">
    <SeoKit />
    <!-- a. Generates browser screenshots for every page -->
    <OgImageScreenshot />
    <!-- b. Generate satori images for every page (uses the default template) -->
    <OgImageStatic />
    <NuxtPage />
  </div>
</DelayHydration>
</template>
