<template>
    <header :class="{ 'scrolled-nav': scrolledNav}">
    <nav>
      <div class="branding">
        <img src="/LOGO.png" alt="Money Log Logo"/>
      </div>
    <ul v-show="!mobile" class="navigation">
      <li><router-link class="link" to="/home">HOME</router-link></li>
      <li><router-link class="link" to="/personal">PERSONAL</router-link></li>
      <li><router-link class="link" to="/group">GROUP</router-link></li>
      <li><router-link class="link" to="/view">VIEW</router-link></li>
      <li><router-link class="link" to="/about">ABOUT</router-link></li>     
      <router-link to="/profile" class="profile-trigger" aria-label="Profile">
        <i class="fas fa-user-circle" style="font-size: 30px; cursor: pointer;"></i>
    </router-link>
  
    </ul>
    <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav }"></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav">
      <li><router-link class="link" to="/home">HOME</router-link></li>
      <li><router-link class="link" to="/personal">PERSONAL</router-link></li>
      <li><router-link class="link" to="/group">GROUP</router-link></li>
      <li><router-link class="link" to="/view">VIEW</router-link></li>
      <li><router-link class="link" to="/about">ABOUT US</router-link></li>   
      <router-link to="/profile" class="user" aria-label="Profile">
        <i class="fas fa-user-circle" style="font-size: 30px; cursor: pointer;"></i>
      </router-link>
  
  
    </ul>
    </transition>
    </nav>
    </header>

    </template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowwidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
    this.mobileNav = !this.mobileNav;
  },

  updateScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      return;
    }
    this.scrolledNav = false;
  },

  checkScreen(){
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <=750){
      this.mobile = true;
      return;
    }
    this.mobile = false;
    this.mobileNav = false;
    return;
  },
},
};

</script>

<style>
header {
  background-color:#2a4935;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color:#f6f8d5;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 8px 0;
  transition: .5s ease all;
  width: 90%;
  margin: 0 auto;
  @media(min-width: 1140px) {
  nav {
      margin-left: 20px; /* Moves nav slightly to the right only on large screens */
  }
  }

ul, 
.link {
  font-weight: 500;
  color: #f6f8d5;
  list-style: none;
  text-decoration: none;
}

.user {
  font-weight: 500;
  color: #f6f8d5;
  list-style: none;
  text-decoration: none;
}


li {
  text-transform: uppercase;
  padding: 14px;
  margin-left: 15px;
}

.link {
  font-size: 16px;
  transition: .5s ease all;
  padding-bottom: 1px;
  border-bottom: 2px solid transparent;

  &:hover {
    color: black;
    border-color: black;
  }
}

.branding {
  display: flex;
  align-items: center;

  img {
    width: 128px;
    transition: .5s ease all;
    margin-left: -10px;
  }
}

.navigation {
  display: flex;
  align-items: end;
  flex: 1;
  justify-content: flex-end;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;

  i {
    cursor: pointer;
    font-size: 24px;
    transition: .8s ease all;
  }
}

.icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 200px;
  height: 100vh;
  background-color: #D6EFD8;
  top: 0;
  left: 0;


  li {
    margin-left: 0;
  }
    .link {
      color: #000;
  }

    .user {
      color: #000;
      margin-left: 15px;
      margin-top: 5px;
  }
}

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition:  1s ease all;
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to{
    transform: translateX(0);
  }
}

.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba (0, 0, 0, 0.6);

  nav {
    padding: 18px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba (0, 0, 0, 0.6);
      
      }
    }
  }
}


.profile-trigger {
  font-size: 30px;
  color: #f6f8d5; 
  transition: color 0.3s ease, transform 0.3s ease;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  right: -20px; /* Move right */
  bottom: 10px;
  text-decoration: none; /* Removes underline */

&:hover {
    color: black;
    border-color: black;
  }
}

.profile-trigger:hover {
  transform: scale(1.1); 
  
}
.profile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

</style>
