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
			description:"源点增益 x1.5 (至少有 5 基础以解锁)",
			cost()
			{
				if(player.B.points.gte(5))return new Decimal(0)
				else return new Decimal("1e114514")
			}
		},
		12:
		{
			title:"你还在这？",
			description:"源点增益 x3 (至少有 8 基础以解锁)",
			cost()
			{
				if(player.B.points.gte(8))return new Decimal(0)
				else return new Decimal("1e114514")
			},
			unlocked()
			{
				if(hasUpgrade("B",11))return true
				else return false
			}
		},
		13:
		{
			title:"我们需要些有用的……",
			description:"源点增益 x10 (至少有 10 基础以解锁)",
			cost()
			{
				if(player.B.points.gte(10))return new Decimal(0)
				else return new Decimal("1e114514")
			},
			unlocked()
			{
				if(hasUpgrade("B",12))return true
				else return false
			}
		},
		14:
		{
			title:"你一定很无聊吧",
			description:"源点增益源点本身 (至少有 15 基础以解锁)",
			cost()
			{
				if(player.B.points.gte(15))return new Decimal(0)
				else return new Decimal("1e114514")
			},
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
			description:"源点增益 x5.5 (至少有 25 基础以解锁)",
			cost()
			{
				if(player.B.points.gte(25))return new Decimal(0)
				else return new Decimal("1e114514")
			},
			unlocked()
			{
				if(hasUpgrade("B",14)&&hasUpgrade("T",13))return true
				else return false
			}
		},
	}
})