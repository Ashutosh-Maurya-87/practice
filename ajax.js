console.log("welcome to the ajax tutorial");
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("you have click the fetch button");
  //intantiate an xhr object--------------------------------
  const xhr = new XMLHttpRequest();
  //open the object--------------------------------
  //xhr.open("GET", "https://jsonplaceholder.typicode.com/", true);
  //what to do on progress--
  //   xhr.onprogress = function () {
  //     console.log("On progress");
  //     //what to do when progress is ready-------
  //     xhr.onload = function () {
  //       if (this.status === 200) {
  //         console.log(this.responseText);
  //       } else {
  //         console.log("Some error occured");
  //       }
  //     };
  //   };

  //   xhr.onreadystatechange = function () {
  //     console.log("ready state is ", xhr.readyState);
  //   };
  //post request---------------
  xhr.open("POST", "ashu.txt", true);
  xhr.getResponseHeader("content-type", "application/json");
  xhr.onprogress = function () {
    console.log("on progress");
  };
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error happened");
    }
  };
  //params =` { "name": "Ashutosh12", "type": "student653564", "qualification": "98Bachelor" }`;
  xhr.send();
  console.log("we are done");
}
let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", function () {
  console.log("you have click the populate button");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list= document.getElementById("list");
      str='';
      for(key in obj) {
          str+=`<li>${obj[key].employee_name}</li>`;
      }
      list.innerHTML=str;
    } else {
      console.log("some error occured");
    }
  };
  xhr.send();
  console.log('we have done this ajax code');
});
