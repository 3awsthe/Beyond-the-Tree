addLayer("N",{
	name:"Normal",
	symbol:"N",
	position:1,
	row:0,
	startData(){return{
		unlocked:true,
		points:new Decimal(0)
		}
	},
	branches:["B"],
	color:"#eaff00",
	baseResource:"源点",
	baseAmount(){return player.points},
	resource:"普通",
	exponent:1.43,
	type:"static",
	requires:new Decimal(100),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
	},
	upgrades:
	{
		11:
		{
			title:"这有用吗？",
			description:"源点增益 x3",
			cost:new Decimal(3),
		},
		12:
		{
			title:"挂机好玩吗",
			description:"源点增益 x2",
			cost:new Decimal(6),
			unlocked(){if(hasUpgrade("N",11)&&player.T.points.gte(1))return true}
		},
		13:
		{
			title:"挂机好玩",
			description:"源点增益 x5",
			cost:new Decimal(9),
			unlocked(){if(hasUpgrade("N",12)&&hasUpgrade("T",13))return true}
		}
	},
	canBuyMax(){
		if(hasMilestone("I",4))return true
		else return false
	},
	autoUpgrade()
	{
		if(hasMilestone("I",6)&&player.I.c1.eq(0))return true
		else return false
	},
	autoPrestige()
	{
		if(hasMilestone("I",10)&&player.I.c3.eq(0))return true
		else return false
	}
})