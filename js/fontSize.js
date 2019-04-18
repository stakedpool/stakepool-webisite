function fontsize(_D){
    var _self = {};
    _self.resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    _self.Html = _D.getElementsByTagName("html")[0];
    _self.widthProportion = function(){
        var p = Number((_D.body&&_D.body.clientWidth||_self.Html.offsetWidth)/375).toFixed(3);
        return p>1.067?1.067:p<0.444?0.444:p;
    };
    _self.changePage = function(){
        _self.Html.setAttribute("style","font-size:"+_self.widthProportion()*100+"px");
    };
    _self.changePage();
    if (!document.addEventListener) return;
    window.addEventListener(_self.resizeEvt,_self.changePage,false);
    document.addEventListener('DOMContentLoaded', _self.changePage, false);
}
fontsize(document);
