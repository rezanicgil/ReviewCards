
var writeThis = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor sagittis sem, eget ornare libero malesuada sed. Sed et molestie ipsum, nec bibendum eros. Quisque at sem sit amet mauris suscipit mollis eu ultrices mi. Vivamus urna ex, lobortis at volutpat ac, tempus eu orci Maecenas.";
const reviews = [
    {
        id: 1,
        name: "Sarah Jones",
        job: "UI / UX DESIGNER",
        img: "img1.jpg",
        text: writeThis
    },
    {
        id: 2,
        name: "Arif Hajiyev",
        job: "BACK END DEVELOPER",
        img: "img2.jpg",
        text: writeThis
    },
    {
        id: 3,
        name: "Yoshihide Suga",
        job: "DEVOPS ENGINEER",
        img: "img3.jpg",
        text: writeThis
    },
    {
        id: 4,
        name: "Bill Gates",
        job: "FOUNDER",
        img: "img4.jpg",
        text: writeThis
    }

];

//selecting items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

let currentItem = 0;
window.addEventListener("DOMContentLoaded",function () {
    showPerson(currentItem);
});

function nextBtn() {
    currentItem++;
    if(currentItem == 4)
    currentItem = 0;
    showPerson(currentItem);

}

function prevBtn() {
    currentItem--;
    if(currentItem == -1)
    currentItem = 4;

    showPerson(currentItem);
}

function randomBtn() {
    currentItem = Math.floor(Math.random()*4+1);
    showPerson(currentItem);
}





function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}