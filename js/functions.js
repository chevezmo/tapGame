function tapped(tapped, opp){
    let tappedHeight = parseInt(document.getElementById(`${tapped}`).style.width.replace("%","")) + 10;
    oppHeight = 100 - tappedHeight;
    tappedHeight += "%";
    oppHeight += "%";
    document.getElementById(`${tapped}`).style.width = tappedHeight;
    document.getElementById(`${opp}`).style.width = oppHeight;
}