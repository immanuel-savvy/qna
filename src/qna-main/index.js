function sideNavOn(){
    document.getElementById('sideNav').style.display='flex';
    document.getElementById('i').style.display='none';
    document.getElementById('x').style.display='flex';
    document.body.style.overflow = 'hidden';
}

function sideNavOff(){
    document.getElementById('sideNav').style.display='none';
    document.getElementById('i').style.display='flex';
    document.getElementById('x').style.display='none';
    document.body.style.overflow = 'scroll';

}