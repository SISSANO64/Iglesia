const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if(entry.isIntersecting){
         entry.target.classList.add('show')
      }
      // }else{
      //    entry.target.classList.remove('show')
      //    console.log(entry.target.classList)
      // }
   });
});

const hiddenElements = document.querySelectorAll(".hidden");
console.log(hiddenElements)

hiddenElements.forEach((el) => observer.observe(el));
