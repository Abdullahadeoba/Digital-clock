let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")


setInterval(()=>{
    let currentTime = new Date()

    hrs.innerHTML = (currentTime.getHours()<10?"n":"") +  currentTime.getHours()
    min.innerHTML = (currentTime.getMinutes()<10?"n":"") + currentTime.getMinutes()
    sec.innerHTML = (currentTime.getSeconds()<10?"n":"") + currentTime.getSeconds()
},1000)
