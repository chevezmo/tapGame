function tapped(tapped, opp){
    let tappedHeight = parseInt(document.getElementById(`${tapped}`).style.height.replace("vh","")) + 10;
    oppHeight = 100 - tappedHeight;
    tappedHeight += "vh";
    oppHeight += "vh";
    document.getElementById(`${tapped}`).style.height = tappedHeight;
    document.getElementById(`${opp}`).style.height = oppHeight;
}