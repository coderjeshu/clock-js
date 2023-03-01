var hour = document.getElementById('hour')
var min = document.getElementById('minute')
var second = document.getElementById('seconds')
var ampm = document.getElementById('ampm')

function am(hours){
    return hours >= 12 ? "PM" : "AM"
}

///to add 0 to the begining of number if less than 10
function format(time){
    return time.toString().padStart(2,"0")
}

function clock(){
    const date = new Date()

    let h = date.getHours() 
    let m = date.getMinutes() 
    let s = date.getSeconds()
    
    hour.textContent = format(h)
    min.textContent = format(m)
    second.textContent = format(s)
    ampm.textContent = am(h)
}




setInterval(clock ,1000)