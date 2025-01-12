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
	exponent:2,
	type:"static",
	requires:new Decimal(1e9),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
	},
	upgrades:
	{
		11:{
			title:"关键一步",
			description:"解锁更多升级 (至少有 2 思维以解锁)",
			cost()
			{
				if(player.T.points.gte(2))return new Decimal(0)
				else return new Decimal("1e114514")
			}
		}
	},
	layerShown()
	{
		if(player.T.points.gte(1)||player.B.points.gte(20))return true
		else return false
	}
})