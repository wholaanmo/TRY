<template>
    <nav>
      <div>
        <p class="title">Money Log</p>
      </div>


      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/personal">PERSONAL</router-link></li>
        <li><router-link to="/group">GROUP</router-link></li>
        <li><router-link to="/view">VIEW</router-link></li>
        <li><router-link to="/about">ABOUT US</router-link></li>
      <!-- Corrected Vue.js event binding -->
      <li class="menu-button" @click="showSidebar">
        <i class="fa-solid fa-bars fa-lg"></i>
      </li>
      <div class="profile-trigger" aria-label="Profile" @click="toggleProfile">
        <i class="fas fa-user-circle" style="font-size: 30px; cursor: pointer;"></i>
      </div>
    </ul>

    <ul class="sidebar" :class="{ show: sidebarVisible }">
      <li @click="hideSidebar">
        <i class="fa-solid fa-arrow-left fa-lg"></i>
      </li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/group">Expense</router-link></li>
        <li><router-link to="/view">View</router-link></li>
        <li><router-link to="/about">About us</router-link></li>
      </ul>
    </nav>
    <div class="profile-overlay" v-show="profileVisible" @click.self="toggleProfile">
      <div class="profile-modal" v-html="profileContent"></div>
    </div>
  
    <div class="container">
      <div>
        <img src="/LOGO.png" alt="Logo Image" class="logo" />
      </div>
      <div class="content">
        <h2>Track with ease,<br /> spend with peace!</h2>
        <p>
          Money Log is a budget tracker website focused on helping users manage and track their expenses. This program allows users to record their expenses, categorize transactions, and follow their financial budget over time.
          Money Log also provides a group expense feature that allows families, roommates, and groups of friends to track their joint expenses. Users can form groups, add shared expenses and provide an overview of the group expenses.
          This feature ensures that managing personal and group finances is easy and convenient.
        </p>
      </div>
    </div>
  </template>
  


<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const profileVisible = ref(false);
    const profileContent = ref('');
    const sidebarVisible = ref(false);
    const backToTopBtn = ref(null);

    const toggleProfile = () => {
      profileVisible.value = !profileVisible.value;
      if (profileVisible.value) {
        fetch('profile.php')
          .then(response => response.text())
          .then(data => {
            profileContent.value = data;
          })
          .catch(error => console.error('Error loading profile:', error));
      }
    };

    const showSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value; // Toggle
};



    const hideSidebar = () => {
      console.log("Hiding sidebar");
      sidebarVisible.value = false;
    };

    onMounted(() => {
      window.addEventListener('scroll', () => {
        if (backToTopBtn.value) {
          backToTopBtn.value.style.display = window.scrollY > 200 ? 'block' : 'none';
        }
      });
    });

    return {
      profileVisible,  
      profileContent,  
      toggleProfile,
      sidebarVisible,  
      showSidebar,
      hideSidebar,
      backToTopBtn,
    };
  },
};
</script>

  

<style>

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #f6f8d5;
    overflow: hidden; 
}

nav {
    backdrop-filter: blur(10px); 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 50px;
    box-sizing: border-box;
    max-height: 120px; 
    background-color: #304939;
}

p.title {
    color: #f6f8d5;
    font-size: 50px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
nav ul {
    list-style-type: none; 
    padding: 0;
    margin: 0; 
    display: flex; 
    align-items: center; 
    flex-grow: 1; 
    justify-content: flex-end;
    padding-top: 50px;
    gap: 15px;
}
nav ul li a {
    color: #f6f8d5; 
    font-size: 20px;
    text-decoration: none;
    font-weight: 540;
    padding: 10px 15px;
    border-radius: 5px;
    transition: color 0.3s ease, color 0.3s ease;
    display: inline-block;
}

nav ul li a:hover {
    background-color: rgba(255, 255, 255, 0.4); 
    
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60vh;
    padding: 0 50px; /* Adds space on both sides */
    gap: 50px; 
}

.logo {
    width: 650px; /* Adjust size */
    height: 650px;
    margin-top: 190px;
    margin-left: 100px;
}

.content {
    display: flex;
    flex: 1; 
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end; 
    text-align: right;
    color: black; 
    padding-right: 100px;
    margin-right: 100px;
    margin-top: 130px;

}

.content h2 {
    font-size: 3em; 
    margin-bottom: 20px;
    margin-right: 90px;
    font-weight: bold;
    text-align: center;

}

.content p {
    font-size: 1.5em; 
    font-style: italic;
    text-align: justify;
}

.profile-trigger {
    font-size: 30px;
    color: #f6f8d5; 
    transition: color 0.3s ease, transform 0.3s ease;
    margin-left: 10px;
    cursor: pointer;
    
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
.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 300px;
    width: 250px;
    background-color: white;
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5%;
    list-style: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.sidebar.show {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateX(0);
}



.sidebar li{
    width: 100%;
}
.sidebar a{
    width: 100%;
    color: black;
    
}
.sidebar li :hover{
    background-color: #f1f1f1;
    
}
.menu-button{
    display: none;
    margin-left: 250px; 
}
 @media(max-width: 1200px){
    .content h2 {
        font-size: 4em;
    }

    .content p {
        font-size: 1em;
    }
}
  @media(max-width: 768px){
    .hideOnMobile{
        display: none;
      }
    .menu-button{
        display: block;
      }
    
    .content h2 {
        font-size: 3em;
    }
    .content p {
        font-size: 0.9em;
    }
}


</style>
