var slideIndex = 1;
showDivs(slideIndex);

var modalnum;

function plusDivs(n)
{
  showDivs(slideIndex += n);
}

function currentDiv(n)
{
  showDivs(slideIndex=n)
}

function showDivs(n)
{
  var i;
  var x=document.getElementsByClassName("img_slide");
  var dots=document.getElementsByClassName("slidenumber");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";
  }
  for(i=0; i<dots.length; i++)
  {
    dots[i].className=dots[i].className.replace(" slidenumberselect", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+=" slidenumberselect";
}

function showModal(modalid)
{
  let modal=document.getElementById(modalid);
  let closemodal=document.getElementById("closebutton");
  modal.classList.add("modal-box-show");
  closemodal.classList.add("close-modal-show");
  modalnum=modalid;
}

function hideModal()
{
  let modal=document.getElementById(modalnum);
  let closemodal=document.getElementById("closebutton");
  modal.classList.remove("modal-box-show");
  closemodal.classList.remove("close-modal-show");
}

function expandAll()
{
  let x=document.getElementsByClassName("answer");
  let y=document.getElementsByClassName("expand-button");
  let btn1=document.getElementById("collapse-button-all");
  let btn2=document.getElementById("expand-button-all");
  btn2.classList.add("expand-all-active");
  btn1.classList.remove("expand-all-active");
  for(i=0; i < x.length; i++)
  {
    x[i].style.maxHeight = x[i].scrollHeight + "px";;
    x[i].style.opacity=1;
    y[i].innerHTML = "-";
  }
}

function collapseAll()
{
  let x=document.getElementsByClassName("answer");
  let y=document.getElementsByClassName("expand-button");
  let btn1=document.getElementById("collapse-button-all");
  let btn2=document.getElementById("expand-button-all");
  btn1.classList.add("expand-all-active");
  btn2.classList.remove("expand-all-active");
  for(i=0; i < x.length; i++)
  {
    x[i].style.maxHeight = null;
    x[i].style.opacity=0;
    y[i].innerHTML = "+";
  }
}

function qaSelect(qId, plusId)
{
  let answer=document.getElementById(qId);
  let btn1=document.getElementById("collapse-button-all");
  let btn2=document.getElementById("expand-button-all");
  btn1.classList.remove("expand-all-active");
  btn2.classList.remove("expand-all-active");
  if (answer.style.maxHeight)
  {
    answer.style.maxHeight = null;
    answer.style.opacity=0;
    document.getElementById(plusId).innerHTML = "+";
  }
  else
  {
    answer.style.maxHeight = answer.scrollHeight + "px";
    answer.style.opacity=1;
    document.getElementById(plusId).innerHTML = "-";
  }
}