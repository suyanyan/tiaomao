// banner图
{
	let dians=document.querySelectorAll('.lunbodian ul li');
	let lunbos=document.querySelectorAll('.banner-banner ul li');
	let le=dians.length;
	let num=0;		//声明一个变量，表示从第0个轮播图开始
	dians.forEach(function(val,index){
		val.onclick=function(){
			for(let i=0;i<le;i++){
				dians[i].classList.remove('dian3');
				lunbos[i].classList.remove('active');
			}
			val.classList.add('dian3');
			lunbos[index].classList.add('active');
			num=index;		//用户点住那个轮播点便从那个轮播点无限循环
		}
	});

	// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。


	let st=setInterval(fn,1500);
	function fn(moren='r'){
		if(moren==='r'){
			num++;			
			if(num===le){
				num=0;			//判断，当num等于轮播点长度的时候，返回第一个，继续从0开始
			}
		}else if(moren==='l'){
			num--;
			if(num==-1){
				num=le-1;
			}
		}
		for(let i=0;i<le;i++){
				dians[i].classList.remove('dian3');
				lunbos[i].classList.remove('active');
			}
			dians[num].classList.add('dian3');
			lunbos[num].classList.add('active');

	}


	// clearInterval()清除样式
	// clearInterval() 方法的参数必须是由 setInterval() 返回的 ID 值。
	let bannerobj=document.querySelector('.banner');
	bannerobj.onmouseover=function(){				//鼠标移入时清除样式
		clearInterval(st);     //st代表返回的ID值

	};

	bannerobj.onmouseout=function(){				//鼠标离开时添加轮播图该有的样式
		st=setInterval(fn,1500);
	}



	// 左右箭头
	let arrowr=document.querySelector('#r');
	let arrowl=document.querySelector('#l');
	arrowr.onclick=function(){
		fn();
	}
	arrowl.onclick=function(){
		fn('l');
	}
}	




// 回到顶部
let obj=document.body.scrollTop===0?document.documentElement:document.body;
{
	let warptop=document.querySelector('.last');  //获取元素
	window.addEventListener('scroll',function(){
		warptop.onclick=function(){				//点击事件
			
			//三元运算符，查看在文档中滚动条的高度
			let scroll=obj.scrollTop;		//获取文档滚动条的高度
			let time=100;					//步长
			let t=setInterval(function(){			//时间函数
				scroll-=time;
				if(scroll<=0){
					scroll=0;
					clearInterval(t);

				}
				obj.scrollTop=scroll;				

			},50);
			
		}
	});
	
}




// 左边滚动条
{	
	let floors=document.querySelectorAll('.fllor');
	let btn=document.querySelectorAll('.nav-name');
	let li=document.querySelectorAll('.scroll .fpLift li');
	let scrollobj=document.querySelector('.scroll');
	window.onscroll=function(){
		let windowobj=document.body.scrollTop===0?document.documentElement:document.body;
		let st=windowobj.scrollTop;
		if( st>=600){
			 scrollobj.style.cssText='width:36px;height:369px;'
		}else{
			scrollobj.style.cssText='width:0;height:0';
		}
		for(let i=0;i<floors.length;i++){
			if(st>=floors[i].offsetTop-50){
				for(let i=0;i<li.length;i++){
					li[i].classList.remove('active');
				}
				li[i].classList.add('active');
			}	
		}
		btn.forEach(function(val,index){
			val.onclick=function(){
				let t=floors[index].offsetTop;
				animate(windowobj,{scrollTop:t});
			}
		})
	}
}



//顶部滚动条 
{
	let topscroll=document.querySelector('.topscroll');
	window.addEventListener('scroll',function(){
		st=obj.scrollTop;
		if(st>=600){
			topscroll.style.top='0';
		}else{
			topscroll.style.top='-50px';
		}
	})
}



// 按需加载
{
	
	window.addEventListener('scroll',function(){
		let content=document.querySelectorAll('.meili');
		let st=obj.scrollTop;
		for(let i=0;i<content.length;i++){
			if(st>content[i].offsetTop-window.innerHeight){
				let imgs=content[i].querySelectorAll('.meili img');
				// console.log(imgs);
				for(let i=0;i<imgs.length;i++){
					imgs[i].src=imgs[i].getAttribute('data-src');
				}
				
			}
		}
	});
}