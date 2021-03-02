const first_questions = `
    [
        {
            "id": 1,
            "title": "Программное обеспечение уровня L3 \\"iTrack\\"",
            "question": "Установка серверного ПО",
            "type": "radio",
            "order": 1000,
            "answers": 
            [
                { "text": "Да", "id": "2.1", "eq_id": [19,20], "qty": [1,1],  "checked": false }
            ],
            "nextId": 30

        },
        {
            "id": 30,
            "title": "Инсталляция и настройка ПО уровня L3",
            "question": "Инсталляция и настройка ПО уровня L3",
            "type": "radio",
            "order": 1001,            
            "answers": 
            [            
                { "text": "Да", "id": "3.1", "eq_id": [18], "qty": [1], "checked": false }
            ],
            "nextId": 90

        },
        {
            "id": 90,
            "title": "Количество линий",
            "question": "На каком кол-ве линии необходимо запустить маркировку?",
            "type": "radio",
            "order": 1002,            
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
    "question": "Потоков",
    "type": "radio",
    "param": "flow_cnt",
    "answers": 
    [            
        { "text": "1", "id": "100.1", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  },
        { "text": "2", "id": "100.2", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  },
        { "text": "3", "id": "100.3", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  },
        { "text": "4", "id": "100.4", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  },
        { "text": "5", "id": "100.4", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  },
        { "text": "6", "id": "100.4", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  },
        { "text": "7", "id": "100.4", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  },
        { "text": "8", "id": "100.4", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  },
        { "text": "9", "id": "100.4", "eq_id": [1], "qty": [0],  "checked": false, "comment": "Необходимость поставки определяется на этапе обследования"  }
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
        { "text": "Типография, ручн.валидация", "id": "101.1", "eq_id": [4,2], "qty": [1,1],  "checked": false , "comment": "Ручная валидация"},
        { "text": "Типография, авт.валидация", "id": "101.1", "eq_id": [34,8,12,36,40,4], "qty": [0,1,1,1,1,1],  "checked": false, "comment1": "Автоматическая валидация" },
        { "text": "Ручная наклейка этикеток", "id": "101.1", "eq_id": [4,5,6,17], "qty": [1,1,2,1],  "checked": false },
        { "text": "Термотрансферный маркиратор", "id": "101.1", "eq_id": [4,38,41,8,12,36,40], "qty": [1,1,1,1,1,1,1],  "checked": false, "comment1": "Прямое нанесение термотрансферным принтером"},
        { "text": "Автоматический принтер-аппликатор", "id": "101.2", "eq_id": [4,7,8,12,36,40], "qty": [1,1,1,1,1,1],  "checked": false },
        { "text": "Два кода- упаковка и крышка", "id": "101.3", "eq_id": [4,11,10], "qty": [1,2,1],  "checked": false  },
        { "text": "Термоструйный", "id": "101.4", "eq_id": [4,9,8,12,36,40], "qty": [1,1,1,1,1,1],  "checked": false, "comment1": "Прямое нанесение термоструйным принтером" },
        { "text": "Принтер + аппликатор", "id": "101.5", "eq_id": [4, 5, 49,8,12,36,40], "qty": [1,1,1,1,1,1,1],  "checked": false, "comment1": "Термотрансферный принтер + аппликатор" },
        { "text": "Пьезо", "id": "101.5", "eq_id": [4, 55, 56, 8,12,36,40], "qty": [1,1,1,1,1,1,1],  "checked": false, "comment1": "" }
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
        { "text": "Ручная", "id": "102.1", "eq_id": [47,5,2,46], "qty": [1,1,2,2],  "checked": false, "comment": "Ручная агрегация в короба" },
        { "text": "Автоматическая", "id": "102.2",  "eq_id": [51,54,2,39,52,53], "qty": [1,1,1,1,1,1],  "checked": false, "comment": "Автоматическая агрегация в короба" },
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
        { "text": "Ручная", "id": "103.1", "eq_id": [5,45], "qty": [1,2],  "checked": false, "comment": "Ручное нанесение на короба" },
        { "text": "Автоматическая принтер-аппл", "id": "103.2",  "eq_id": [50], "qty": [1],  "checked": false, "comment": "Автоматическое нанесение на короба" },
        { "text": "Автоматическая с принтер + аппл", "id": "103.2",  "eq_id": [37, 5], "qty": [1,1],  "checked": false, "comment": "Автоматическое нанесение на короба" },
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
},
{
    "id": -1,
    "title": "Параметры линии #",
    "question": "Работы по реализации проекта<br>Этап 1 «Монтаж и пуско-наладочные работы»",
    "type": "radio",
    "answers": 
    [            
        { "text": "Не используется", "id": "102.3", "eq_id": [42], "qty": [1], "checked": true }
    ],
    "nextId": -1 
    
},
{
    "id": -1,
    "title": "Параметры линии #",
    "question": "Работы по реализации проекта<br>Этап 2 «Запуск в эксплуатацию»",
    "type": "radio",
    "answers": 
    [            
        { "text": "Не используется", "id": "102.3", "eq_id": [43], "qty": [1], "checked": true }
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