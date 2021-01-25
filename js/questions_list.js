const first_questions = `
    [
        {
            "id": 1,
            "title": "Управленческие системы ",
            "question": "Какая учетная система используется?",
            "type": "radio",
            "answers": 
            [
                { "text": "1C 8.3/8.4", "id": "1.1", "qty": 1, "price": "0", "checked": false, "line_text":"1C 8.4", "comment": "Обновление УС не требуется" },
                { "text": "1C 8.0-8.2", "id": "1.2", "qty": 1, "price": "50000", "checked": false, "line_text":"Обновление до 1C 8.4", "comment": "Обновление до актуальной версии"  },
                { "text": "Другая УС", "id": "1.4", "qty": 1, "price": "0", "checked": false, "line_text":"Нестандартная интеграция", "comment": "Для оценки стоимости требуется дополнительное обследование" }
            ],
            "nextId": 20

        },
        {
            "id": 20,
            "title": "Аппаратные средства",
            "question": "Требуется приобрести серверное оборудование для разворачивания системы?",
            "type": "radio",
            "answers": 
            [
                { "text": "Да", "id": "2.1", "eq_id": [18], "qty": [1],  "checked": false },
				{ "text": "Нет", "id": "2.2", "eq_id": [20], "qty": [0],  "checked": false }
            ],
            "nextId": 21

        },
        {
            "id": 21,
            "title": "ПО \\"Сервер управления кодами маркировки\\"",
            "question": "Установка серверного ПО",
            "type": "radio",
            "answers": 
            [
                { "text": "Да", "id": "2.1", "eq_id": [19], "qty": [1],  "checked": false }
            ],
            "nextId": 30

        },
        {
            "id": 30,
            "title": "Лицензионные компоненты",
            "question": "Лицензионные компоненты",
            "type": "radio",
            "answers": 
            [            
                { "text": "Да", "id": "3.1", "eq_id": [26,27,28,29,30,31,32,33], "qty": [1,1,1,1,1,1,5,5], "checked": false }
            ],
            "nextId": 31

        },
        {
            "id": 31,
            "title": "Внедрение системы",
            "question": "Внедрение системы",
            "type": "radio",
            "answers": 
            [
                { "text": "Да", "id": "2.1", "eq_id": [21,22,23,24,25], "qty": [72,252,100,252,30],  "checked": false }
            ],
            "nextId": 40

        },
        {
            "id": 40,
            "title": "Система управления складом",
            "question": "Требуется ли внедрение WMS (складской) системы для работы с кодами маркировки?",
            "type": "radio",
            "answers": 
            [            
                { "text": "Да, полную версию с поддержкой приемки, отгрузки и др. операций", "id": "4.1", "qty": 1, "price": "3960000", "checked": false, "line_text":"Полная версия системы управления складом (WMS)", "comment": "Поддержка приемки, отгрузки и др. операций" },
                { "text": "Да, сокращенную версию, только отгрузка", "id": "4.2", "qty": 1, "price": "462000", "checked": false, "line_text":"Облегченная версия системы управления складом (WMS)", "comment": "Поддержка только отгрузки"  },
                { "text": "Нет, используем свою", "id": "4.3", "qty": 0, "price": "0", "checked": false, "line_text":"Система управления складом", "comment": "Доработки и настрока складской системы выполняется заказчиком"  }
            ],
            "nextId": 50

        },
        {
            "id": 50,
            "title": "Система управления складом",
            "question": "Сколько терминалов сбора данных с поддержкой Datamatrix необходимо приобрести для работы на складе?",
            "type": "radio",
            "answers": 
            [       
                { "text": "0 - используем свои", "id": "5.1", "eq_id": [3], "qty": [0],  "checked": false},
                { "text": "1", "id": "5.1", "eq_id": [2], "qty": [1],  "checked": false},
                { "text": "2", "id": "5.2", "eq_id": [2], "qty": [2],  "checked": false},
                { "text": "3", "id": "5.3", "eq_id": [2], "qty": [3],  "checked": false},
                { "text": "4", "id": "5.4", "eq_id": [2], "qty": [4],  "checked": false},
                { "text": "5", "id": "5.5", "eq_id": [2], "qty": [5],  "checked": false},
                { "text": "6", "id": "5.6", "eq_id": [2], "qty": [6],  "checked": false},
                { "text": "7", "id": "5.7", "eq_id": [2], "qty": [7],  "checked": false},
                { "text": "8", "id": "5.8", "eq_id": [2], "qty": [8],  "checked": false},
                { "text": "9", "id": "5.9", "eq_id": [2], "qty": [9],  "checked": false},
                { "text": "10", "id": "5.10", "eq_id": [2], "qty": [10],  "checked": false}
            ],
            "nextId": 60

        },
        {
            "id": 60,
            "title": "ПО и компоненты для электронного документооборота",
            "question": "Требуется внедрение электронного документооборота?",
            "type": "radio",
            "answers": 
            [            
                { "text": "Да", "id": "6.1", "qty": 1, "price": "63000", "checked": false, "line_text":"• Лицензия на адаптер 1С Сфера Курьер<br>• Внедрение адаптера<br>• Лицензия на адаптер ЭДО/EDI на 1 год<br>• Сопровождение, 1 год", "comment": "" },
                { "text": "Нет, уже используем", "id": "6.2", "qty": 0, "price": "0", "checked": false, "line_text":"Внедрение ЭДО не требуется", "comment": ""  }

            ],
            "nextId": 70

        },
        {
            "id": 70,
            "title": "ПО и компоненты для электронного документооборота",
            "question": "Какое количество отгрузок в год?",
            "type": "radio",
            "answers": 
            [     
                { "text": "Нет", "id": "7.0", "qty": 0, "price": "0", "checked": false, "line_text":"", "comment": "Исходящие документы за год" },
                { "text": "До 1 000", "id": "7.1", "qty": 1000, "price": "7", "checked": false, "line_text":"Трафик ЭДО", "comment": "Исходящие документы за год" },
                { "text": "До 10 0000", "id": "7.2", "qty": 10000, "price": "6", "checked": false, "line_text":"Трафик ЭДО", "comment": "Исходящие документы за год" },
                { "text": "До 50 0000", "id": "7.3", "qty": 50000, "price": "5", "checked": false, "line_text":"Трафик ЭДО", "comment": "Исходящие документы за год"  },
                { "text": "До 100 0000", "id": "7.4", "qty": 100000, "price": "3", "checked": false, "line_text":"Трафик ЭДО", "comment": "Исходящие документы за год"  }
            ],
            "nextId": 90

        },
        {
            "id": 90,
            "title": "ПО и компоненты для электронного документооборота",
            "question": "На каком кол-ве линии необходимо запустить маркировку?",
            "type": "radio",
            "param": "end_common_part",
            "answers": 
            [            
                { "text": "1", "id": "8.1", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "2", "id": "8.2", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "3", "id": "8.3", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "4", "id": "8.4", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "5", "id": "8.5", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "6", "id": "8.6", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "7", "id": "8.7", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "8", "id": "8.8", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "9", "id": "8.9", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "10", "id": "8.10", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "11", "id": "8.11", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "12", "id": "8.12", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "13", "id": "8.13", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "14", "id": "8.14", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "15", "id": "8.15", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "16", "id": "8.16", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "17", "id": "8.17", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "18", "id": "8.18", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "19", "id": "8.19", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "20", "id": "8.19", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "21", "id": "8.19", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "22", "id": "8.19", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "23", "id": "8.19", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "24", "id": "8.19", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
                { "text": "25", "id": "8.20", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" }
            ],
            "nextId": -1 

        }

    ]
`;


