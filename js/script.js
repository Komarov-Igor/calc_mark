let btnBack = document.getElementById('btnBack');
let btnNext = document.getElementById('btnNext');
let btnPrint = document.getElementById('btnPrint');
let btnSave = document.getElementById('btnSave');
let progressBar = document.getElementById('progressbar');
 
let rowButtons = document.getElementById('rowButtons');
let container = document.getElementById('container');
let cur_q = undefined; 
let alert_div = null; 
let alertMessage = null;
let line_cnt = 0;
let questions;
let equipments;
let line_params = [];

function nextQuestion(newId){
    let tmp = questions.filter(el => el.id === newId)[0];
    if (tmp !== undefined) {
        if (tmp.answers.length === 1) {
            tmp.answers[0].checked = true;
            tmp = nextQuestion(tmp.nextId);
        };
    };
    return  tmp;
};

function prevQuestion(cur_id){
    let tmp = questions.filter(el => el.nextId === cur_id)[0];
    if (tmp !== undefined) {
        if (tmp.answers.length === 1) {
            tmp.answers[0].checked = true;
            tmp = prevQuestion(tmp.id);
        };
    };
    return  tmp;
};

function generate_new_questions(){
    //let cur_ind = cur_q.id;
    //let tmp = cur_q;
    let tmp = questions.filter(el => el.nextId === -1)[0];
    let cur_ind = tmp.id;
    let i = 1;
    // let new_el = JSON.parse(second_questions);
    // new_el = new_el[0];

    for(i = 1; i <= line_cnt; i++ ) {
        let line_param = JSON.parse(line_param_template);
        line_param.line_no = i;
        line_params = [...line_params, line_param];
        
        let new_el = JSON.parse(second_questions);
        for(let j = 0; j < new_el.length ; j++ ) {
            new_el[j].id = ++cur_ind;
            tmp.nextId = new_el[j].id;
            new_el[j].title += i; 
            new_el[j].line_no = i;
            z = 0;
            new_el[j].answers.forEach(element => {
                element.id = '' + new_el[j].id + '.' + (++z);
            });
            tmp = new_el[j]; 
        }
        
        questions = [...questions, ...new_el];
    };
};

btnBack.addEventListener('click', ()=>
{
    let tmp =  prevQuestion(cur_q.id);
    if (tmp !== undefined) {
        cur_q = tmp;
        show_question(cur_q);
    };
});


btnPrint.addEventListener('click', ()=>
{
    //next_turn();
    //if (check_answer()){

        //generate_print_form();
        //atoprint('MessForPrint');
        
        window.print();
    //}

});

btnSave.addEventListener('click', ()=>
{
    res = prompt('Название завода', 'Молокозавод');
    res = (res === null || res === '') ? null : res;
    if (res !== null) {

        let today  = new Date();
        let now = '' + today.getFullYear() +'-'+ today.getMonth() 
        +'-'+ today.getDate() +'_'+ today.getHours() +'-'+ today.getMinutes()
         + '_';

        saveAs(new Blob([JSON.stringify(questions, null, 2)], 
            {type: "text/plain;charset=" + 'UTF-8'}), now + res + ".txt");
    };
});


function remove_old_block1(){
    let old_q = document.getElementById('block1');
    if (old_q !== null) {
        $('#block1').collapse('hide');
        old_q.removeEventListener('click', next_turn);
        container.removeChild(old_q);
    }
};

btnNext.addEventListener('click', next_turn);

function next_turn(ev){
    if ((ev.target.type !== undefined && ev.target.type === 'radio') || ev.target.id === 'btnNext') {

        alertMessage =  document.getElementById('alertMessage');
        alert_div = (alertMessage === null) ? null : alert_div;
        if (check_answer()){
            let procent = Math.round(100 * questions.indexOf(cur_q) / questions.length);
            progressBar.style = 'width: ' + procent + '%';
            //style="width: 100%" aria-valuenow="50"

            if (alert_div !== null || alertMessage !== null)
            {
                container.removeChild(alert_div);
                alert_div = null;
            };

            if (cur_q.param !== undefined && cur_q.param === "flow_cnt") {
                console.log('flow_cnt');
                let cur_line = line_params.filter(el => el.line_no === cur_q.line_no)[0];
                //cur_line.flow_cnt = cur_q.answers.filter(el => el.checked)[0].qty[0] + 1;
                cur_line.flow_cnt = parseInt(cur_q.answers.filter(el => el.checked)[0].text);

            };

            if (cur_q.param !== undefined && cur_q.param === "end_common_part") {
                line_cnt  = parseInt(cur_q.answers.filter(el => el.checked)[0].text);
                generate_new_questions();
            };

            tmp = nextQuestion(cur_q.nextId);
            if (tmp !== undefined) {
                cur_q = tmp;
                
                show_question(cur_q);
            } else{
                console.log('Данные введены');
                generate_print_form();
            };
        } else {
            if (alert_div === null) {
                alert_div = document.createElement('div');
                alert_div.className = 'row';
                alert_div.id = 'rowAlert';
                let inner_html = '<div class="col">\
                    <div class="alert alert-danger alert-dismissible fade show noprint" role="alert" id="alertMessage">\
                        <strong>Ввод не закончен,</strong> выберите один из вариантов.\
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
                        <span aria-hidden="true">&times;</span>\
                        </button>\
                        </div>   \
                    </div>';

                alert_div.innerHTML = inner_html;
                container.insertBefore(alert_div, rowButtons);        
                $("#alert").alert();
                $('#alert').on('close.bs.alert', function () {
                    alert_div = null;
                });
            };
        };
    };    
};


