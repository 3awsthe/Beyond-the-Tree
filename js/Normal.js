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
			description:"源点增益 x3 (至少有 3 普通以解锁)",
			cost()
			{
				if(player.N.points.gte(3))return new Decimal(0)
				else return new Decimal("1e114514")
			}
		},
		12:
		{
			title:"挂机好玩吗",
			description:"源点增益 x2 (至少有 6 普通以解锁)",
			cost()
			{
				if(player.N.points.gte(6)&&player.T.points.gte(1))return new Decimal(0)
				else return new Decimal("1e114514")
			},
			unlocked(){if(hasUpgrade("N",11)&&player.T.points.gte(1))return true}
		},
		13:
		{
			title:"挂机好玩",
			description:"源点增益 x5 (至少有 9 普通以解锁)",
			cost()
			{
				if(player.N.points.gte(9))return new Decimal(0)
				else return new Decimal("1e114514")
			},
			unlocked(){if(hasUpgrade("N",12)&&hasUpgrade("T",13))return true}
		},
	}
})