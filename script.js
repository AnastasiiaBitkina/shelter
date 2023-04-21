/* popup_1 */
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});
document.addEventListener('click', (e) =>{
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});
closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
/*popup_2*/
let popupBg2 = document.querySelector('.popup__bg_2');
let popup2 = document.querySelector('.popup_2');
let openPopupButton2 = document.querySelectorAll('.open-popup_2');
let closePopupButton2 = document.querySelector('.close-popup_2');

openPopupButton2.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg2.classList.add('active');
        popup2.classList.add('active');
    })
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg2) {
        popupBg2.classList.remove('active');
        popup2.classList.remove('active');
    }
});
closePopupButton2.addEventListener('click', () => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
});
/*popup_3*/
let popupBg3 = document.querySelector('.popup__bg_3');
let popup3 = document.querySelector('.popup_3');
let openPopupButton3 = document.querySelectorAll('.open-popup_3');
let closePopupButton3 = document.querySelector('.close-popup_3');

openPopupButton3.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg3.classList.add('active');
        popup3.classList.add('active');
    })
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg3) {
        popupBg3.classList.remove('active');
        popup3.classList.remove('active');
    }
});
closePopupButton3.addEventListener('click', () => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
});
/*popup_4*/
let popupBg4 = document.querySelector('.popup__bg_4');
let popup4 = document.querySelector('.popup_4');
let openPopupButton4 = document.querySelectorAll('.open-popup_4');
let closePopupButton4 = document.querySelector('.close-popup_4');

openPopupButton4.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg4.classList.add('active');
        popup4.classList.add('active');
    })
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg4) {
        popupBg4.classList.remove('active');
        popup4.classList.remove('active');
    }
});
closePopupButton4.addEventListener('click', () => {
    popupBg4.classList.remove('active');
    popup4.classList.remove('active');
});
/*popup_5*/
let popupBg5 = document.querySelector('.popup__bg_5');
let popup5 = document.querySelector('.popup_5');
let openPopupButton5 = document.querySelectorAll('.open-popup_5');
let closePopupButton5 = document.querySelector('.close-popup_5');

openPopupButton5.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg5.classList.add('active');
        popup5.classList.add('active');
    })
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg5) {
        popupBg5.classList.remove('active');
        popup5.classList.remove('active');
    }
});
closePopupButton5.addEventListener('click', () => {
    popupBg5.classList.remove('active');
    popup5.classList.remove('active');
});
/*popup_6*/
let popupBg6 = document.querySelector('.popup__bg_6');
let popup6 = document.querySelector('.popup_6');
let openPopupButton6 = document.querySelectorAll('.open-popup_6');
let closePopupButton6 = document.querySelector('.close-popup_6');

openPopupButton6.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg6.classList.add('active');
        popup6.classList.add('active');
    })
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg6) {
        popupBg6.classList.remove('active');
        popup6.classList.remove('active');
    }
});
closePopupButton6.addEventListener('click', () => {
    popupBg6.classList.remove('active');
    popup6.classList.remove('active');
});
/*popup_7*/
let popupBg7 = document.querySelector('.popup__bg_7');
let popup7 = document.querySelector('.popup_7');
let openPopupButton7 = document.querySelectorAll('.open-popup_7');
let closePopupButton7 = document.querySelector('.close-popup_7');

openPopupButton7.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg7.classList.add('active');
        popup7.classList.add('active');
    })
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg7) {
        popupBg7.classList.remove('active');
        popup7.classList.remove('active');
    }
});
closePopupButton7.addEventListener('click', () => {
    popupBg7.classList.remove('active');
    popup7.classList.remove('active');
});
/*popup_8*/
let popupBg8 = document.querySelector('.popup__bg_8');
let popup8 = document.querySelector('.popup_8');
let openPopupButton8 = document.querySelectorAll('.open-popup_8');
let closePopupButton8 = document.querySelector('.close-popup_8');

openPopupButton8.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg8.classList.add('active');
        popup8.classList.add('active');
    })
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg8) {
        popupBg8.classList.remove('active');
        popup8.classList.remove('active');
    }
});
closePopupButton8.addEventListener('click', () => {
    popupBg8.classList.remove('active');
    popup8.classList.remove('active');
});

/*burger*/

const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});


/*paginator*/

/*const blocksPerPage = 3;
const blocks = document.querySelectorAll('#blocks > div');
const pages = Math.ceil(blocks.length / blocksPerPage);
let currentPage = 1;

function showBlocks(page) {
  const startIndex = (page - 1) * blocksPerPage;
  const endIndex = startIndex + blocksPerPage;
  blocks.forEach((block, index) => {
    if (index >= startIndex && index < endIndex) {
      block.style.display = 'block';
    } else {
      block.style.display = 'none';
    }
  });
}

function updatePagination() {
  const pagesEl = document.getElementById('pages');
  pagesEl.innerText = `${currentPage} / ${pages}`;
}

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showBlocks(currentPage);
    updatePagination();
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentPage < pages) {
    currentPage++;
    showBlocks(currentPage);
    updatePagination();
  }
});

showBlocks(currentPage);
updatePagination();*/

