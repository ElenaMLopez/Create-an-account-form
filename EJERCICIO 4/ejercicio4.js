var button = document.getElementById('createAccountButton');

// Bucles para crear los dias, meses y años

for (var i = 0; i < 31; i++) {

    var dayElement = document.createElement('option');
      dayContent = document.createTextNode(i);
      dayParent = document.getElementById('day');
      dayElement.appendChild(dayContent);
      dayParent.appendChild(dayElement);
      //también se puede poner: //firstElement = document.getElementById('dayOption');
      //dayParent.insertBefore(dayElement, firstElement);
}

for (var j = 0; j < 12; j++) {

    var monthElement = document.createElement('option');
        monthContent = document.createTextNode(j);
        monthParent = document.getElementById('month');
        monthElement.appendChild(monthContent);
        monthParent.appendChild(monthElement);
}

for (var k = 1900; k <= 2017; k++) {

    var yearElement = document.createElement('option');
        yearContent = document.createTextNode(k);
        yearParent = document.getElementById('year');
        yearElement.appendChild(yearContent);
        yearParent.appendChild(yearElement);
}


// asociar el valor de los bucles a cada option del html

function openWindowFuction() {
      var name = document.getElementById('firstNameInput').value;   // Por qué al sacar las variables a global no rula???
      var mail = document.getElementById('emailInput').value;
      var mailRepeat = document.getElementById('reEnterEmail').value;


      if (mail === mailRepeat) {
        function openNewWindow (){
          var buttonEvent = getElementById('createAccountButton');
          buttonEvent.onclick(window.open('accountDone.html'));

          }
          window.open('accountDone.html');

        console.log('Gracias ' + name + ', tu cuenta se ha creado');

      }else {

        console.log('No se ha podido crear la cuenta');
        document.getElementById('reEnterEmail').style.border = '2px solid red';
        document.getElementById('reEnterEmail').value ='Los datos no coinciden';

     }
}

// Comprobación de e-mail correcto:

button.addEventListener('click', openWindowFuction);
