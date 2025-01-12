addLayer("T",{
	name:"Thinking",
	symbol:"T",
	position:1,
	row:1,
	startData(){return{
		unlocked:true,
		points:new Decimal(0)
		}
	},
	branches:["N","A","B"],
	color:"#55007f",
	baseResource:"源点",
	baseAmount(){return player.points},
	resource:"思维",
	exponent:0.8,
	type:"static",
	requires:new Decimal(1e9),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
	},
	upgrades:
	{
		11:
		{
			title:"关键一步",
			description:"解锁更多升级",
			cost:new Decimal(1)
		},
		12:{
			title:"加速！！！",
			description:"点数赠益点数本身",
			cost:new Decimal(2),
			effect()
			{
				return player.points.add(1).pow(0.15).min(200)
			},
			effectDisplay(){return "x"+format(upgradeEffect("T",12))}
		},
		13:{
			title:"什么时候才到下一层",
			description:"解锁更多升级",
			cost:new Decimal(4)
		}
	},
	canBuyMax(){
		if(hasMilestone("I",2))return true
		else return false
	},
	autoUpgrade(){
		if(hasMilestone("I",8)&&player.I.c2.eq(0))return true
		else return false
	},
	autoPrestige(){
		if(hasMilestone("I",12)&&player.I.c4.eq(0))return true
		else return false
	},
	tabFormat:{
		"Main Tab":{
			content:[
				"main-display",
				"blank",
				["prestige-button",function(){return ""}],
				"blank",
				["display-text",
				function(){return "你有 "+player.T.points+" 思维，前三层增益 x"+softcap(player.T.points.add(1),new Decimal(1),0.985)}],
				"blank",
				"blank",
				"upgrades"
			]
		}
	},
	layerShown()
	{
		if(player.T.points.gte(1)||hasUpgrade("T",11)||player.B.points.gte(20)||player.I.points.gte(1))return true
		else return false
	}
})