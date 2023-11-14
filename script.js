let quote = document.querySelector(".content > p"),
    nameContent = document.querySelector(".content > .name"),
    job = document.querySelector(".content > .occupation"),
    controls = document.querySelector(".controls"),
    controller = false;



var content = [
    {
        quote: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend thiscourse enough. I’m now in the job of my dreams and so excited about the future. ”",
        name: "Tanya Sinclair",
        job: "UX Engineer",
    },
    {
        quote: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
    }
]

function changeContent(which, content) {
    quote.textContent = content[which].quote
    nameContent.textContent = content[which].name
    job.textContent = content[which].job
    document.querySelector(".slider > img:last-of-type").style.opacity = which
}

controls.onclick = e => {
    controller = !controller
    changeContent(Number(controller), content)
}




