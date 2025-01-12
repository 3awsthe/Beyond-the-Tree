let modInfo = {
	name: "Beyond the Tree",
	author: "PriorityStack",
	pointsName: "源点",
	modFiles: ["Basic.js","Normal.js","Advanced.js","Thinking.js","tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.1",
	name: "不急不急",
}

let changelog = `
<h1>修改日志</h1><br>
<h3>v0.0.1</h3><br>
什么都没有<br>
`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	let gain=new Decimal(1)
	gain=gain.mul(player.B.points.add(1))
	if(hasUpgrade("B",11))gain=gain.mul(1.5)
	if(hasUpgrade("B",12))gain=gain.mul(3)
	if(hasUpgrade("B",13))gain=gain.mul(10)
	if(hasUpgrade("B",14))gain=gain.mul(upgradeEffect("B",14))
	if(hasUpgrade("B",15))gain=gain.mul(5.5)
	if(player.N.points.gte(1))gain=gain.mul(player.N.points.add(1)).mul(3.5)
	if(hasUpgrade("N",11))gain=gain.mul(3)
	if(hasUpgrade("N",12))gain=gain.mul(2)
	if(hasUpgrade("N",13))gain=gain.mul(5)
	if(player.A.points.gte(1))gain=gain.mul(player.A.points.add(1)).mul(8)
	if(hasUpgrade("A",11))gain=gain.mul(10)
	if(hasUpgrade("A",12))gain=gain.mul(3)
	if(hasUpgrade("A",13))gain=gain.mul(3.5)
	gain=gain.mul(softcap(player.T.points.add(1),new Decimal(1),0.985))
	if(hasUpgrade("T",12))gain=gain.mul(upgradeEffect("T",12))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
