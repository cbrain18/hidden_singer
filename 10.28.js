<script> 
    let currentImage = 0; 
    const images = document.querySelectorAll('.slideshow img'); 
  
    function showImage(index) { 
        images.forEach((image, i) => { 
            if (i === index) { 
                image.style.display = 'block'; 
            } else { 
                image.style.display = 'none'; 
            } 
        }); 
    } 
  
    function nextImage() { 
        currentImage++; 
        if (currentImage >= images.length) { 
            currentImage = 0; 
        } 
        showImage(currentImage); 
    } 
  
    function previousImage() { 
        currentImage--; 
        if (currentImage < 0) { 
            currentImage = images.length - 1; 
        } 
        showImage(currentImage); 
    } 
  
    showImage(currentImage); 
    setInterval(nextImage, 3000); // 3초마다 다음 이미지로 전환 
</script> 
 