var age;

age = prompt("Enter your age:")
if (age >= 65) {
    output = "Free freshest and most delicious coffee for our senior guests on Friday nights!" 
    document.getElementById('verify').style.color = 'maroon';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
} else {
    output = "Enjoy Music and Make Memories!"
}

document.getElementById("verify").innerHTML = output;

