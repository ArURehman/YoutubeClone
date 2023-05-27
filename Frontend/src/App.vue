<template>
  <div class="flex flex-col h-screen">
    <div class="h-10 flex-none">
      <Navbar @openLogin="changeLoginVisible"/>
    </div>
    <div class="flex-1 flex">
      <div class="w-40 flex-none">
        <Sidebar/>
      </div>
      <div class="flex-1 overflow-y-auto">
        <router-view/>
      </div>
    </div>
    <Login v-show="loginIsVisible" @closeLogin="changeLoginVisible" @openSignUpFL="toggleSignUpVisible"/>
    <SignUp v-show="signUpIsVisible" @closeSignUp="toggleSignUpVisible" @openLoginFS="changeLoginVisible"/>
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from '../src/components/Navbar.vue'
import Sidebar from '../src/components/Sidebar.vue'
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';

export default{
  name: 'App',
  components: {Navbar, Sidebar, Login, SignUp},
  setup(){
    let loginIsVisible = ref(false)
    let signUpIsVisible = ref(false)

    const changeLoginVisible = () => {
      if(loginIsVisible.value != signUpIsVisible.value){
        signUpIsVisible.value = !signUpIsVisible
      }
      loginIsVisible.value = !loginIsVisible.value
    }

    const toggleSignUpVisible = () => {
      if(loginIsVisible.value != signUpIsVisible.value){
        loginIsVisible.value = !loginIsVisible.value
      }
      signUpIsVisible.value = !signUpIsVisible.value
    }

    return{loginIsVisible, signUpIsVisible, toggleSignUpVisible, changeLoginVisible}
  }
}

</script>