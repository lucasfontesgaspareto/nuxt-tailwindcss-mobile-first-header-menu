<template>
  <div class="bg-green-400 text-white" :class="{ 'absolute w-full h-screen top-0 left-0': menu }">
    <div class="container sm:mx-auto flex flex-wrap">
      <a href="/">
        <div class="w-auto p-6">
          <!-- Title -->
          <h1 class="hidden sm:block">SuperCarteira.com</h1>
          <!-- Icon -->
          <div class="block sm:hidden">
            <i class="fa fa-rocket"></i>
          </div>
        </div>
      </a>
      <!-- Desktop nav list -->
      <nav class="hidden sm:block">
        <ul class="flex">
          <li
            v-for="(item, index) in items"
            :key="index"
          >
            <a :href="item.href" class="hover:bg-green-500 p-6 block">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      <!-- Toggle menu mobile icon -->
      <div class="ml-auto sm:hidden p-6" @click="menu = !menu">
        <i class="fa fa-bars"></i>
      </div>
    </div>
    <!-- Mobile nav list -->
    <nav v-show="menu" class="w-full">
      <ul class="flex flex-col text-center">
        <li
          v-for="(item, index) in items"
          :key="index"
        >
          <a :href="item.href" class="hover:bg-green-500 p-6 block">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        {
          title: 'Home',
          href: '/'
        },
        {
          title: 'Entrar',
          href: '/entrar'
        }
      ]
    }
  }
}
</script>

