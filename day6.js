
; (function () {
    console.log(`js正常運行`);
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    let processdata, data, table, writeon, list;
    processdata = new XMLHttpRequest();
    processdata.open('GET', endpoint, false);//決定請求方法
    processdata.send();//送出api請求
    data = JSON.parse(processdata.responseText);
  
    // --------------------------------------------
    table = document.querySelector('.suggestions');
    writeon = '';
    data.forEach(element => {
      writeon += `<li class='${element.city}' style='display:none'>${element.city},${element.state}<inline>    </inline>${element.population}</li>`;
    });
    table.innerHTML = writeon;
    //這裡就會建立所有城市的列表
    function inputfilter(inputtext) {
      let li=document.querySelectorAll('li');
      let searchtext = new RegExp(inputtext);
      li.forEach(element =>{
        element.style.display="none";
      }
  
      );
      li.forEach(element => {
        let matchvalue = element.innerHTML;
        if (matchvalue.match(searchtext) || matchvalue.match(searchtext)) {
          element.style.display="block";
            // console.log(element.innerHTML);
        }
        else{
  
        }
      });
    }
  
    //比對輸入資料跟城市
  
    // --------------------------------------------
    let the_searchtext = '';//搜尋資料暫存
    function inputhandler(e) {
      if (e.keyCode < 91 && e.keyCode > 59) {
        the_searchtext += e.key;
        inputfilter(the_searchtext);
      }
      else if (e.keyCode == 8) {
        the_searchtext = the_searchtext.substring(0, the_searchtext.length - 1);
      }
      else {
        table.classList.add(`hive`);
      }
    }
    //輸入資料的篩選
  
    let inputtext = document.querySelector('.search');
    inputtext.addEventListener('keydown', inputhandler);
    //事件觸發，當輸入框被輸入文字時call inputhandler
    // --------------------------------------------
  })()
  
  
  