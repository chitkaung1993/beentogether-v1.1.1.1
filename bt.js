var loadfileyou = function(event){
    var reader = new FileReader();
    reader.onload =function(){
        var output = document.querySelector('.bfpreview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
var loadfileyour = function(event){
    var reader = new FileReader();
    reader.onload =function(){
        var output = document.querySelector('.gfpreview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
 


const goBtn =()=>{
    let bf_name =document.getElementById('bf-name');
    let gf_name =document.getElementById('gf-name');
    let bf_date =document.getElementById('bf-date');
    let gf_date =document.getElementById('gf-date');
    let bf_day =document.getElementById('bf-day');
    let gf_day =document.getElementById('gf-day');
    let anni_date =document.getElementById('anni-date');

    let bf_name_value = bf_name.value;
    let gf_name_value = gf_name.value;
    let bf_date_value = bf_date.value;
    let gf_date_value = gf_date.value;
    let bf_day_value = bf_day.value;
    let gf_day_value = gf_day.value;
    let anni_date_value = anni_date.value;

    localStorage.setItem('bfname',bf_name_value);
    localStorage.setItem('gfname',gf_name_value);
    localStorage.setItem('bfdate',bf_date_value);
    localStorage.setItem('gfdate',gf_date_value);
    localStorage.setItem('bfday',bf_day_value);
    localStorage.setItem('gfday',gf_day_value);
    localStorage.setItem('annidate',anni_date_value);
    
    let bf_pic =document.querySelector(".bfpreview");
    let gf_pic =document.querySelector(".gfpreview");
    let bf_pic_src =bf_pic.src;
    let gf_pic_src =gf_pic.src;
    localStorage.setItem('bfpic',bf_pic_src);
    localStorage.setItem('gfpic',gf_pic_src);
    
    // console.log(bf_name_value,gf_name_value,bf_pic_src , gf_pic_src);
    

};

let bfshowname = localStorage.getItem('bfname');
let gfshowname = localStorage.getItem('gfname');
let bfshowdate = localStorage.getItem('bfdate');
let gfshowdate = localStorage.getItem('gfdate');
let bfshowday = localStorage.getItem('bfday');
let gfshowday = localStorage.getItem('gfday');
let bfshowpic = localStorage.getItem('bfpic');
let gfshowpic = localStorage.getItem('gfpic');
let annishowdate = localStorage.getItem('annidate');

document.getElementById('show-bf-name').innerHTML = bfshowname;
document.getElementById('show-gf-name').innerHTML = gfshowname;
document.getElementById('bfshowdate').innerHTML = bfshowdate;
document.getElementById('gfshowdate').innerHTML = gfshowdate;
document.getElementById('bfshowday').innerHTML = bfshowday;
document.getElementById('gfshowday').innerHTML = gfshowday;

const bfphoto = document.querySelector('.bfphoto');
const gfphoto = document.querySelector('.gfphoto');

bfphoto.src = bfshowpic;
gfphoto.src = gfshowpic;

    let current_date = new Date();                          // today date
    let anni_date    = new Date(annishowdate);                // anni start date

    //diff time between today and anni start date(show by milisec)
    let diff_date =Math.abs(current_date.getTime() - anni_date.getTime());  

    //to get years, milisec for all time  divided by milisec for one year
    let year =Math.floor(diff_date/(1000*60*60*24*365)); 

    //to get  milisec for all months, after divided , Modulus (Division Remainder) is a milisec for all months
    let ms_for_month = Math.floor(diff_date%(1000*60*60*24*365));    
    
    //to get months, Modulus (Division Remainder)milisec for all months  divided by milisec for one month
    let month =Math.floor(ms_for_month/(1000*60*60*24*30)); 

    //to get  milisec for all days, after divided , Modulus (Division Remainder) is a milisec for all days
    let ms_for_day =Math.floor(ms_for_month%(1000*60*60*24*30)); 
    
    //to get days, Modulus(Division Remainder)milisec for all days divided by milisec for one day
    let day =Math.floor(ms_for_day/(1000*60*60*24));      

    // document.querySelector(".show_time").innerHTML = year + " years " + month +" months " + day + " days ";
    document.querySelector("#years").innerHTML = year ;
    document.querySelector("#months").innerHTML = month ;
    document.querySelector("#days").innerHTML = day ;

