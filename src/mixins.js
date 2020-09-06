export const sidebar = {
  methods:{
    closeSidebar(){
      var sidebar = document.getElementById('sidebar');
      var sidebarOverlay = document.getElementById('sidebarOverlay');
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      console.log('vro')
    }
  }
} 