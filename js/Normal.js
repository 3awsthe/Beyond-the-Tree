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
	exponent:1.5,
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
	}
})