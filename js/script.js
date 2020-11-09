const state_cnt = 4;
let btnBack = document.getElementById('btnBack');
let btnNext = document.getElementById('btnNext');
let btnPrint = document.getElementById('btnPrint');

let rowButtons = document.getElementById('rowButtons');
let container = document.getElementById('container');
let cur_q = undefined; 
let alert_div = null; 
let alertMessage = null;
let line_cnt = 0;
let questions;


function nextQuestion(newId){
    return  questions.filter(el => el.id === newId)[0];
};

function generate_new_questions(){
    //let cur_ind = cur_q.id;
    //let tmp = cur_q;
    let tmp = questions.filter(el => el.nextId === -1)[0];
    let cur_ind = tmp.id;
    let i = 1;
    let new_el = JSON.parse(second_questions);
    new_el = new_el[0];
    
    for(i = 1; i <= line_cnt; i++ ) {
        let new_el = JSON.parse(second_questions);
        for(let j = 0; j < new_el.length ; j++ ) {
            new_el[j].id = ++cur_ind;
            tmp.nextId = new_el[j].id;
            new_el[j].title += i; 
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
    let tmp = questions.filter(el => el.nextId === cur_q.id)[0];
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

function remove_old_block1(){
    let old_q = document.getElementById('block1');
    if (old_q !== null) {
        $('#block1').collapse('hide');
        old_q.removeEventListener('click', next_turn);
        container.removeChild(old_q);
    }
};

btnNext.addEventListener('click', ()=>
{
    next_turn();
});

function next_turn(){
    alertMessage =  document.getElementById('alertMessage');
    alert_div = (alertMessage === null) ? null : alert_div;
    if (check_answer()){
        
        if (alert_div !== null || alertMessage !== null)
        {
            container.removeChild(alert_div);
            alert_div = null;
        };
        
        if (cur_q.id === 9) {
            line_cnt  = parseInt(cur_q.answers.filter(el => el.checked)[0].text);
            generate_new_questions();
        }

        let tmp = questions.filter(el => el.id === cur_q.nextId)[0];
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
                <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alertMessage">\
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

function generate_print_form(){
    remove_old_block1();
    let table_string = [].concat(...questions.map(el => { 
        let tmp_q = el.answers.filter(ans => ans.checked)[0];
        tmp_q.title = el.title;
        return tmp_q;
    }));
    let newDiv = document.createElement('div')
    newDiv.id = 'MessForPrint';
    let inner_html = ''; 
    inner_html += '<div class="row">\
    <div class="col-sm-1 tabel_header">' + '№' + '</div>' + '<div class="col-sm-6 tabel_header">' + 'Название' + '</div>' +
    '<div class="col-sm-1 tabel_header">' + 'Количество' + '</div>' + '<div class="col-sm-1 tabel_header">' + 'Цена' + '</div>' +
     '<div class="col-sm-1 tabel_header">' + 'Стоимость' + '</div>' + '<div class="col-sm-2 tabel_header">' + 'Комментарий' + '</div>' +
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
                '<div class="col-sm-1 tabel_str">' + s.qty + '</div>' + '<div class="col-sm-1 tabel_str">' + price + '</div>' +
                '<div class="col-sm-1 tabel_str">' + cost + '</div>' + '<div class="col-sm-2 tabel_str">' + s.comment + '</div>' +
                '</div>';
        }
    }
    inner_html += '<div class="row">\
        <div class="col-sm-1 tabel_header">' + '' + '</div>' + '<div class="col-sm-6 tabel_header">' + '' + '</div>' +
        '<div class="col-sm-1 tabel_header">' + '' + '</div>' + '<div class="col-sm-1 tabel_header">' + 'ИТОГО' + '</div>' +
        '<div class="col-sm-1 tabel_header">' + sum + '</div>' + '<div class="col-sm-2 tabel_header">' + '' + '</div>' +
        '</div>';
    newDiv.innerHTML = inner_html;
    container.appendChild(newDiv);
};

function check_answer() {
    let buttons = document.getElementById('btnGroup');
    let click_status = [...buttons.children].some(el => el.getAttribute('class').split(' ').includes('active'));
    let res = null;
    if (click_status) {
        let btnPressed = [...buttons.children].filter(el => el.getAttribute('class').split(' ').includes('active'))[0];
        let btnId = btnPressed.children[0].id;
        cur_q.answers.map( answer => answer.checked = answer.id === btnId);
        //res = cur_q.answers.filter( answer => answer.checked = answer.id === btnId)
        
        // cur_q.answers.map( answer => {
        //     answer.checked = (answer.id === btnId) ? true: false;
        //     return answer;
        // })


    };
    return click_status;
    //return res;
};
//

let state = undefined;



function myinit(){
    state = 1;
    $('#block'  + state).collapse('show');
    questions  =  JSON.parse(first_questions);
    // questions2 = questions.reduce((questions,[]) => {
        //arr.reduce(callback(accumulator, element, index, arr){}, initialValue)
        // const result = votes.reduce((result, vote) => {
        //     result[vote] ? result[vote]++ : result[vote] = 1;
        //     return result;
        //   }, {})
    // });

    cur_q = nextQuestion(state);
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
    inner_html += "<h5>" + query.title + '</h5>';
    inner_html += '<div class="row" id="rowQty"><div class="col-6"><label for="btnGroup" class="col col-form-label">' + 
        query.question  + '</label></div><div class="col"><div class="btn-group btn-group-toggle" data-toggle="buttons" id="btnGroup">';

    inner_html +=    query.answers.map(el =>{
            return '<label class="btn btn-primary mr-1' + (el.checked ? ' active': '') +  '">' +
             '<input type="radio" name="options" id="'
                + el.id + '">' + el.text + ' </label>';
        }).join('') + '</div></div></div><hr>';
    newDiv.innerHTML = inner_html;
    container.insertBefore(newDiv, rowButtons);

    $('#block1').collapse('show');
    newDiv.addEventListener('click', next_turn);
    
};

window.onload = function(){
    myinit();
}

// window.onload = function()
// {
    
//     timeValueInput.value = 30;
//     FormSelect = document.getElementById('FormControlSelect1');
//     //FormSelect.addEventListener('change', () => tikTakBoom.countOfPlayers = parseInt(FormSelect.value));    
//     tikTakBoom.init(
//         tasks,
//         document.getElementById('timerField'),
//         document.getElementById('gameStatusField'),
//         document.getElementById('questionField'),
//         document.getElementById('answer1'),
//         document.getElementById('answer2'),
        
//     );

//     document.getElementById('btnStart').addEventListener('click', () => {
//         tikTakBoom.init(
//             tasks,
//             document.getElementById('timerField'),
//             document.getElementById('gameStatusField'),
//             document.getElementById('questionField'),
//             document.getElementById('answer1'),
//             document.getElementById('answer2'),
//         );
//         tikTakBoom.run()
//     });
    
//     document.getElementById('btnStop').addEventListener('click', () => tikTakBoom.finish('lose'));

//     //tikTakBoom.run();
// }




