addLayer("A",{
	name:"Advanced",
	symbol:"A",
	position:2,
	row:0,
	startData(){return{
		unlocked:true,
		points:new Decimal(0)
		}
	},
	branches:["N"],
	color:"#ff8102",
	baseResource:"源点",
	baseAmount(){return player.points},
	resource:"进阶",
	exponent:1.8,
	type:"static",
	requires:new Decimal(1000),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
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
	},
	upgrades:
	{
		11:{
			title:"真是不错的一步",
			description:"源点增益 x6.66",
			cost:new Decimal(3),
			unlocked()
			{
				if(hasUpgrade("T",11))return true
				else return false
			}
		},
		12:{
			title:"三步并做两步",
			description:"源点增益 x2",
			cost:new Decimal(5),
			unlocked()
			{
				if(hasUpgrade("T",11)&&hasUpgrade("A",11))return true
				else return false
			}
		},
		13:{
			title:"四步并做两步",
			description:"源点增益 x3.5",
			cost:new Decimal(7),
			unlocked()
			{
				if(hasUpgrade("T",13)&&hasUpgrade("A",12))return true
				else return false
			}
		}
	}
})