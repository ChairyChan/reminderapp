var modal = document.getElementById("mdalReminder");
var button = document.getElementById("btnNewReminder");
var span = document.getElementsByClassName("close")[0];
var reminders = addReminder(getReminder());
button.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        reminders = addReminder(getReminder());
        document.getElementById("body").appendChild(reminders);
    }
}
span.onclick = function() {
    modal.style.display = "none";
    reminders = addReminder(getReminder());
    document.getElementById("body").appendChild(reminders);
}
function addReminder(reminder) {
    var title = document.createElement("h1");
    var message = document.createElement("p");
    var container = document.createElement("div");
    title.innerHTML = reminder.title;
    message.innerHTML = reminder.message;
    container.appendChild(title);
    container.appendChild(message);
    return container;
}
function getReminder() {
    var rmdTitle = document.getElementById("rmdTitle").value;
    var rmdMessage = document.getElementById("rmdMessage").value;
    var oneReminder = {};
    oneReminder.title = rmdTitle;
    oneReminder.message = rmdMessage;
    console.log(oneReminder);
    document.getElementById("rmdTitle").value = "";
    document.getElementById("rmdMessage").value = "";
    return oneReminder;
}