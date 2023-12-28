function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}



function toggleIcon() {
    var icon = document.getElementById("toggleIcon");

    if (icon.src.includes("toggle-on-solid.svg")) {
        icon.src = "./icons/toggle-off-solid.svg";
    } else {
        icon.src = "./icons/toggle-on-solid.svg";
    }
}
