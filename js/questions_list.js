const first_questions = `
    [
        {
            "id": 1,
            "title": "Общие компоненты",
            "question": "Какая учетная система используется?",
            "type": "radio",
            "answers": 
            [
                { "text": "1C 8.4", "id": "1.1", "qty": 1, "price": "0", "checked": false, "line_text":"1C 8.4", "comment": "Обновление УС не требуется" },
                { "text": "1C 8.0-8.2", "id": "1.2", "qty": 1, "price": "50000", "checked": false, "line_text":"Обновление до 1C 8.4", "comment": "Обновление до актуальной версии"  },
                { "text": "1C 7.7", "id": "1.3", "qty": 1, "price": "121000", "checked": false, "line_text":"Серверные и пользовательские лицензии 1С 8.4", "comment": "Необходимо для запуска ЭДО и маркировки"},
                { "text": "Другая УС", "id": "1.4", "qty": 1, "price": "0", "checked": false, "line_text":"Нестандартная интеграция", "comment": "Для оценки стоимости требуется дополнительное обследование" }
            ],
            "nextId": 2

        },
        {
            "id": 2,
            "title": "Общие компоненты",
            "question": "Требуется приобрести серверное оборудование для разворачивания системы?",
            "type": "radio",
            "answers": 
            [
                { "text": "Да", "id": "2.1", "qty": 1, "price": "420000", "checked": false, "line_text":"• Сервер Rack Mount 2U<br>• CPU 2 × Intel XeonU E5-2680 (8C 20M Cache 2.70 GHz) <br>• RAM 2 × Оперативная память 32GB DDR3 ECC REG 1866MHz <br>• RAID Контроллер RAID P420i SAS/SATA (Raid: 0,1,5,10,50) <br>• ОПЕРАТИВНАЯ ПАМЯТЬ КОНТРОЛЛЕРА 1GB+FBWC <br>• БЛОК ПИТАНИЯ 2x Блок Питания HP 460w <br>• СЕТЕВАЯ КАРТА HP NC365T 4-port Ethernet Server Adapter <br>• РЕЛЬСЫ В СТОЙКУ Рельсы для крепления в стойку 19\\" <br>• HDD 6 × Жесткий Диск Seagate 1.2TB SAS 10k 2.5\\" + салазка ", "comment": "Возможно приобретение заказчиком самостоятельно при соблюдении рекомендованных параметров оборудования" },
				{ "text": "Нет", "id": "2.2", "qty": 0, "price": "420000", "checked": false, "line_text":"Серверное оборудование", "comment": "Оборудование приобретает заказчик" }
            ],
            "nextId": 3

        },
        {
            "id": 3,
            "title": "Общие компоненты",
            "question": "Требуется ли приобрести ПО базы данных (MS SQL) для разворачивания системы?",
            "type": "radio",
            "answers": 
            [            
                { "text": "Да", "id": "3.1", "qty": 1, "price": "176000", "checked": false, "line_text":"• Сервер MS SQL Server Standard 2016 Runtime для пользователей 1С:Предприятие 8. Электронная поставка 4601546127617<br>• Клиентский доступ на 5 р.м.к MS SQL Server 2016 Runtime для 1С:Предприятие 8. Электронная поставка 4601546127631<br>• Microsoft Windows Server Standard 2019 (лицензия ), Single 16License NL Each Additional Product Core, 9EM-00717<br>• Microsoft Windows Server CAL 2019 (лицензия ), Single NL Each Additional Product User, R18-05908<br>• Лицензия Windows Server 2019 User CAL Remote Desktop Services", "comment": "" },
                { "text": "Нет", "id": "3.2", "qty": 0, "price": "176000", "checked": false, "line_text":"Сервер MS SQL Server Standard 2016 Runtime для пользователей 1С:Предприятие 8. Электронная поставка 4601546127617<br>• Клиентский доступ на 5 р.м.к MS SQL Server 2016 Runtime для 1С:Предприятие 8. Электронная поставка 4601546127631<br>• Microsoft Windows Server Standard 2019 (лицензия ), Single 16License NL Each Additional Product Core, 9EM-00717<br>• Microsoft Windows Server CAL 2019 (лицензия ), Single NL Each Additional Product User, R18-05908<br>• Лицензия Windows Server 2019 User CAL Remote Desktop Services", "comment": "Приобретается заказчиком самостоятельно"  }
            ],
            "nextId": 4 

        },
        {
            "id": 4,
            "title": "Общие компоненты",
            "question": "Требуется ли внедрение WMS (складской) системы для работы с кодами маркировки?",
            "type": "radio",
            "answers": 
            [            
                { "text": "Да, полную версию с поддержкой приемки, отгрузки и др. операций", "id": "4.1", "qty": 1, "price": "3960000", "checked": false, "line_text":"Полная версия системы управления складом (WMS)", "comment": "Поддержка приемки, отгрузки и др. операций" },
                { "text": "Да, сокращенную версию, только отгрузка", "id": "4.2", "qty": 1, "price": "462000", "checked": false, "line_text":"Облегченная версия системы управления складом (WMS)", "comment": "Поддержка только отгрузки"  },
                { "text": "Нет, используем свою", "id": "4.3", "qty": 1, "price": "0", "checked": false, "line_text":"Система управления складом", "comment": "Доработки и настрока складской системы выполняется заказчиком"  }
            ],
            "nextId": 5 

        },
        {
            "id": 5,
            "title": "Общие компоненты",
            "question": "Сколько терминалов сбора данных с поддержкой Datamatrix необходимо приобрести для работы на складе?",
            "type": "radio",
            "answers": 
            [            
                { "text": "0 - используем свои", "id": "5.0", "qty": 0, "price": "40000", "checked": false, "line_text":"", "comment": "Используются ТСД заказчика" },
                { "text": "1", "id": "5.1", "qty": 1, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" },
                { "text": "2", "id": "5.2", "qty": 2, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" },
                { "text": "3", "id": "5.3", "qty": 3, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" },
                { "text": "4", "id": "5.4", "qty": 4, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" },
                { "text": "5", "id": "5.5", "qty": 5, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" },
                { "text": "6", "id": "5.6", "qty": 6, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" },
                { "text": "7", "id": "5.7", "qty": 7, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" },
                { "text": "8", "id": "5.8", "qty": 8, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" },
                { "text": "9", "id": "5.9", "qty": 9, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" },
                { "text": "10", "id": "5.10", "qty": 10, "price": "40000", "checked": false, "line_text":"Терминал сбора данных с поддержкой Datamatrix", "comment": "" }

            ],
            "nextId": 6 

        },
        {
            "id": 6,
            "title": "Общие компоненты",
            "question": "Требуется внедрение электронного документооборота?",
            "type": "radio",
            "answers": 
            [            
                { "text": "Да", "id": "6.1", "qty": 1, "price": "63000", "checked": false, "line_text":"• Лицензия на адаптер 1С Сфера Курьер<br>• Внедрение адаптера<br>• Лицензия на адаптер ЭДО/EDI на 1 год<br>• Сопровождение, 1 год", "comment": "" },
                { "text": "Нет, уже используем", "id": "6.2", "qty": 0, "price": "0", "checked": false, "line_text":"Внедрение ЭДО не требуется", "comment": ""  }

            ],
            "nextId": 7 

        },
        {
            "id": 7,
            "title": "Общие компоненты",
            "question": "Какое количество отгрузок в год?",
            "type": "radio",
            "answers": 
            [            
                { "text": "До 1 000", "id": "7.1", "qty": 1000, "price": "7", "checked": false, "line_text":"Трафик ЭДО", "comment": "Исходящие документы за год" },
                { "text": "До 10 0000", "id": "7.2", "qty": 10000, "price": "6", "checked": false, "line_text":"Трафик ЭДО", "comment": "Исходящие документы за год" },
                { "text": "До 50 0000", "id": "7.3", "qty": 50000, "price": "5", "checked": false, "line_text":"Трафик ЭДО", "comment": "Исходящие документы за год"  },
                { "text": "До 100 0000", "id": "7.4", "qty": 100000, "price": "3", "checked": false, "line_text":"Трафик ЭДО", "comment": "Исходящие документы за год"  }
            ],
            "nextId": 8 

        },
        {
            "id": 9,
            "title": "Общие компоненты",
            "question": "На каком кол-ве линии необходимо запустить маркировку?",
            "type": "radio",
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
                { "text": "10", "id": "8.10", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" }
            ],
            "nextId": -1 

        },
        {
            "id": 8,
            "title": "Общие компоненты",
            "question": "Количество одновременно работающих линий?",
            "type": "radio",
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
                { "text": "10", "id": "8.10", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" }
            ],
            "nextId": 9 

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
    "answers": 
    [            
        { "text": "до 4000", "id": "8.1", "qty": 1, "price": "0", "checked": false, "line_text":"", "comment": "" },
        { "text": "4000 - 8000", "id": "8.2", "qty": 2, "price": "0", "checked": false, "line_text":"", "comment": "" },
        { "text": "8001 - 12000", "id": "8.3", "qty": 3, "price": "0", "checked": false, "line_text":"", "comment": "" },
        { "text": "более 12000", "id": "8.4", "qty": 4, "price": "0", "checked": false, "line_text":"", "comment": "" }
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
        { "text": "Ручная наклейка этикеток", "id": "8.1", "qty": 1, "price": "465000", "checked": false, "line_text":"• Линейная станция маркировки (390000р)<br>• Термотрансферный принтер этикеток (45000р)<br>• Ручной аппликатор 3шт*10 000р", "comment": "Ручная наклейка этикеток аппликатором" },
        { "text": "Автоматический принтер-аппликатор", "id": "8.2", "qty": 1, "price": "1596500", "checked": false, "line_text":"• Линейная станция маркировки (390000р)<br>• Автоматический принтер-аппликатор (1450000р)<br>• Система валидации нанесенного кода (146500р)", "comment": "" },
        { "text": "Термоструйное нанесение кода на боковую этикетку и технологического кода на крышку", "id": "8.3", "qty": 2, "price": "2240800", "checked": false, "line_text":"• Линейная станция маркировки (390000р)<br>• Принтер термоструйный (514300р)<br>• Система валидации нанесенного кода (146500р)<br>• Система сопоставления кодов (1190000р)", "comment": "Принтер №1 для нанесения КОДА МАРКИРОВКИ НА БОКОВУЮ ЭТИКЕТКУ<br>• Монтируется в районе участка размотки барабана с этикеткой<br>• Принтер №2 для нанесения ТЕХНОЛОГИЧЕСКОГО КОДА на крышку<br>• Монтируется в непосредственно на конвейер<br>• Система валидации нанесенного кода 2 шт" },
        { "text": "Термоструйное нанесение кода на крышку или боковую поверхность упаковки", "id": "8.4", "qty": 1, "price": "1050800", "checked": false, "line_text":"• Линейная станция маркировки (390000р)<br>• Принтер термоструйный (514300р)<br>• Система валидации нанесенного кода (146500р)", "comment": "Прямое нанесение термоструйным принтером" }
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
        { "text": "Ручная", "id": "8.1", "qty": 1, "price": "437000", "checked": false, "line_text":"• Стенд ручной групповой упаковки (365000р)<br>• Термотрансферный принтер этикеток (45000р)<br>• Сканер групповой упаковки (27000р)", "comment": "Ручная агрегация в короба" },
        { "text": "Автоматическая", "id": "8.2", "qty": 1, "price": "2254600", "checked": false, "line_text":"• Линейная станция сериализации (390000р)<br>• Система группового считывания (694600р)<br>• Принтер-аппликатор (1170000р)", "comment": "Автоматическая агрегация в короба" }
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
        { "text": "Ручная", "id": "8.1", "qty": 1, "price": "437000", "checked": false, "line_text":"• Стенд ручной групповой упаковки (365000р)<br>• Термотрансферный принтер этикеток (45000р)<br>• Сканер групповой упаковки (27000р)", "comment": "Ручная агрегация в паллеты" },
        { "text": "Автоматическая", "id": "8.2", "qty": 1, "price": "2254600", "checked": false, "line_text":"• Линейная станция сериализации (390000р)<br>• Система группового считывания (694600р)<br>• Принтер-аппликатор (1170000р)", "comment": "Автоматическая агрегация в паллеты" },
        { "text": "Не используется", "id": "8.2", "qty": 0, "price": "0", "checked": false, "line_text":"", "comment": "Агрегация в паллеты не используется" }

    ],
    "nextId": -1 

}]
`;