console.log("This is my index js file");

// Initialize the news api parameters
let source='bbc-news';
let apiKey='0d0ecd1ad057405d905e1e81dfadcabe';

// grab the news container
news_accordian = document.getElementById('news-accordian');

// create an ajax request
const xhr=new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}',true);

// what to do when response is ready
xhr.onload=function()
{
    if(this.status==200)
    {
        console.log(this.responseText)
    }

    else{
        console.log("Error occured")
    }
}

xhr.send()

let news=<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the
            collapse plugin adds the appropriate classes that we use to style each element. These classes
            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
            modify any of this with custom CSS or overriding our default variables. It's also worth noting
            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
        </div>
    </div>
</div>
