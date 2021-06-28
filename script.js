// zakladki
function openTab(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // zadanie 1
  const consolButton = document.getElementById('consolButtton')

  consolButton.addEventListener('click', function (event) {
    console.log("zadanie 1");
  })


  const alertButton = document.getElementById('alertButton')

  alertButton.addEventListener('click',function (event) {
      alert("zadanie 1")
  })

  //zadanie 2

  let zad2Validate = document.getElementById('zad2Validate')
  zad2Validate.addEventListener('click', styleChange)

  let zad2Text = document.getElementById('zad2Text')
  console.log(zad2Text.textContent)

  function styleChange(radio){
  let zad2Radio = document.getElementsByTagName("input")
  for (let i = 0; i < zad2Radio.length; i++){
    if(zad2Radio[i].checked){
      styleCase(i)
    }
  }
  function styleCase(i){
    switch(i){
      case 0:
        zad2Text.style.color = 'black'
        break

      case 1:
        zad2Text.style.color = randomColror()
        break

      case 2:
      alert("nw")
        break
    }
  }
  }

  function randomColror(){
    let random = Math.floor((Math.random()*5)+1)
    switch(random){
      case 1:
        return "blue"
    
      case 2:
        return "red"
    
      case 3:
        return "orange"
    
      case 4:
        return "yellow"
    
      case 5:
        return "pink"
    }

  }

// zadanie 3
const form = document.getElementById('form');
const error = document.getElementById('error');
const firstWord = document.getElementById('firstWord')
const secondWord = document.getElementById('secondWord')
let connectResult = document.getElementById('connectResult')
const connectButton = document.getElementById('connectButton')

firstWord.oninvalid = invalid
secondWord.oninvalid = invalid
form.onsubmit = submit

function invalid(event){
  error.removeAttribute('hidden');
}

function submit(event) {
  form.setAttribute('hidden', '');
  alert(connectResult.textContent = firstWord.value + secondWord.value) 
}


//zadanie 4
function findScreenCoords(mouseEvent)
{
  let xpos;
  let ypos;

  xpos = mouseEvent.screenX;
  ypos = mouseEvent.screenY;
  document.getElementById("screenCoords").innerHTML = xpos + ", " + ypos;
}
document.getElementById('startTracking').addEventListener('click', function (event){
  document.getElementById("screenCoords").removeAttribute('hidden');
} )

document.getElementById('stopTracking').addEventListener('click', function (event){
  document.getElementById("screenCoords").setAttribute('hidden', '');
} )

onmousemove = findScreenCoords;

//zadanie 5

document.getElementById("zad17a").addEventListener("click", function() {
  let textInput = document.getElementById("zad17Text").value

  let output = textInput[0] + textInput[1] + textInput[2]
  if (textInput.length < 3) {
    output = "pole wymaga co najmniej 3 znków"
    
  }

  document.getElementById('modal').style.display='block'
  document.getElementById("zad17Result").textContent = output
})

document.getElementById("zad17b").addEventListener("click", function() {

  let textInput = document.getElementById("zad17Text").value

  let output = textInput[textInput.length-2]

  if (textInput.length < 3) {
    output = "pole wymaga co najmniej 2 znków"
    
  }

  document.getElementById('modal').style.display='block'
  document.getElementById("zad17Result").textContent = output
})


document.getElementById("zad17c").addEventListener("click", function() {

  let textInput = document.getElementById("zad17Text").value

  let output = textInput[textInput.length-4] + textInput[textInput.length-3] + textInput[textInput.length-2] + textInput[textInput.length-1]

  if (textInput.length < 4) {
    output = "pole wymaga co najmniej 4 znków"
    
  }

  document.getElementById('modal').style.display='block'
  document.getElementById("zad17Result").textContent = output
})


document.getElementById("zad17d").addEventListener("click", function() {

  let textInput = document.getElementById("zad17Text").value

  let output = textInput.toLowerCase()

  if (textInput.length < 1) {
    output = "pole wymaga znków"
    
  }

  document.getElementById('modal').style.display='block'
  document.getElementById("zad17Result").textContent = output
})

document.getElementById("zad17e").addEventListener("click", function() {

  let textInput = document.getElementById("zad17Text").value

  let output = textInput.toUpperCase()

  if (textInput.length < 1) {
    output = "pole wymaga znków"
    
  }

  document.getElementById('modal').style.display='block'
  document.getElementById("zad17Result").textContent = output
})

document.getElementById("zad17f").addEventListener("click", function() {

  let textInput = document.getElementById("zad17Text").value
  let word = textInput.toString()
  var newWord = new Array()
  console.log(word.length)
  for (let i = 0; i < word.length; i++) {
    if (i % 2 == 0) {
      newWord[i] = word[i].toLowerCase()
      let a = word[i].toLowerCase()
      newWord[i] = a
      console.log(newWord[i])
    }
    else {
      newWord[i] = word[i].toUpperCase()
    }
  }
    

  if (textInput.length < 1) {
    output = "pole wymaga znków"
    
  }
  let result = newWord.toString()
  result = result.replaceAll(',','')

  document.getElementById('modal').style.display='block'
  document.getElementById("zad17Result").textContent = result
})


document.getElementById("zad17g").addEventListener("click",function() {


  let textInput = document.getElementById("zad17Text").value
  let output = ""

  output = textInput.replaceAll(' ','')

  if (textInput.length < 1) {
    output = "pole wymaga znków"
    
  }


  document.getElementById('modal').style.display='block'
  document.getElementById("zad17Result").textContent = output
  
})

document.getElementById("zad17h").addEventListener("click",function() {

  let textInput = document.getElementById("zad17Text").value
  let output = ""

  output = textInput.replace(new RegExp("[aeiou]", "gi"), "") //zamien samogloski a,e,i,o,u na "" flagi global i insensitive

  document.getElementById('modal').style.display='block'
  document.getElementById("zad17Result").textContent = output
  
})


document.getElementById("zad17i").addEventListener("click",function() {

  let textInput = document.getElementById("zad17Text").value
  let tab = textInput.split("")

  let reverseTab = tab.reverse()

  let output = reverseTab.join("")

  document.getElementById('modal').style.display='block'
  document.getElementById("zad17Result").textContent = output
})


document.getElementById("zad24Button").addEventListener("click", function () {

  date1 = new Date(document.getElementById("zad24Date1").value)
  date2 = new Date(document.getElementById("zad24Date2").value)

  let diffTime =(date1.getTime() - date2.getTime());
 
  let daysDiff = diffTime / (1000 * 3600 * 24);
   
  if(isNaN(daysDiff) || daysDiff > 0)
  {
    alert("Błędne daty")
  }
  else alert(daysDiff*-1)


  
})

//zad20 lotto
document.getElementById("zad20Button").addEventListener("click",function(){
//czytanie wartosci podanych przez uzytkownika
  let a = document.getElementById("zad201").value
  let b = document.getElementById("zad202").value 
  let c = document.getElementById("zad203").value 
  let d = document.getElementById("zad204").value 
  let e = document.getElementById("zad205").value 
  let f = document.getElementById("zad206").value

  //validacja wartosci 1-48
  for (let i = 0; i < 6; i++) {
    if (document.getElementById("zad20"+(i+1)).value <= 0 || document.getElementById("zad20"+(i+1)).value >= 48) {
      alert("prosze podać wartości międzi 1 a 48")
      return 0
    }
    
  }
  let tab = [a,b,c,d,e,f]
  let lostab = new Set()
  let uniqueLos = ""
  //validuje unikalnosc liczb
  let unique = Array.from(new Set(tab))
  if (unique.length < 6) {
    alert("liczby powinny być unikalne")
    return 0
  }

//generuje tablice losowych wartosci i sprawdzam czy są unikalne
while(uniqueLos.length < 6){

  //losowanie wartosci
  for (let i = 0; i < 6; i++) {
    lostab.add(Math.floor((Math.random() * 49) + 1))

    }
    //tworzac set pozbywamy sie powtorzen
    uniqueLos = Array.from(new Set(lostab))

}

    //wyswietlamy wylosowane liczby na ekran + zmiana koloru na domyslny
    for (var i = 0; i < 6; i++) {
      document.getElementById("dot"+(i+1)).innerText = uniqueLos[i]
      document.getElementById("dot"+(i+1)).style.color = "white"
    }

    //zmiana koloru trafionych liczb na czerwony i zliczenie ich
    let counter = 0
    for (i = 0; i < tab.length; i++) {
      for ( j = 0; j< tab.length; j++){
        if (tab[i] == uniqueLos[j]) {
          document.getElementById("dot"+(j+1)).style.color = "red"
          counter++;
        }
      }

    }
    alert("zgadles " + counter)


})
  
//zad12 silnia
document.getElementById("zad12Button").addEventListener("click",function(){
  let i = document.getElementById("zad12").value
  i = parseInt(i)
  if (i > 0 ) {
    let wynik = 1
    while (i > 1) {
      wynik = wynik * i
      i = i - 1
    }
    document.getElementById("zad12Out").textContent =parseInt(document.getElementById("zad12").value) +"! = "+ wynik
  }else
  alert("podaj liczbe dodatnią")


})

//zad13 palindromy

document.getElementById("zad13Button").addEventListener("click",function() {
  
  table = document.getElementById("zad13").value

  j = table.length - 1
  let test = true
  for (let i = 0; i < table.length; i++) {
    if (table[i] != table[j]) {
      console.log(table[i] + " " + table[j])
      test = false
    }
    j--
  }

  let wynik = ""
  if (test) {
    wynik = "tekst jest palindromem"
    document.getElementById("Zadanie13").style.borderColor = "green";
    
  }else {
    wynik = "tekst nie jest palindromem"
    document.getElementById("Zadanie13").style.borderColor = "red";
  }

  document.getElementById("zad13Out").textContent = wynik
  
})


//zad16 tabela sum/avg
let zad16Table = []
document.getElementById("zad16ButtonAdd").addEventListener("click",function() {

  let element = parseInt(document.getElementById("zad16").value)

  if (isNaN(element)) {
    element = 0
  }

   zad16Table.push(element)

   console.log(zad16Table)

     document.getElementById("zad16Out").textContent = zad16Table
     

  
})

document.getElementById("zad16ButtonSum").addEventListener("click",function(){

  let total = zad16Table.reduce(function(a, b) {
    return a + b;
  })
  document.getElementById("zad16OutSum").textContent = "Suma= "+total

})

document.getElementById("zad16ButtonAvg").addEventListener("click",function(){

  let total = zad16Table.reduce(function(a, b) {
    return a + b;
  })

  total = total/zad16Table.length
  document.getElementById("zad16OutAvg").textContent = "Średnia= "+total


})

//zad18 podzielne przez 3

document.getElementById("zad18Button").addEventListener("click",function(){

  let x = document.getElementById("zad18").value
  x = parseInt(x)

  if (isNaN(x)) {
    x = 0
    alert("podaj liczbe")
  }
  
  if (x%3 == 0) {
    document.getElementById("zad18Out").textContent = "jest podzelne przez 3"
  }else document.getElementById("zad18Out").textContent = "nie jest podzelne przez 3"


})

//zad19
document.getElementById("zad19Add").addEventListener("click",function(){

  let p = document.getElementById("zad19Out")
  let text = document.getElementById("zad19").value

  

  let dot = document.createElement('span')
  dot.className = "dot"
  dot.textContent = text
  p.appendChild(dot)

})

document.getElementById("zad19Del").addEventListener("click",function(){

  let list = document.getElementById("zad19Out")
  let test = document.getElementById('zad19IDel').value

  for (let i = 0; i < list.childNodes.length; i++) {

    if (test == list.childNodes[i].textContent) {

      list.removeChild(list.childNodes[i])

    }
    
  }
})