tributes = []
tribCount = 24

function newTrib(name, nick, strength, speed, charm, wits, intelligence){
this.fullName = name
this.nickName = nick
this.strengthStat = strength
this.speedStat = speed
this.charmStat = charm
this.witsStat = wits
this.intelligenceStat = intelligence
}

function init() {
  let gridItem = document.getElementById("gridItem")
  for (x = 1; x < 12; x++) {
    let newGrid = gridItem.cloneNode(true);
    gridItem.after(newGrid);
  }
  for (x = 1; x < 13; x++) {
    document.getElementsByClassName("gridHeader")[x - 1].id = (x + "gridHeader");
    document.getElementById(x + "gridHeader").innerHTML = ("DISTRICT " + x);
    box = document.getElementById(x + "gridHeader")
    firstTrib = box.getElementsByClassName("tributeStat")[0]
    secondTrib = box.getElementsByClassName("tributeStat")[1]
    //firstTrib.getElementsByClassName("text").each(function() {
   // $(this).id = (x + ($(this).slice(1)))
    //});
  }
  //above is to make the 12 districts + tributes / to individualize their ids.

}

function submitTributes() {
for (i = 1; x < 25; x++){

tribute = document.getElementsByClassName("tributeStat")[i]
for (x = 0; x < 7; x++){
if ( tribute.getElementsByClassName("stats")[x].value > 10 || tribute.getElementsByClassName("stats")[x].value < 0){
document.GetElementFromId("errorTag").innerHTML = "ERROR - One or more values are above 10 or below zero. Please double check and fix any mishaps."
}
}
fullname = tribute.getElementsByClassName("stats")[0].value
nick = tribute.getElementsByClassName("stats")[1].value
strength = tribute.getElementsByClassName("stats")[2].value
speed = tribute.getElementsByClassName("stats")[3].value
charm = tribute.getElementsByClassName("stats")[4].value
wits = tribute.getElementsByClassName("stats")[5].value
intelligence = tribute.getElementsByClassName("stats")[6].value


}
}


init()
