$(function(){
	$("a").attr("href","javascript:;").attr("rel","noopener noreferrer").attr("target","_blank");
	// banner上方的上下换
	function sx(){
		var now=0;
		var flag=true;
		var obj=$("#b1 .right");
		$(".xia",obj).click(function(){
			if(flag){
				flag=false;
				var next=now+1;
				if (next>$(".imgs",obj).size()-1) {
					next=0;
				};
				$(".imgs",obj).eq(now).animate({top:40}).end().eq(next).css("top","-40px").animate({top:0},function(){
					now=next;
					flag=true;
				})
			}
		})
		$(".shang",obj).click(function(){
			if(flag){
				flag=false;
				var next=now-1;
				if (next<0) {
					next=$(".imgs",obj).size()-1;
				};
				$(".imgs",obj).eq(now).animate({top:-40}).end().eq(next).css("top","40px").animate({top:0},function(){
					now=next;
					flag=true;
				})
			}
		})
	}
	sx();
	// 猜你喜欢换一组
	function cnxh(){
		var now=0;
		$("#cnxh .top .right").click(function(){
			var next=now+1;
			if(next>$("#cnxh .bottom ul").size()-1){
				next=0;
			}
			$("#cnxh .bottom ul").eq(now).css("display","none").end().eq(next).css("display","block")
			now=next;
		})
	}
	cnxh();
	// banner
	function banner(){
		var flag=true;
		var now=0;
		var obj=$("#banner .lb");
		var next=0;
		$(".bc").each(function(index){
			switch(index){
				case 0:
				$(this).css({"background":"rgb(233,6,23)"});
				break;
				case 1:
				$(this).css({background:"rgb(240,243,236)"});
				break;
				case 2:
				$(this).css({"background":"rgb(210,210,208)"});
				break;
				case 3:
				$(this).css({"background":"rgb(224,65,9)"});
				break;
				case 4:
				$(this).css({"background":"rgb(244,113,23)"});
				break;
				case 5:
				$(this).css({"background":"rgb(16,13,104)"});
				break;
				case 6:
				$(this).css({"background":"rgb(245,94,75)"});
				break;
				case 7:
				$(this).css({"background":"rgb(115,84,89)"});
				break;
				case 8:
				$(this).css({"background":"rgb(39,143,232)"});
				break;
				case 9:
				$(this).css({"background":"rgb(117,189,247)"});
				break;
				case 10:
				$(this).css({"background":"rgb(59,45,184)"});
				break;
				case 11:
				$(this).css({"background":"rgb(225,155,1)"});
				break;
				case 12:
				$(this).css({"background":"rgb(192,229,238)"});
				break;
				case 13:
				$(this).css({"background":"rgb(128,24,207)"});
				break;
				case 14:
				$(this).css({"background":"rgb(254,160,2)"});
				break;
				case 15:
				$(this).css({"background":"rgb(29,191,180)"});
				break;
				case 16:
				$(this).css({"background":"rgb(17,74,189)"});
				break;
				case 17:
				$(this).css({"background":"rgb(247,55,102)"});
				break;
				case 18:
				$(this).css({"background":"rgb(254,201,37)"});
				break;
				case 19:
				$(this).css({"background":"rgb(89,24,104)"});
				break;
			}
		})
		function movetime(){
			if (flag) {
				flag=false;
				if (next%2==0) {
					next=now+2;
				}else{
					next=now+1;
				}
				
				if (next>=$(".imgs",obj).size()) {
					next=0;
				};
				$(".xb",obj).eq(now).parent().removeClass("hover").end().children().css("background","#ccc")
				$(".xb",obj).eq(next).parent().addClass("hover").end().children().css("background","#c00")
				$(".bc").eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1});
				$("#banner").animate({"background-color":"blue"});
				$(".imgs",obj).eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1},function(){
					now=next;
					flag=true;
				})
			};
		}
		function move(){
			if (flag) {
				flag=false;
				next=now+1;
				if (next>=$(".imgs",obj).size()) {
					next=0;
				};
				$(".xb",obj).eq(now).parent().removeClass("hover").end().children().css("background","#ccc")
				$(".xb",obj).eq(next).parent().addClass("hover").end().children().css("background","#c00")
				$(".bc").eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1});
				$("#banner").animate({"background-color":"blue"});
				$(".imgs",obj).eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1},function(){
					now=next;
					flag=true;
				})
			};
		}
		function moveback(){
			if (flag) {
				flag=false;
				next=now-1;
				if (next<0) {
					next=$(".imgs",obj).size()-1;
				};
				$(".xb",obj).eq(now).parent().removeClass("hover").end().children().css("background","#ccc")
				$(".xb",obj).eq(next).parent().addClass("hover").end().children().css("background","#c00")
				$(".bc").eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1});
				$(".imgs",obj).eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1},function(){
					now=next;
					flag=true;
				})
			};
		}
		$(".xb",obj).mouseover(function(){
			if (flag) {
				flag=false
				next=$(".xb",obj).index($(this));
				if(next==now){
					flag=true
				}else{
					$(".xb",obj).children().css("background","#ccc");
					$(".xb",obj).eq(now).parent().removeClass("hover");
					$(this).parent().addClass("hover").end().children().css("background","#c00");
					$(".bc").eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1});
					$(".imgs",obj).eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1},function(){
						now=next;
						flag=true;
					})
				}
			};
		})

		var t=setInterval(movetime,3000);
		obj.hover(function(){
			clearInterval(t)
		},function(){
			t=setInterval(movetime,3000);
		})
		$(".btnl",obj).click(moveback);
		$(".btnr",obj).click(move);
	}
	banner();
	// 楼层轮播
	function fl(obj){
		var flag=true;
		var now=0;
		var next=0;
		function move(){
			if (flag) {
				flag=false;
				next=now+1;
				if (next>=$(".imgs",obj).size()) {
					next=0;
				};
				$(".btnn",obj).eq(now).css("background","#3e3e3e").end().eq(next).css("background","#b61b1f")
				$(".imgs",obj).eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1},function(){
					now=next;
					flag=true;
				})
			};
		}
		function back(){
			if (flag) {
				flag=false;
				next=now-1;
				if (next<0) {
					next=$(".imgs",obj).size()-1;
				};
				$(".btnn",obj).eq(now).css("background","#3e3e3e").end().eq(next).css("background","#b61b1f")
				$(".imgs",obj).eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1},function(){
					now=next;
					flag=true;
				})
			};
		}
		$(".btnn",obj).mouseover(function(){
			if (flag) {
				flag=false
				next=$(".btnn",obj).index($(this));
				if(next==now){
					flag=true
				}else{
					$(".btnn",obj).eq(now).css("background","#3e3e3e").end().eq(next).css("background","#b61b1f")
					$(".imgs",obj).eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1},function(){
						now=next;
						flag=true;
					})
				}
			};
		})
		var t=setInterval(move,3000);
		obj.hover(function(){
			clearInterval(t)
			$(".btnl",obj).css("display","block")
			$(".btnr",obj).css("display","block")
		},function(){
			t=setInterval(move,3000);
			$(".btnl",obj).css("display","none")
			$(".btnr",obj).css("display","none")
		})
		$(".btnl",obj).click(back);
		$(".btnr",obj).click(move);
	}
	$(".floor").each(function(index){
		if (index<10) {
			fl($(this));
		};
		// 楼层选项卡
		var xx=this;
		$(".fh",xx).each(function(){
			$(this).mouseover(function(){
				$(".fh",xx).css({
					"background":"#fff",
					"color":"#333"
				})
				$(this).css({
					"background":"#535353",
					"color":"#fff"
				})
				$(".fhn",xx).css("display","none");
				$(".fhn",this).css("display","block")
			})
				
		})
	})
	// 右边的操蛋二维码
	$("#fixr .bottom .ewm").hover(function(){
		$("#fixr .bottom>.bmn").animate({left:-140})
	},function(){
		$("#fixr .bottom>.bmn").animate({left:0})
	})
	// 楼层跳转
	function jump(){
		var flag=true;
		$(window).scroll(function(){
			if (flag) {
				var top=$(window).scrollTop()+$(window).height();
				if (top>=$(".floor:first").offset().top) {
					$("#fixl").css("display","block");
					$("#fixl .fl:first h5").css("color","#e3101e");
					$("#fixl .fl:first .jiao").css("display","block");
					$("#fixl .fl").each(function(index){
						if ($(window).scrollTop()>$(".floor").eq(index).offset().top-210) {
							var obj=$("#fixl .fl").eq(index);
							$("#fixl h5").css("color","#5c5c5c");
							$("#fixl .jiao").css("display","none");
							$("h5",obj).css("color","#e3101e");
							$(".jiao",obj).css("display","block");
						};
					})
				}else{
					$("#fixl").css("display","none")
				}
			};
		})
		$("#fixl .fl").each(function(index){
			var index=index;
			$(this).click(function(){
				// flag=false;
				$("body").animate({scrollTop:$(".floor").eq(index).offset().top-200+"px"},function(){
					flag=true;
					var obj=$("#fixl .fl").eq(index);
					$("#fixl h5").css("color","#5c5c5c");
					$("#fixl .jiao").css("display","none");
					$("h5",obj).css("color","#e3101e");
					$(".jiao",obj).css("display","block");
				})
					
			})
		})
		$("#fixl .bt").click(function(){
			flag=false;
			$("body").animate({scrollTop:0},function(){
				flag=true;
			})
		})
		$("#fixl .bb").click(function(){
			flag=false;
			$("body").animate({scrollTop:$("body").height()},function(){
				flag=true;
			})
		})
		$("#fixl .fl").hover(function(){
			$("h5",this).css("color","#e3101e")
		},function(){
			$("h5",this).css("color","#5c5c5c")
		})
		$("#fixr .bottom .mb:last").click(function(){
			flag=false;
			$("body").animate({scrollTop:0},function(){
				flag=true;
			})
		})
	}
	jump();
})