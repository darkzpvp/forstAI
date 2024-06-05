document.addEventListener('DOMContentLoaded', () => {
  
  const menuHeader = document.getElementById('menu-header');
  const logo = document.getElementById('logo');
  const hamburgerButton = document.getElementById('hamburger-button');
  const getStartedButton = document.getElementById('get-started-button');
  const menuItems = document.querySelectorAll('.header-menu li');

  function handleClose() {
    menuHeader.classList.remove('active');
  }

  function handleMenu() {
    menuHeader.classList.toggle('active');
  }

  function handleSubmit() {
    window.location.href = '/login/login.html';
  }

  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    handleClose(); 
  }
  function cerrarModal() {
    modalElement.style.display = 'none';
  }
  logo.addEventListener('click', cerrarModal);
  hamburgerButton.addEventListener('click', handleMenu);
  getStartedButton.addEventListener('click', handleSubmit);

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.getAttribute('data-section');
      scrollToSection(sectionId);
    });
  });
});


fetch('data/galeria.json')
    .then(response => response.json())
    .then(data => {
        const galleryElement = document.querySelector('.gallery');
        const modalElement = document.getElementById('modal');
        const modalImgElement = document.getElementById('modal-img');
        const captionElement = document.getElementById('caption');
        const closeElement = document.querySelector('.close');
        const prevElement = document.querySelector('.prev');
        const nextElement = document.querySelector('.next');
        
        let currentIndex = 0;

        const showModal = (index) => {
            currentIndex = index;
            modalElement.style.display = 'block';
            modalImgElement.src = `/img/galeria/${data.images[currentIndex].url}`;
            captionElement.textContent = data.images[currentIndex].title;
        };

        const hideModal = () => {
            modalElement.style.display = 'none';
        };

        const showNext = () => {
            currentIndex = (currentIndex + 1) % data.images.length;
            showModal(currentIndex);
        };

        const showPrev = () => {
            currentIndex = (currentIndex - 1 + data.images.length) % data.images.length;
            showModal(currentIndex);
        };

        closeElement.onclick = hideModal;
        prevElement.onclick = showPrev;
        nextElement.onclick = showNext;

        data.images.forEach((imagen, index) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `
                <img src="/img/galeria/${imagen.url}" alt="${imagen.title}">
                <div class="overlay">
                    <p>${imagen.title}</p>
                </div>
            `;
            div.onclick = () => showModal(index);
            galleryElement.appendChild(div);
        });

        window.onclick = (event) => {
            if (event.target === modalElement) {
                hideModal();
            }
        };
    })
    .catch(error => console.error('Error al cargar la galería:', error));

      // URL del JSON
      const url = 'data/acordeon.json';
    
      // Realizar la solicitud fetch para obtener los datos del JSON
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Seleccionar el contenedor de las pestañas
          const tabContainer = document.querySelector('.half');
    
          // Iterar sobre cada pregunta y respuesta del JSON
          data.preguntas.forEach(pregunta => {
            // Crear los elementos HTML para cada pestaña y su contenido
            const tab = document.createElement('div');
            tab.classList.add('tab');
    
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('name', 'tabs');
            input.id = pregunta.title.replace(/\s+/g, '-').toLowerCase(); // Generar un ID único para cada pestaña
    
            const label = document.createElement('label');
            label.setAttribute('for', input.id);
            label.textContent = pregunta.title;
    
            const tabContent = document.createElement('div');
            tabContent.classList.add('tab-content');
            const paragraph = document.createElement('p');
            paragraph.textContent = pregunta.answer;
    
            // Añadir los elementos creados al DOM
            tabContent.appendChild(paragraph);
            tab.appendChild(input);
            tab.appendChild(label);
            tab.appendChild(tabContent);
            tabContainer.appendChild(tab);
          });
        })
        .catch(error => console.error('Error fetching JSON:', error));