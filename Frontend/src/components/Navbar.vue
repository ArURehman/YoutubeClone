<template>
    <div class="flex justify-between h-10 py-2 px-2 text-white bg-almostBlack font-Roboto font-[400] text-sm">
      <div class="w-36">
        <button class="px-2"><font-awesome-icon icon="fa-solid fa-bars" size="lg" style="color: #e6ebf5;" /></button>
        <button class="ml-mx-2"><font-awesome-icon icon="fa-brands fa-youtube" size="lg" style="color: #fd0d0d;" /><span>Youtube</span></button>
      </div>
      <div class="search-bar flex justify-center">
        <input class="h-6 text-xs font-[400] text-white w-96 px-2 bg-almostBlack border-almostGray border-2 rounded-l-xl" type="text" placeholder=" Search">
        <button class="h-6 px-3 bg-almostGray border-almostGray border-2 rounded-r-xl"><font-awesome-icon class="relative -left-[2px] -bottom-[0.5px]" icon="fa-solid fa-magnifying-glass" size="sm" style="color: #e6ebf5;" /></button>
      </div>
      <div v-if="!signedIn">
        <button class="mx-2"><font-awesome-icon icon="fa-solid fa-circle-user" size="lg" style="color: #e6ebf5;"/><span class="mx-1">Sign In</span></button>
      </div>
      <div v-else class="flex justify-between gap-3 px-1">
        <button><font-awesome-icon icon="fa-solid fa-bell" size="sm" style="color: #e6ebf5;" /></button>
        <button><font-awesome-icon icon="fa-solid fa-circle-user" size="lg" style="color: #e6ebf5;"/></button>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default{
  name: 'Navbar',
  setup(){
    const signedIn = ref(false)
    const countNotif = ref(0)

    const changeSignedIn = () => {
      signedIn.value = !signedIn.value
    }

    const increaseCountNotif = () => {
      countNotif.value++
    }

    return {signedIn, countNotif, increaseCountNotif, changeSignedIn}
  }
}

</script>