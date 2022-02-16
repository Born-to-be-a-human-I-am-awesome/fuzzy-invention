
/*点击事件*/
/*点击加群*/
function addGroup()
{
    window.open("https://jq.qq.com/?_wv=1027&k=ug3CkkII")
}

function addgroupTips()
{
    alert("点击下方群号即可加入友军大本营审核群！")
}

/*点击菜单项*/
function homePage()
{
    alert("这里就是首页，别再点了！")
}

function synopsisPage()
{
    alert("你点了公司简介！")
}

function solutionPage()
{
    alert("你点了解决方案！")
}

function newsPage()
{
    alert("你点了公司新闻！")
}

function dynamicPage()
{
    alert("你点了行业动态！")
}

function recruitPage()
{
    alert("你点了招贤纳才！")
}

function contactPage()
{
    alert("你点了联系我们！")
}


/*周期事件*/
/*统计网站运行时间*/
function runtime(){
        // 初始时间，月/日/年 时:分:秒
        X = new Date("2/16/2022 22:34:00");
        Y = new Date();
        T = (Y.getTime()-X.getTime());
        M = 24*60*60*1000;
        a = T/M;
        A = Math.floor(a);
        b = (a-A)*24;
        B = Math.floor(b);
        c = (b-B)*60;
        C = Math.floor((b-B)*60);
        D = Math.floor((c-C)*60);
        //信息写入到DIV中
        span.innerHTML = "本炸图官网已运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"
    }
    setInterval(runtime, 1000);