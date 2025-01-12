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
	exponent:1.3,
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
		},
		12:{
			title:"加速！！！",
			description:"点数赠益点数本身 (至少有 5 思维以解锁)",
			cost()
			{
				if(player.T.points.gte(5))return new Decimal(0)
				else return new Decimal("1e114514")
			},
			effect()
			{
				return player.points.add(1).pow(0.15).min(200)
			},
			effectDisplay(){return "x"+format(upgradeEffect("T",12))}
		},
		13:{
			title:"什么时候才到下一层",
			description:"解锁更多升级 (至少有 8 思维以解锁)",
			cost()
			{
				if(player.T.points.gte(8))return new Decimal(0)
				else return new Decimal("1e114514")
			}
		},
	},
	layerShown()
	{
		if(player.T.points.gte(1)||player.B.points.gte(20))return true
		else return false
	}
})