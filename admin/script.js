document.addEventListener("DOMContentLoaded", () => {
    const pathname = window.location.pathname;
    const user = {
      name: "User Name",
      email: "user@example.com",
      rol: 1
    };
    const avatarUrl = "/img/usuario.svg";
  
    const profileBtn = document.querySelector(".admin-profile-btn");
    const profileMenu = document.getElementById("admin-profile-menu");
    const logoutBtn = document.getElementById("admin-logout-btn");
    const hamburgerBtn = document.querySelector(".admin-hamburger-btn");
    const mobileMenuOverlay = document.getElementById("admin-mobile-menu-overlay");
  
    document.getElementById("admin-user-name").textContent = user.name;
    document.getElementById("admin-user-email").textContent = user.email;
  
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      profileMenu.classList.toggle("admin-hidden");
    });
  
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenuOverlay.classList.toggle("admin-hidden");
    });
  
    document.addEventListener("click", () => {
      profileMenu.classList.add("admin-hidden");
      mobileMenuOverlay.classList.add("admin-hidden");
    });
  
    profileMenu.addEventListener("click", (e) => e.stopPropagation());
    mobileMenuOverlay.addEventListener("click", (e) => e.stopPropagation());
  
    logoutBtn.addEventListener("click", () => {
      console.log("Logging out...");
    });
  
    const links = document.querySelectorAll(".admin-menu-item");
    links.forEach(link => {
      if (link.getAttribute("href") === pathname) {
        link.classList.add("admin-active");
      }
    });
  
    if (pathname === "/perfil") {
      document.getElementById("navbar").classList.add("admin-fixed");
    }
  
    if (user.rol !== 1) {
      document.getElementById("admin-link").style.display = "none";
      document.getElementById("admin-mobile-admin-link").style.display = "none";
    }

    function toggleAdminHiddenClass() {
        const menuOverlay = document.getElementById('admin-mobile-menu-overlay');
        if (window.innerWidth >= 640) {
            menuOverlay.classList.add('admin-hidden');
        } 
    }

    // Ejecutar al cargar la página y al cambiar el tamaño de la ventana
    window.addEventListener('load', toggleAdminHiddenClass);
    window.addEventListener('resize', toggleAdminHiddenClass);
  });
