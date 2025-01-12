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
	upgrades:
	{
		11:{
			title:"真是不错的一步",
			description:"源点增益 x10 (至少有 3 进阶以解锁)",
			cost()
			{
				if(player.A.points.gte(3))return new Decimal(0)
				else return new Decimal("1e114514")
			},
			unlocked()
			{
				if(hasUpgrade("T",11))return true
				else return false
			}
		},
		12:{
			title:"三步并做两步",
			description:"源点增益 x10 (至少有 5 进阶以解锁)",
			cost()
			{
				if(player.A.points.gte(5))return new Decimal(0)
				else return new Decimal("1e114514")
			},
			unlocked()
			{
				if(hasUpgrade("T",11)&&hasUpgrade("A",11))return true
				else return false
			}
		}
	}
})