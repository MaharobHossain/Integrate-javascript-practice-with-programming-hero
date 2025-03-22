console.log("This is separate file in DOM Event");

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
