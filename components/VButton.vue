<template>
  <button class="btn btn-blue">
    Button
  </button>
</template>

<style lang="postcss" scoped>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-600;
  }
  .btn:focus {
    @apply outline-none;
  }
</style>
