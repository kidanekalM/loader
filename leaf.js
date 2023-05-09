leaf = document.getElementById("leaf");
leaves = document.getElementsByClassName("leaf");
sidetab = document.getElementsByClassName("sidetab")[0];
console.log(leaves);
deg=4

leaves[0].style.trans="rotate(190deg)"
function rand() {
    return Math.floor(Math.random()*180).toString();
  }
for(i=0;i<leaves.length;i++){
    leaves[i].style.animationDuration=""+deg+"s";
    // leaves[i].style.backgroundColor=`rgb(${rand()},${rand()},${rand()})`
    deg+=0.1;
    if(i%2 == 0){
        console.log(getComputedStyle(leaves[i]));
        leaves[i].style.animationName="animv"
    }
}
sidetab.addEventListener("mouseover",function (params) {
    console.log(document.body.style.backgroundColor);
    if(document.body.style.backgroundColor != "rgb(39, 39, 39)"){
        document.body.style.backgroundColor="rgb(39, 39, 39)";
    }
    else{
        document.body.style.backgroundColor="white";
    }
})