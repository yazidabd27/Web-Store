let cartImg=document.querySelector('#cart-img');
let cart=document.querySelector('#cart');
let largeImg=document.querySelector('.large-img img');
let thumbnails=Array.from(document.querySelectorAll('section .thumbnails div'));
let quantity=document.querySelector('#quantity span');
let minus=document.querySelector('.minus');
let plus=document.querySelector('.plus');
let addToCart=document.querySelector('#add');   
let filledCart=document.querySelector('#filled')
let emptyCart=document.querySelector('#empty')
let quantityIcon=document.querySelector('.quantity-icon');
let demand=document.querySelector('#filled .demand');
let total=document.querySelector('#filled .total');
let del=document.querySelector('#delete');
let lightBox=document.querySelector('.light-box');
let slide=document.querySelector('.slide');
let Close=document.querySelector('.close-icon');
let next=document.querySelector('#next');
let previous=document.querySelector('#previous');
let slideImg=Array.from(document.querySelectorAll('.slide .carousel-item'));
let slideThumbs=Array.from(document.querySelectorAll('.slide .thumbnails div'))
let index=1;

cartImg.onclick=function(){
    if(getComputedStyle(cart).display==='none'){
        cart.style.display='block'
    }else{
        cart.style.display='none'
    };
};

thumbnails.forEach(thumb=>{
    thumb.onclick=function(){
        largeImg.src=`images/image-product-${thumbnails.indexOf(this)+1}.jpg`;
        thumbnails.forEach(thumb=>{
            thumb.classList.remove('active');
        })
        this.classList.add('active');
    }
})

minus.onclick=function(){
    if(quantity.textContent>0){
        quantity.innerHTML=parseInt(quantity.textContent)-1;
    };
};

plus.onclick=function(){
    quantity.innerHTML=parseInt(quantity.textContent)+1;
};

addToCart.onclick=function(){
    if(quantity.textContent!='0'){
        quantityIcon.innerHTML=quantity.textContent;
        quantityIcon.style.display='block';
        emptyCart.style.display='none';
        filledCart.style.display='block';
        demand.innerHTML=quantity.textContent;
        total.innerHTML=`$${(parseInt(quantity.textContent)*125).toFixed(2)}`;
    };
};

del.onclick=function(){
    quantityIcon.style.display='none';
    filledCart.style.display='none';
    emptyCart.style.display='block';
    quantity.innerHTML='0';
};

largeImg.onclick=function(){
    lightBox.style.display='block';
    slide.style.display='block';

};

Close.onclick=function(){
    lightBox.style.display='none';
    slide.style.display='none';
};

next.onclick=function(){
    if(index<slideImg.length){
        slideImg.forEach(carousel=>{
            carousel.classList.remove('active');
        })
        slideImg[index].classList.add('active');
        slideThumbs.forEach(st=>{
            st.classList.remove('active');
            slideThumbs[index].classList.add('active')
        });
        
        index++;
    }
}

previous.onclick=function(){
    if(index>1){
        index--;
        slideImg.forEach(carousel=>{
            carousel.classList.remove('active');
        })
        slideImg[index-1].classList.add('active');
        slideThumbs.forEach(st=>{
            st.classList.remove('active');
            slideThumbs[index-1].classList.add('active')
        });
        
    }
}

slideThumbs.forEach(st=>{
    st.onclick=function(){
        slideThumbs.forEach(st=>{
            st.classList.remove('active');
        })
        st.classList.add('active');
        
        slideImg.forEach(img=>{
            img.classList.remove('active')
        })
        slideImg[slideThumbs.indexOf(st)].classList.add('active');
        index=slideThumbs.indexOf(st)+1;
    }
})
