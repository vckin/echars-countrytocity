
$(".hccz").click(function(){
	$(".zuo").toggle("slow");
	$(".zuo1").toggle("slow");
});



//全选
/*$("#aid").click(function(){
	$("ul input").attr('checked',true);
	$("ul input").parent().parent().css('background-color','#2793ff');
});*/
$(".zclb ul li").click(function(){
    var rrr = $(".zclb ul li input:checked").length;

	if($(this).children("span").children("input").attr('checked') == 'checked'){
		$(this).children("span").children("input").attr('checked',false);
		$(this).css('background-color','');
	}else{
         if(rrr > 4){
            alert("最多选5个");
            return false;
        }
		$(this).css('background-color','#2793ff');
		$(this).children("span").children("input").attr('checked',true);
	}
});

$("#xsxzy").click(function(){
	$(".zuo").toggle("slow");
	$(".zuo1").toggle("slow");
	var id_list = '';
   $("ul input:checked").each(function(index){
   		id_list += $(this).val()+',';
   	});
   	if(id_list == ''){
   		alert('请选择资产集');
   		return false;
   	}
		//漏洞内容
    $.ajax({
        url: '/home/bigmap/getLdInfo',
        type: "post",
        data:{
                id_list:id_list,
            },
        datatype: "json",
        success: function(data) {
        	var info = eval('(' + data + ')');
        	$("#ldzc").html(info.ipinfo);
            $('#ldzl').html(info.numinfo);
            var listr = '';
            for (var i = 0; i < info.pinfo.length; i++) {
            	//console.log(info.pinfo[i]);
            	var wnum = '';
            	if(info.pinfo[i].pocname != undefined){
            		wnum = parseInt(info.pinfo[i].num * 100 / info.pinfo[1].num);
            		listr += '<li><span style="width: 20%;margin-left: 6%;padding-right:10px; ">'+info.pinfo[i].pocname+'</span><span style="width: 60%"><div style="background:#FFED04;width:'+wnum+'%;height:6px;margin-top:6px"></div></span><span style="width: 10%;text-align:center;">'+info.pinfo[i].num+'</span></li>';
            	}
            }
            $(".ldpm ul").html(listr);
        }
    });

    //z资源内容
     $.ajax({
        url: '/home/bigmap/getAsetsInfo',
        type: "post",
        data:{
                id_list:id_list,
            },
        datatype: "json",
        success: function(data) {
        	var info = eval('(' + data + ')');
        	//端口分布
        	option2.series[0].data = info.port_str;
            datat2.setOption(option2);
            //cate_str
            option4.series[0].data = info.cate_str;
            datat4.setOption(option4);
            //rule_tags
            option1.series[0].data = info.rule_str;
            datat1.setOption(option1);
            //console.log(info.os_str);
            //os
            option3.series[0].data = info.os_str;
            datat3.setOption(option3);
            //已选资产集
            $("#yxzcj").html(info.num);
            //已选资产
             $("#yxzc").html(info.numinfo);

        }
    });
    //地图内容
    $.ajax({
        url: '/home/bigmap/getMapInfo',
        type: "post",
        data:{
                id_list:id_list,
            },
        datatype: "json",
        success: function(data) {
        	var info = eval('(' + data + ')');
        	option.series[0].data = convertData(info);
            option.series[1].data = convertData(info.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 6));
            chart.setOption(option);
        }
    });



    return false;
});

//初始化
$(".zclb ul li").eq(0).trigger('click');
$("#xsxzy").trigger('click');