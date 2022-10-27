<template>
  <div>
    <div
      class="s_overlay"
      :style="{ display: navFunction.sidebar ? 'block' : 'none' }"
    ></div>
    <div class="content-sidebar" :class="navFunction.sidebar ? 'active' : ''">
      <div class="sidebar-wrap search-form">
        <aside id="secondary" class="widget-area">
          
        
          <section class="widget widget_meta">
            <h2 class="widget-title">
              <span class="widget-title-span"
                ><span class="first-letter">Logins</span></span
              >
            </h2>
            <ul>
              <!-- <li>
                <a href="../components/login">Admin Login</a></li>
                -->
              <li><a href="https://github.com/login" target="_blank">GitHub Login</a></li>
            </ul>
          </section>
        </aside>
      </div>
      <span class="close" @click="navFunction.sidebarToggle(false)"></span>
    </div>
  </div>
</template>

<script>
import { navFunction } from "../navFunction";
export default {
  name: `SideBar`,
  data() {
    return {
      navFunction,
    };
  },
  
};
</script>
