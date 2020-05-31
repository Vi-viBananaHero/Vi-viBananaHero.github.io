function valid (form) {
  var name = form.firstname.value;
  var fail = false;
  var nepishi = form.nepishi.value;
  var ukr_check = /^[А-Яа-яЁёЇїІіЄєҐґ']+$/;
if (ukr_check.test(name) == false)
fail = "Хто ТИ?!";
else if  (nepishi != ""){
  fail = "КАЖУ Ж НЕ ПИШИ ТУДИ";
}
if(fail)
{
  alert(fail);
  return false;
}
else
{
  return true;
}
}

// Функция, изменяющая содержание t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Функция, добавляющая слушатель к таблице
el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("четыре")}, false);
