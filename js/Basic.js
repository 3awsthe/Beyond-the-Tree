addLayer("B",{
	name:"Basic",
	symbol:"B",
	position:0,
	row:0,
	startData(){return{
		unlocked:true,
		points:new Decimal(0)
		}
	},
	color:"#10aa98",
	baseResource:"源点",
	baseAmount(){return player.points},
	resource:"基础",
	exponent:1.066,
	type:"static",
	requires:new Decimal(10),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
	},
	upgrades:
	{
		11:
		{
			title:"一直等待",
			description:"源点增益 x1.5",
			cost:new Decimal(5),
		},
		12:
		{
			title:"你还在这？",
			description:"源点增益 x3",
			cost:new Decimal(8),
			unlocked()
			{
				if(hasUpgrade("B",11))return true
				else return false
			}
		},
		13:
		{
			title:"我们需要些有用的……",
			description:"源点增益 x10",
			cost:new Decimal(10),
			unlocked()
			{
				if(hasUpgrade("B",12))return true
				else return false
			}
		},
		14:
		{
			title:"你一定很无聊吧",
			description:"源点增益源点本身",
			cost:new Decimal(15),
			effect()
			{
				return player.points.add(1).pow(0.08).min(1000)
			},
			effectDisplay(){return "x"+format(upgradeEffect("B",14))},
			unlocked()
			{
				if(hasUpgrade("B",13))return true
				else return false
			}
		},
		15:
		{
			title:"你就打算一直乘下去？！",
			description:"源点增益 x5.5",
			cost:new Decimal(25),
			unlocked()
			{
				if(hasUpgrade("B",14)&&hasUpgrade("T",13))return true
				else return false
			}
		},
		16:{
			title:"Points++",
			description:"增强基础生产源点的效率",
			cost:new Decimal(28),
			effect(){return player.B.points.add(1).pow(0.7)},
			effectDisplay(){return "x"+format(upgradeEffect("B",16))},
			unlocked()
			{
				if(player.I.points.gte(1)&&hasUpgrade("T",13)&&hasUpgrade("B",15))return true
				else return false
			}
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