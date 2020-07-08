window.onload = setInterval(clock, 1000);
function clock() {
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var montharr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month = montharr[month];

    var day = d.getDay();
    var dayarr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    day = dayarr[day];
    
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    document.getElementById("time").innerHTML = day+", "+date+" "+month+" "+hour+":"+min+":"+sec;
}