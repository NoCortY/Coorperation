$(function(){
    var getCategoryRequestUrl = "/categorycontroller/getallcategory";
    var getUserMenuRequestUrl = "/usermenucontroller/getusermenulist";
    getCategoryCard();


    /**
     * 获取用户侧边栏菜单
     */
    function getUserMenuList(){
        $.ajax({
            url:getUserMenuRequestUrl,
            type:'GET',
            success:function(data){
                if(data.successFlag==true){
                    var htmlStr="";
                    $.each(data.userMenuList,function(index,item){
                        htmlStr="";
                    });
                }
            }

        })
    }
    /**
     * 获取分类卡片
     */
    function getCategoryCard(){
        $.ajax({
            url:getCategoryRequestUrl,
            type:'GET',
            success:function(data){
                if(data.successFlag==true){
                    var htmlStr = "";
                    $.each(data.categoryList,function(index,item){
                        htmlStr+="<div class='fl-col'>" +
                            "<div class='course_box'>" +
                            "<a href='course-list.html'>" +
                            "<div class='icon_relative'>" +
                            "<i class='la "+item.categoryIconCode+"' aria-hidden='true'></i>" +
                            "<span>"+item.categoryName+"</span>" +
                            "</div>" +
                            "</a>" +
                            "</div>" +
                            "</div>";
                    });
                    $("#categorylist").html(htmlStr);
                }else{
                    alert(data.message);
                }
            }
        });
    }
});