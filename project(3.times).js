function updateData(){
    var date = new Date()
    var set_time=document.getElementById("set_time")
    set_time.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() 
    var set_date=document.getElementById("set_data")
    set_date.innerHTML = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
}
setInterval(updateData,1)
onload =  updateData()
function get_color(){
    var  get_color=document.getElementById("set_color").value
    localStorage.setItem("color1",get_color)
    document.getElementById("time").style.background= localStorage.getItem("color1")
    document.getElementById("body").style.background= localStorage.getItem("color1")

}
function set_color(){
    document.getElementById("set_color").value = localStorage.getItem("color1")
    document.getElementById("time").style.background= localStorage.getItem("color1")
    document.getElementById("body").style.background= localStorage.getItem("color1")
}
onload =  set_color();