let second_questions = `
[
{
    "id": -1,
    "title": "Параметры линии #",
    "question": "Производительность линии, штук в час",
    "type": "radio",
    "param": "flow_cnt",
    "answers": 
    [            
        { "text": "до 4000", "id": "100.1", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  },
        { "text": "4000 - 8000", "id": "100.2", "eq_id": [1], "qty": [1],  "checked": false  },
        { "text": "8001 - 12000", "id": "100.3", "eq_id": [1], "qty": [2],  "checked": false },
        { "text": "более 12000", "id": "100.4", "eq_id": [1], "qty": [3],  "checked": false }
    ],
    "nextId": -1 

},
{
    "id": -1,
    "title": "Параметры линии #",
    "question": "Способ нанесения кодов на потребительскую упаковку",
    "type": "radio",
    "answers": 
    [            
        { "text": "Типография, без валидации", "id": "101.1", "eq_id": [34], "qty": [0],  "checked": false },
        { "text": "Типография, ручн.валидация", "id": "101.1", "eq_id": [34,17,4], "qty": [0,1,1],  "checked": false , "comment": "Ручная валидация"},
        { "text": "Типография, авт.валидация", "id": "101.1", "eq_id": [34,8,4], "qty": [0,1,1],  "checked": false, "comment": "Автоматическая валидация" },
        { "text": "Ручная наклейка этикеток", "id": "101.1", "eq_id": [4,5,6], "qty": [1,1,3],  "checked": false },
        { "text": "Термотрансферный маркиратор", "id": "101.1", "eq_id": [4,35,8,36], "qty": [1,1,1,1],  "checked": false },
        { "text": "Автоматический принтер-аппликатор", "id": "101.2", "eq_id": [4,7,8,36], "qty": [1,1,1,1],  "checked": false },
        { "text": "Два кода- упаковка и крышка", "id": "101.3", "eq_id": [4,11,10], "qty": [1,2,1],  "checked": false  },
        { "text": "Термоструйный", "id": "101.4", "eq_id": [4,9,8,36], "qty": [1,1,1,1],  "checked": false, "comment": "Прямое нанесение термоструйным принтером" },
        { "text": "Принтер + аппликатор", "id": "101.5", "eq_id": [4, 5, 37,8,36], "qty": [1,1,1,1,1],  "checked": false, "comment": "Термотрансферный принтер + аппликатор" }
    ],
    "nextId": -1 
},
{
    "id": -1,
    "title": "Параметры линии #",
    "question": "Агрегация в групповую упаковку (короба)",
    "type": "radio",
    "answers": 
    [            
        { "text": "Ручная", "id": "102.1", "eq_id": [16,5], "qty": [1,1],  "checked": false, "comment": "Ручная агрегация в короба" },
        { "text": "Автоматическая", "id": "102.2",  "eq_id": [13,14], "qty": [1,1],  "checked": false, "comment": "Автоматическая агрегация в короба" },
        { "text": "Не используется", "id": "102.3", "qty": 0, "price": "0", "checked": false, "line_text":"", "comment": "Агрегация в короба не используется" }
    ],
    "nextId": -1 

},
{
    "id": -1,
    "title": "Параметры линии #",
    "question": "Нанесение на групповую упаковку (короба)",
    "type": "radio",
    "answers": 
    [            
        { "text": "Ручная", "id": "103.1", "eq_id": [17,6], "qty": [1,1],  "checked": false, "comment": "Ручное нанесение на короба" },
        { "text": "Автоматическая", "id": "103.2",  "eq_id": [15], "qty": [1],  "checked": false, "comment": "Автоматическое нанесение на короба" },
        { "text": "Автоматическая с аппликатором", "id": "103.2",  "eq_id": [37, 5], "qty": [1,1],  "checked": false, "comment": "Автоматическое нанесение на короба" },
        { "text": "Не используется", "id": "103.3", "qty": 0, "price": "0", "checked": false, "line_text":"", "comment": "Агрегация в короба не используется" }
    ],
    "nextId": -1 

},
{
    "id": -1,
    "title": "Параметры линии #",
    "question": "Агрегация в транспортную упаковку (паллеты)",
    "type": "radio",
    "answers": 
    [            
        { "text": "Ручная", "id": "104.1", "eq_id": [16,5], "qty": [1,1],  "checked": false, "comment": "Ручная агрегация в паллеты" },
        { "text": "Автоматическая", "id": "104.2",  "eq_id": [13,14], "qty": [1,1],  "checked": false, "comment": "Автоматическая агрегация в паллеты" },
        { "text": "Не используется", "id": "104.2", "qty": 0, "price": "0", "checked": false, "line_text":"", "comment": "Агрегация в паллеты не используется" }

    ],
    "nextId": -1 

},
{
    "id": -1,
    "title": "Параметры линии #",
    "question": "Нанесение на транспортную упаковку (паллеты)",
    "type": "radio",
    "answers": 
    [            
        { "text": "Ручная", "id": "105.1", "eq_id": [17,6], "qty": [1,1],  "checked": false, "comment": "Ручное нанесение на  паллеты" },
        { "text": "Автоматическая", "id": "105.2", "eq_id": [15], "qty": [1,1,1],  "checked": false, "comment": "Ручное нанесение на паллеты" },
        { "text": "Не используется", "id": "105.2", "qty": 0, "price": "0", "checked": false, "line_text":"", "comment": "Агрегация в паллеты не используется" }

    ],
    "nextId": -1 
}
]
`;

let line_param_template = `
{
    "line_no": 0,
    "flow_cnt": 0

}`;