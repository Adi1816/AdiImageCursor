const throttleFunction=(func, delay)=>{
           let prev = 0; 
      return (...args) => {
        let now = new Date().getTime(); 
     
        console.log(now-prev, delay); 
         
        if(now - prev> delay){ 
          prev = now;
          return func(...args);  
        }
      }
}
document.querySelector("#rect")
.addEventListener("mousemove", throttleFunction((dets)=>{
    var div = document.createElement("div");
    div.classList.add('imgcard');

    div.style.left=dets.clientX + 'px';
    div.style.top=dets.clientY + 'px';

    var img = document.createElement('img');
    img.setAttribute('src', 
    'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y:'0',
        ease: Power1,
        duration: .5,
    })
    gsap.to(img, {
        y:'100%',
        delay: .6,
        ease: Power4,
        // duration: .5,
    })

    setTimeout(function(){
        div.remove();
    }, 700)
}, 200)
);