
const sections = document.querySelectorAll('section');
for( const section of sections){
    section.style.border = '3px solid red';
    section.style.marginBottom = ' 5px';
    section.style.marginTop = '10px';
    section.style.borderRadius ="10px";
    section.style.paddingLeft = '15px';
    section.style.backgroundColor ="lightgray";
}

// const placesContainer = document.getElementById('places-container');
//     placesContainer.style.backgroundColor ='tomato';

const placesContainer = document.getElementById('places-container');
      placesContainer.classList.add('text-center');  //add korar jonno
      placesContainer.classList.remove('large-text'); //remove korar jonno