function check_answer() {
    let buttons = document.getElementById('btnGroup');
    let click_status = [...buttons.children].some(el => el.getAttribute('class').split(' ').includes('active'));
    let res = null;
    if (click_status) {
        let btnPressed = [...buttons.children].filter(el => el.getAttribute('class').split(' ').includes('active'))[0];
        let btnId = btnPressed.children[0].id;
        cur_q.answers.map( answer => answer.checked = answer.id === btnId);
    };
    return click_status;
};





function generate_print_form(){
    
    function toRUB(number) {
        //return Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number)
        return new Intl.NumberFormat('ru-RU', { style: 'decimal', minimumFractionDigits: 2 }).format(number)
    };
    
    function toInt(number) {
        //return Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number)
        return new Intl.NumberFormat('ru-RU', { style: 'decimal', minimumFractionDigits: 0 }).format(number)
    };    
//    remove_old_block1();

    const printFormId = 'MessForPrint';
    //const  koeff = (num) =>   (num < 3) ? 0.25: ((num <5) ? 1: num / 5) ;
    const  koeff = (num) =>   (num < 5 ? 1: num / 5) ;

    
    let old_print_form = document.getElementById(printFormId);
    if (old_print_form != undefined) {
        container.removeChild(old_print_form);
    };
    let table_string = [].concat(...questions.map(que => { 
        let tmp_q = que.answers.filter(ans => ans.checked)[0];
        tmp_q.title = que.title;
        tmp_q.line_no = que.line_no;

        // if (que.param !== undefined){
        //     tmp_q.param = que.param;
        // };
        
        // tmp_q.param
        // if (el.param !== undefined && el.param === "flow_cnt") {
        //     console.log('flow_cnt2')
        // };
        if (tmp_q.eq_id !== undefined) {
            res = tmp_q.eq_id.map((el, index) => {
                let equipment = equipments.filter(eq => eq.id === el)[0];
                if (equipment !== undefined) {
                    let new_el = {};
                    new_el.comment = equipment.comment;
                    new_el.line_text = equipment.line_text;
                    //new_el.qty = tmp_q.qty[index];
                    switch (equipment.param) {
                        case 'flow_cnt':
                            new_el.qty = line_params.filter(lin => tmp_q.line_no === lin.line_no)[0].flow_cnt;
                            break;
                        case 'job_qty':
                            new_el.qty = Math.round(tmp_q.qty[index] *  koeff(line_cnt));
                            break;   
                        default:
                            new_el.qty = tmp_q.qty[index];                        
                    };

                    new_el.price = equipment.price;
                    new_el.title = tmp_q.title;
                    if (tmp_q.comment !== undefined) {
                        new_el.comment = tmp_q.comment;
                    };
                    return new_el;
                };
            });
            tmp_q = res;

        };
        return tmp_q;
    }));
    let newDiv = document.createElement('div')
    newDiv.id = printFormId;
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options = { year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let now = today.toLocaleDateString("ru-RU", options);
    now = '';
    let inner_html = '<div class="row"><div class="col tabel_header"><h6>Предложение носит информационный характер \
        и не является публичной офертой.<br>Для уточнения перечня оборудования и работ необходимо провести обследование \
        объекта автоматизации.<br>Контакты для связи: <a href="https://www.esphere.ru/contacts/" target="_blank" \
        ><bold>СБЕРКОРУС</bold></a>, 8(800)-100-8-812, sales@esphere.ru<br>' + now + '<br>Стоимость указана в рублях с НДС</h6></div></div>'; 
    inner_html += '<div class="row">\
    <div class="col-sm-1 tabel_header">' + '№' + '</div>' + '<div class="col-sm-6 tabel_header">' + 'Название' + '</div>' +
    '<div class="col-sm-1 tabel_header text-right">' + 'Количество' + '</div>' + '<div class="col-sm-1 tabel_header text-right">' + 'Цена' + '</div>' +
     '<div class="col-sm-1 tabel_header text-right">' + 'Стоимость' + '</div>' + '<div class="col-sm-2 tabel_header">' + 'Комментарий' + '</div>' +
     '</div>';
    let i = 0;
    sum = 0;
    let prev_title = '';
    for(let s of table_string) {

    if (s.line_text !=='') {
        i++;

        let price = parseInt(s.price);
        let cost = price * s.qty;
        sum += cost;
        let new_title = s.title;
        if (new_title !== prev_title) {
            inner_html += '<div class="row">\
                <div class="col-sm-1 tabel_header">' + '' + '</div>' + '<div class="col-sm-6 tabel_header"><h6>' + new_title + '</h6></div>' +
                '<div class="col-sm-1 tabel_header">' + '' + '</div>' + '<div class="col-sm-1 tabel_header">' + '' + '</div>' +
                '<div class="col-sm-1 tabel_header">' + '' + '</div>' + '<div class="col-sm-2 tabel_header">' + '' + '</div>' +
                '</div>';
            prev_title = new_title;
        }

            inner_html += '<div class="row">\
                <div class="col-sm-1 tabel_str">' + i + '</div>' + '<div class="col-sm-6 tabel_str">' + s.line_text + '</div>' +
                '<div class="col-sm-1 tabel_str text-right">' + toInt(s.qty) + '</div>' + '<div class="col-sm-1 tabel_str text-right">' + toInt(price) + '</div>' +
                '<div class="col-sm-1 tabel_str text-right">' + toInt(cost) + '</div>' + '<div class="col-sm-2 tabel_str">' + s.comment + '</div>' +
                '</div>';
        }
    }
    inner_html += '<div class="row ">\
        <div class="col-sm-1 tabel_footer">' + '' + '</div>' + '<div class="col-sm-6 tabel_footer">' + '' + '</div>' +
        '<div class="col-sm-1 tabel_footer">' + '' + '</div>' + '<div class="col-sm-1 tabel_footer">' + 'ИТОГО' + '</div>' +
        '<div class="col-sm-1 tabel_footer text-right">' + toInt(sum) + '</div>' + '<div class="col-sm-2 tabel_footer">' + '' + '</div>' +
        '</div>';
    newDiv.innerHTML = inner_html;
    container.appendChild(newDiv);
};



function myinit(){
    //state = 1;
    $('#block1'  /*+ state*/).collapse('show');
    questions  =  JSON.parse(first_questions);
    equipments = JSON.parse(equipments_list);
    
    // questions2 = questions.reduce((questions,[]) => {
        //arr.reduce(callback(accumulator, element, index, arr){}, initialValue)
        // const result = votes.reduce((result, vote) => {
        //     result[vote] ? result[vote]++ : result[vote] = 1;
        //     return result;
        //   }, {})
    // });

    cur_q = nextQuestion(1);
    //generate_new_questions();
    
    show_question(cur_q);
}

function show_question(query){
    btnNext.disabled = query.nextId === -1;
    btnPrint.disabled = !(query.nextId === -1);
    btnBack.disabled = query.id === 1;

    remove_old_block1();
	let newDiv = document.createElement('div')
    newDiv.className = 'collapse';
    newDiv.id = 'block1';
    let inner_html = '';
    inner_html += '<h5 class="noprint">' + query.title + '</h5>';
    inner_html += '<div class="row noprint  align-items-center justify-content-center" id="rowQty"><div class="col-6"><label for="btnGroup" class="col col-form-label">' + 
        query.question  + '</label></div><div class="col d-flex justify-content-center"><div class="row row-cols-3 d-flex justify-content-center btn-group btn-group-toggle" data-toggle="buttons" id="btnGroup">';

    inner_html +=    query.answers.map(el =>{
            return '<label class="col-sm-auto border rounded  btn btn-primary' + (el.checked ? ' active': '') +  '">' +
             '<input type="radio" name="options" id="'
                + el.id + '">' + el.text + ' </label>';
        }).join('') + '</div></div></div><hr class="noprint">';
    newDiv.innerHTML = inner_html;
    container.insertBefore(newDiv, rowButtons);

    $('#block1').collapse('show');
    newDiv.addEventListener('click', next_turn);
    
};

window.onload = function(){
    myinit();
}

