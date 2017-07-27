/**
 * Created by admin on 2016/7/2.
 */
var imgs=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"];
var ul=document.getElementById("ul");
for(var i=0;i<imgs.length;i++){
    var img=document.createElement("img");
    img.src="img/"+imgs[i];
    ul.appendChild(img);
}
function star(){
    var imgLis=ul.getElementsByTagName("img");
    var imgUnm=imgLis.length;
    var oDeg=360/imgUnm;
    for(var j=0;j<imgUnm;j++){
        var liStyle=imgLis[j].style;
        liStyle.transform="rotateY("+j*oDeg+"deg) translateZ(300px)";
        liStyle.transition="transform 2s "+(imgUnm-1-j)*0.1+"s";
    }
}
var bforX,bforY,aftX,aftY,timer,minX,minY,rotX,rotY;
window.onload=function(){
    setTimeout(star,500);
    document.onmousedown=function(e){
        bforX=e.clientX;
        bforY=e.clientY;
        this.onmousemove=function(e){
            aftX=e.clientX;
            aftY=e.clientY;
            minX=aftX-bforX;
            minY=bforY-aftY;
            rotX=minX*0.6;
            rotY=minY*0.2;
            ul.style.transform="rotateY("+rotX+"deg) rotateX("+rotY+"deg)";
        }
        bforX=aftX;
        bforY=aftY;
    }
    document.onmouseup=function(){
        this.onmousemove=null;
        timer=setInterval(function(){
            minX*=0.95;
            minY*=0.95;
            rotX+=minX*0.3;
            rotY*-minY*0.1;
            ul.style.transform="rotateY("+rotX+"deg) rotateX("+rotY+"deg)";
            if(Math.abs(minX)<0.1&&Math.abs(minY)<0.1){
                clearInterval(timer);
            }
        },20)
    }
}