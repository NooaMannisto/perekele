document.querySelector('.lisaa').addEventListener('click', e =>{
  e.preventDefault();
  console.log(document.querySelector('#box').value)

  console.log(document.querySelector('#box2').value);

document.querySelector('.ilmoitus').innerHTML = document.querySelector('#box').value + ": "+document.querySelector('#box2').value;

if (box.value.length == 0){
alert("fock ye")  
/*setTimeout(() => document.querySelector('.lisaa').innerHTML='PERKELE LISÄÄ PASKAA' , 3000);
*/
}
if (box2.value.length == 0){
alert("fock ye")  
}


});



document.querySelector('.merkinta').addEventListener('click', e =>{
  e.preventDefault(); 
  console.log("perkele toimi");

  if (document.querySelector('#teht_a').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked>toimi</li>' ;
}


  else {
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" >html</li>' ;
}

  if (document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked>toimi</li>' ;
}


  else {
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" >css</li>' ;
}

  if (document.querySelector('#teht_c').checked){
    document.querySelector('.boksit').children[2].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c" checked>paska koodi vois painua vittuu</li>' ;
}


  else {
    document.querySelector('.boksit').children[2].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c" >javascript</li>' ;
}

  if (document.querySelector('#teht_d').checked){
    document.querySelector('.boksit').children[3].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d" checked>toimi</li>' ;
}


  else {
    document.querySelector('.boksit').children[3].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d" >c1/cd</li>' ;
}
});