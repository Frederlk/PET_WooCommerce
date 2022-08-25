window.onload = function () {
   document.addEventListener("click", documentActions);
   // Actions (Делегирование событий Click)
   function documentActions(e) {
      const targetElement = e.target;
      if (targetElement.classList.contains('search-form__icon')) {
         document.querySelector('.search-form').classList.toggle('_active');
      } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
         document.querySelector('.search-form').classList.remove('_active');
      }
   };
   let circle = document.querySelectorAll('.parallax-1');
   for (let i = 0; i < circle.length; i++) {
      window.addEventListener('mousemove', function (e) {
         let x = e.clientX / window.innerWidth;
         let y = e.clientY / window.innerHeight;
         circle[i].style.transform = 'translate(-' + x * 5 + 'px, -' + y * 10 + 'px)';
      });
   };
   let second = document.querySelectorAll('.parallax-2');
   for (let i = 0; i < second.length; i++) {
      window.addEventListener('mousemove', function (e) {
         let x = e.clientX / window.innerWidth;
         let y = e.clientY / window.innerHeight;
         second[i].style.transform = 'translate(-' + x * 5 + 'px, +' + y * 10 + 'px)';
      });
   };
   let cross = document.querySelectorAll('.parallax-3');
   for (let i = 0; i < cross.length; i++) {
      window.addEventListener('mousemove', function (e) {
         let x = e.clientX / window.innerWidth;
         let y = e.clientY / window.innerHeight;
         cross[i].style.transform = 'translate(+' + x * 10 + 'px, +' + y * 5 + 'px)';
      });
   };
};