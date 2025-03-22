// <!-- option 1: on click directly html element -->
// <button onclick="document.body.style.backgroundColor = 'tomato' ">Make Tomato Background</button>


// Option 2: on click function()
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


// Option 3: on click function()
const makeAquaButton = document.getElementById('make-aqua');
makeAquaButton.onclick = makeAqua;

function makeAqua(){
    document.body.style.backgroundColor = 'aqua';
}




        //   Option 4: on click function() 
        const makePurpleButton = document.getElementById('make-purple');
        makePurpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor ='purple';
        }

            // this  up and down is final and we are regularlly use it
            
        //   Option 4 another: on click function() 
        const makePinkButton = document.getElementById('make-pink');
        makePinkButton.onclick = function makePink(){
            document.body.style.backgroundColor ='pink';
        }



        //   Option 5: on click function() 
        const chartreuseButton = document.getElementById('make-chartreuse');
        chartreuseButton.addEventListener('click', makeChartreuse)

        function makeChartreuse(){
            document.body.style.backgroundColor ='chartreuse';
        }



        //   Option 5 another: on click function() 
        const chocolateButton = document.getElementById('make-chocolate');
        chocolateButton.addEventListener('click', function makeChocolate(){
            document.body.style.backgroundColor ='chocolate';
        });