/*const blocksPerPage = 3;
const blocks = document.querySelectorAll('#blocks > div');
const pages = Math.ceil(blocks.length / blocksPerPage);
let currentPage = 1;

function showBlocks(page) {
  const startIndex = (page - 1) * blocksPerPage;
  const endIndex = startIndex + blocksPerPage;
  const shuffledBlocks = shuffle(Array.from(blocks)).slice(startIndex, endIndex);
  blocks.forEach((block) => {
    if (shuffledBlocks.includes(block)) {
      block.style.display = 'block';
    } else {
      block.style.display = 'none';
    }
  });
}

function updatePagination() {
  const pagesEl = document.getElementById('pages');
  pagesEl.innerText = `${currentPage} / ${pages}`;
}

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showBlocks(currentPage);
    updatePagination();
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentPage < pages) {
    currentPage++;
    showBlocks(currentPage);
    updatePagination();
  }
});

showBlocks(currentPage);
updatePagination();

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}*/
/*adaptive*/

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        const blocksPerPage = 1;
        const blocks = document.querySelectorAll('#blocks_mobile > div'); 
        const pages = Math.ceil(blocks.length / blocksPerPage);
        let currentPage = 1;
        
        function showBlocks(page) {
          const startIndex = (page - 1) * blocksPerPage;
          const endIndex = startIndex + blocksPerPage;
          const shuffledBlocks = shuffle(Array.from(blocks)).slice(startIndex, endIndex);
          blocks.forEach((block) => {
            if (shuffledBlocks.includes(block)) {
              block.style.display = 'block'; 
            } else {
              block.style.display = 'none'; 
            }
          });
        }
        
        function updatePagination() {
          const pagesEl = document.getElementById('pages_mobile');
          pagesEl.innerText = `${currentPage} / ${pages}`;
        }
        
        document.getElementById('prev_mobile').addEventListener('click', () => {
          if (currentPage > 1) {
            currentPage--;
            showBlocks(currentPage);
            updatePagination();
          }
        });
        
        document.getElementById('next_mobile').addEventListener('click', () => {
          if (currentPage < pages) {
            currentPage++;
            showBlocks(currentPage);
            updatePagination();
          }
        });
        
        showBlocks(currentPage);
        updatePagination();
        
        function shuffle(array) {
          let currentIndex = array.length;
          let temporaryValue, randomIndex;
        
          while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        
          return array;
        }
    } else if (window.innerWidth < 1280) {
        const blocksPerPage = 2;
        const blocks = document.querySelectorAll('#blocks > div');
        const pages = Math.ceil(blocks.length / blocksPerPage);
        let currentPage = 1;
        
        function showBlocks(page) {
          const startIndex = (page - 1) * blocksPerPage;
          const endIndex = startIndex + blocksPerPage;
          const shuffledBlocks = shuffle(Array.from(blocks)).slice(startIndex, endIndex);
          blocks.forEach((block) => {
            if (shuffledBlocks.includes(block)) {
              block.style.display = 'block';
            } else {
              block.style.display = 'none';
            }
          });
        }
        function updatePagination() {
          const pagesEl = document.getElementById('pages');
          pagesEl.innerText = `${currentPage} / ${pages}`;
        }
        
        document.getElementById('prev').addEventListener('click', () => {
          if (currentPage > 1) {
            currentPage--;
            showBlocks(currentPage);
            updatePagination();
          }
        });
        
        document.getElementById('next').addEventListener('click', () => {
          if (currentPage < pages) {
            currentPage++;
            showBlocks(currentPage);
            updatePagination();
          }
        });
        
        showBlocks(currentPage);
        updatePagination();
        
        function shuffle(array) {
          let currentIndex = array.length;
          let temporaryValue, randomIndex;
        
          
          while (currentIndex !== 0) {
        
           
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        
          return array;
        }
    } else {
      const blocksPerPage = 3;
      const blocks = document.querySelectorAll('#blocks > div');
      const pages = Math.ceil(blocks.length / blocksPerPage);
      let currentPage = 1;
      
      function showBlocks(page) {
        const startIndex = (page - 1) * blocksPerPage;
        const endIndex = startIndex + blocksPerPage;
        const shuffledBlocks = shuffle(Array.from(blocks)).slice(startIndex, endIndex);
        blocks.forEach((block) => {
          if (shuffledBlocks.includes(block)) {
            block.style.display = 'block';
          } else {
            block.style.display = 'none';
          }
        });
      }
      
      function updatePagination() {
        const pagesEl = document.getElementById('pages');
        pagesEl.innerText = `${currentPage} / ${pages}`;
      }
      
      document.getElementById('prev').addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          showBlocks(currentPage);
          updatePagination();
        }
      });
      
      document.getElementById('next').addEventListener('click', () => {
        if (currentPage < pages) {
          currentPage++;
          showBlocks(currentPage);
          updatePagination();
        }
      });
      
      showBlocks(currentPage);
      updatePagination();
      
      function shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;
      
        while (currentIndex !== 0) {
      
          
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
    }
  });