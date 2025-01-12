addLayer("I",{
	name:"Idea",
	symbol:"I",
	position:1,
	row:2,
	startData(){return{
		unlocked:true,
		points:new Decimal(0),
		c1:new Decimal(0),
		c2:new Decimal(0),
		c3:new Decimal(0),
		c4:new Decimal(0)
		}
	},
	branches:["T"],
	color:"#fda920",
	baseResource:"思维",
	baseAmount(){return player.T.points},
	resource:"想法",
	exponent:0.3,
	type:"static",
	requires:new Decimal(10),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
	},
	layerShown(){
		if(player.I.points.gte(1)||player.T.points.gte(10))return true
		else return false
	},
	milestones:
	{
		2:{
			requirementDescription:"2 想法",
			effectDescription:"可以最大购买思维",
			done(){return player.I.points.gte(2)}
		},
		4:{
			requirementDescription:"4 想法",
			effectDescription:"可以最大购买基础、普通和进阶",
			done(){return player.I.points.gte(4)}
		},
		6:{
			requirementDescription:"6 想法",
			effectDescription:"自动购买基础、普通和进阶的升级",
			done(){return player.I.points.gte(6)}
		},
		8:{
			requirementDescription:"8 想法",
			effectDescription:"自动购买思维的升级",
			done(){return player.I.points.gte(8)}
		},
		10:{
			requirementDescription:"10 想法",
			effectDescription:"自动购买基础、普通和进阶",
			done(){return player.I.points.gte(10)}
		},
		12:{
			requirementDescription:"12 想法",
			effectDescription:"自动购买思维",
			done(){return player.I.points.gte(12)}
		}
	},
	clickables:{
		11:{
			display()
			{
				if(player.I.c1.eq(0)&&hasMilestone("I",6))return "“升级自动购买机”启用中，点击关闭"
				else return "“升级自动购买机”关闭中，点击启用"
			},
			canClick(){return hasMilestone("I",6)},
			onClick(){
				if(player.I.c1.eq(1))player.I.c1=new Decimal(0)
				else player.I.c1=new Decimal(1)
			}
		},
		12:{
			display()
			{
				if(player.I.c2.eq(0)&&hasMilestone("I",8))return "“思维自动购买机”启用中，点击关闭"
				else return "“思维自动购买机”关闭中，点击启用"
			},
			canClick(){return hasMilestone("I",8)},
			onClick(){
				if(player.I.c2.eq(1))player.I.c2=new Decimal(0)
				else player.I.c2=new Decimal(1)
			}
		},
		13:{
			display()
			{
				if(player.I.c3.eq(0)&&hasMilestone("I",10))return "“三合一自动购买机”启用中，点击关闭"
				else return "“三合一自动购买机”关闭中，点击启用"
			},
			canClick(){return hasMilestone("I",10)},
			onClick(){
				if(player.I.c3.eq(1))player.I.c3=new Decimal(0)
				else player.I.c3=new Decimal(1)
			}
		},
		14:{
			display()
			{
				if(player.I.c4.eq(0)&&hasMilestone("I",12))return "“思维自动购买机 Pro Max”启用中，点击关闭"
				else return "“思维自动购买机 Pro Max”关闭中，点击启用"
			},
			canClick(){return hasMilestone("I",12)},
			onClick(){
				if(player.I.c4.eq(1))player.I.c4=new Decimal(0)
				else player.I.c4=new Decimal(1)
			}
		}
	},
	tabFormat:{
		"Main Tab":{
			content:[
				"main-display",
				"blank",
				["prestige-button",function(){return ""}],
				"blank",
				["display-text",
				function(){return "你有 "+player.I.points+" 想法，前四层增益 x"+softcap(player.I.points.add(1).mul(4),new Decimal(1),0.92)}],
				"blank",
				"blank",
				"milestones",
				"blank",
				"clickables"
			]
		}
	},
})