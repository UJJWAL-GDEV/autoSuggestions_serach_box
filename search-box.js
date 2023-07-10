let suggestions = ['let, const and var in javascript',
'best programming language to learn in 2023',
'how to learn javascript',
'how to learn web development',
'real reviews of kerela story',
'how to learn android development',
'basics of flutter',
'life in banglore',
'BJP is ready for 2024 lok sabha elections',
'hitesh chaudhary next.js',
'strategies for cracking the annual package of 15LPA',
'tips to crack javascript interviews',
'what is inheritance',
'adipurush is against hindus and defaming indian ancient culture',
'bootstrap projects for beginners',
'tutorials on reactJS for beginners in hindi',
'chatGPT',
'taarak mehta ka ooltah chashma',
'JS Conf 2023 in bengaluru',
'narendra modi biography',
'which college is best for MCA in Uttar Pradesh and Delhi NCR',
'which is best react or angular',
'how to make projects using css'];








const inputBox = document.querySelector("input");
const suggestionBox = document.querySelector(".suggestion-box");

inputBox.addEventListener('keyup', function(){
    let result = [];
    let input = this.value;

    if(input.length){
        result = suggestions.filter((suggestion)=>{
            return suggestion.toLowerCase().includes(input.toLowerCase());
        })
        console.log(result);
    }
    display(result);

    if(!result.length){
        suggestionBox.innerHTML = '';
    }

})

function display(result){
    const item = result.map((res)=>{
        return "<li onclick = selectInput(this)>" + res + "</li>";
    });

    suggestionBox.innerHTML = "<ul>" + item.join(' ') + "</ul>";
}

function selectInput(selectedItem){
    inputBox.value = selectedItem.innerHTML;
    suggestionBox.innerHTML = "";
}