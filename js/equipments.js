const equipments_list = `
    [
        {
            "id": 1,
            "price": "0", 
            "line_text":"", 
            "line_text_old":"WWWКомплект конвейерного оборудования, в составе:<br>• делитель тары (дисковый или шнековый);<br>• участок стабилизации движения;<br>• отбраковщик (сталкиватель, пушер);", 
            "comment": ""
         },
         {
            "id": 2,
            "price": "48300", 
            "line_text":"ТСД Honeywell ScanPal EDA51-1-B623SOGRK<br>And8 with GMS,WWAN,802.11 a/b/g/n/ac, N3601 engine, 1.8 GHz 8 core, 2GB/16GB Memory, 13MP, Bluetooth, NFC, 3G, 4,000 mAh, USB Charger<br>База зарядная для терминала EDA51", 
            "comment": ""
        },
        {
           "id": 3,
           "price": "0", 
           "line_text":"WWWТерминал сбора данных с поддержкой Datamatrix", 
           "comment": "Используются ТСД заказчика"
        },
        {
           "id": 4,
           "price": "650000", 
           "line_text":"Станция управления операциями TraceWay М2<br>• Панельный промышленный ПК 12\\"<br>• Программируемый логический контроллер Siemens<br>• Блок питания 24V 480 W Phoenix Contact<br>• Маршрутизатор MOXA<br>• Светозвуковая сигнализация Rittal<br>• Вентиляция встраиваемая Rittal<br>• Пульт управления аппаратным комплексом из нержавеющей стали", 
           "comment": ""
        },
        {
           "id": 5,
           "price": "120000", 
           "line_text":"Термотрансферный принтер TSC MH340Р", 
           "comment": ""
        },
        {
           "id": 6,
           "price": "10000", 
           "line_text":"Ручной аппликатор", 
           "comment": "Ручная наклейка этикеток аппликатором"
        },
        {
           "id": 7,
           "price": "1170000", 
           "line_text":"Принтер-аппликатор Videojet 9550, TAMP 300", 
           "param": "flow_cnt",
           "comment": ""
        },
        {
           "id": 8,
           "price": "160000", 
           "line_text":"SMART камера для верификации 2D кодов DMR-260QI-0120 + кабели + крышка линзы", 
           "param": "flow_cnt",
           "comment": ""
        },
        {
           "id": 9,
           "price": "514300", 
           "line_text":"Принтер термоструйный Wolke m610oem, в  составе:<br>• Контроллер<br>• Печатающая головка синяя<br>• Пластина для 1 головки<br>• Фотодатчик в комплекте, К1<br>• Кабель печатающей головки 90 град разъем,3 м<br>• Кабель ввода/вывода 6м<br>• Комплект синхронизатора<br>• Измерительное колесо<br>• Кабель синхронизатора<br>• Держатель для синей печатающей головки 170 мм", 
           "param": "flow_cnt",
           "comment": ""
        },
        {
           "id": 10,
           "price": "1190000", 
           "line_text":"Система сопоставления кодов Balluff, в составе:<br>• BVS002H - камера 1.6мпикс для поштучного считывания<br>• BAM02FC - объектив 12мм для камеры поштучного считывания<br>• BAE00NT - подсветка для камеры поштучного считывания<br> • кабели, монтажные аксессуары;<br> • светофор трехцветный;<br> • делитель тары;<br> • отбраковщик (сталкиватель, пушер)", 
           "param": "flow_cnt",
           "comment": "Система состоит из 7  камер. Шесть камер считывают код маркировки с боковой этикетки, седьмая камера считывает код с крышки.<br>Перед доступом в зону контроля бутылки разделяются. Бутылки с не считанными кодами отбраковываются"
        },
        {
           "id": 11,
           "price": "514300", 
           "line_text":"Принтер термоструйный Wolke m610oem, в  составе:<br>• Контроллер<br>• Печатающая головка синяя<br>• Пластина для 1 головки<br>• Фотодатчик в комплекте, К1<br>• Кабель печатающей головки 90 град разъем,3 м<br>• Кабель ввода/вывода 6м<br>• Комплект синхронизатора<br>• Измерительное колесо<br>• Кабель синхронизатора<br>• Держатель для синей печатающей головки 170 мм", 
           "param": "flow_cnt",
           "comment": "Принтер №1 для нанесения КОДА МАРКИРОВКИ НА БОКОВУЮ ЭТИКЕТКУ:<br>• Монтируется в районе участка размотки барабана с этикеткой<br>Принтер №2 для нанесения ТЕХНОЛОГИЧЕСКОГО КОДА на крышку:<br>• Монтируется в непосредственно на конвейер"
        },
        {
           "id": 12,
           "price": "24000", 
           "line_text":"Оптический датчик на фотометку", 
           "param": "flow_cnt",
           "comment": ""
        },
        {
           "id": 13,
           "price": "390000", 
           "line_text":"Линейная станция сериализации, в составе:<br>• панельный компьютер<br>• ПО Сериализации \\"КМ А\\"<br>• шкаф монтажный<br>• контроллеры управления<br>• датчики объектов<br>• источник бесперебойного питания<br>", 
           "comment": ""
        },
        {
           "id": 14,
           "price": "694600", 
           "line_text": "Система группового считывания Balluff Matrix Vision, в составе:<br>• вычислительный блок Balluuff BAE0103<br>• BVS002K - камера 3.2 МПикс для группового чтения упаковки размером до 235х180х160мм (6 бутылок)<br>• BAM0364 - объектив 8мм для камеры группового чтения<br>• BAE00NY (2шт) - подсветка для камеры группового считывания<br>• кабели, крепежные конструктивы", 
           "param": "_NO_flow_cnt",
           "comment": ""
        },
        {
           "id": 15,
           "price": "1170000", 
           "line_text": "Принтер-аппликатор VJ9550, TAMP 300, <br>• Tamp Pad 110mm x 150mm 300T (4.33\\" x 5.90\\");<br>• Языковой набор русский, 9550;<br>• Датчик продукта;<br>• Устройство внешней синхронизац;<br>• Флеш-карта с записью ПО CLARISOFT", 
           "param": "flow_cnt",
           "comment": ""
        },
        {
           "id": 16,
           "price": "365000", 
           "line_text": "Стенд ручной групповой/транспортной упаковки", 
           "comment": ""
        },
        {
           "id": 17,
           "price": "27000", 
           "line_text": "Ручной сканер потребительской/групповой/транспортной упаковки", 
           "comment": ""
        },
        {
           "id": 18,
           "price": "250000", 
           "line_text": "Настройка ролевой модели в соответствии с URS и FS<br>Настройка карты бизнес-процессов<br>Заполнение справочников", 
           "comment": ""
        },
        {
           "id": 19,
           "price": "1800000", 
           "line_text": "Программное обеспечение уровня L3 \\"iTrack\\", установка на сервере заказчика<br>Локальное предприятие на территории РФ, производственные склады и цеха находятся по одному адресу (один GLN))<br>Стоимость бессрочной лицензии", 
           "comment": ""
        },
        {
           "id": 20,
           "price": "180000", 
           "line_text": "Ежегодный платеж за обновление программного обеспечение уровня L3 \\"iTrack\\", рублей в год",
           "comment": ""
        },
        {
           "id": 21,
           "price": "2500", 
           "line_text": "WWWОбследование объекта автоматизации",
           "param": "job_qty",
           "comment": "Сбор исходных данных, формирование ТЗ"
        },
        {
           "id": 22,
           "price": "2500", 
           "line_text": "WWWПроектирование системы по результатам обследования", 
           "param": "job_qty",
           "comment": "Разработка проектно-сметной документации"
        },
        {
           "id": 23,
           "price": "2500", 
           "line_text": "WWWДоработка типовых компонент 1C для интеграции с сервером маркировки (средняя оценка)",
           "param": "job_qty",
           "comment": "Интеграция системы с ПО Заказчика и системами складского учета  (подлежит уточнению). Приведено среднее значение"
        },
        {
           "id": 24,
           "price": "2500", 
           "line_text": "WWWИнсталляция оборудования и ПО на месте эксплуатации", 
           "param": "job_qty",
           "comment": ""
        },
        {
           "id": 25,
           "price": "2500", 
           "line_text": "WWWОбучение персонала", 
           "param": "job_qty",
           "comment": ""
        },
        {
           "id": 26,
           "price": "13000", 
           "line_text": "WWW1С:Бухгалтерия 8 ПРОФ", 
           "comment": "Приобретение лицензионных компонентов в этом разделе определяется на этапе обследования. Возможно приобретение Заказчиком самостоятельно"
        },
        {
           "id": 27,
           "price": "21600", 
           "line_text": "WWW1С:Предприятие 8 ПРОФ. Клиентская лицензия на 5 рабочих мест. Электронная поставка 4601546117588", 
           "comment": ""
        },
        {
           "id": 28,
           "price": "86400", 
           "line_text": "WWW1С:Предприятие 8.3. Лицензия на сервер (x86-64) 4601546106780", 
           "comment": ""
        },
        {
           "id": 29,
           "price": "18654", 
           "line_text": "WWWСервер MS SQL Server Standard 2016 Runtime для пользователей 1С:Предприятие 8. Электронная поставка 4601546127617", 
           "comment": ""
         },
         {
           "id": 30,
           "price": "47212", 
           "line_text": "WWWКлиентский доступ на 5 р.м.к MS SQL Server 2016 Runtime для 1С:Предприятие 8. Электронная поставка 4601546127631", 
           "comment": ""
         },
         {
           "id": 31,
           "price": "60721", 
           "line_text": "WWWMicrosoft Windows Server Standard 2019 (лицензия ), Single 16License NL Each Additional Product Core, 9EM-00717", 
           "comment": ""
         },
         {
           "id": 32,
           "price": "2620", 
           "line_text": "WWWMicrosoft Windows Server CAL 2019 (лицензия ), Single NL Each Additional Product User, R18-05908", 
           "comment": ""
         },
         {
           "id": 33,
           "price": "7232", 
           "line_text": "WWWЛицензия Windows Server 2019 User CAL Remote Desktop Services", 
           "comment": ""
         },
         {
           "id": 34,
           "price": "0", 
           "line_text": "", 
           "comment": "Типографский способ нанесения"
         },
         {
           "id": 35,
           "price": "950000", 
           "line_text": "Термотрансферный маркиратор VJ DF 6320 53мм",
           "param": "flow_cnt",
           "comment": ""
         },
         {
            "id": 36,
            "price": "340000", 
            "line_text": "Система отбраковки (пневмоцилиндр с направляющими)",
            "param": "flow_cnt",
            "comment": ""
         },
         {
            "id": 37,
            "price": "550000", 
            "line_text": "Автоматический аппликатор INTREX 100", 
            "param": "_NO_flow_cnt",
            "comment": ""
          },
          {
            "id": 38,
            "price": "540000", 
            "line_text": "Принтер термотрасферный для нанесения Data Matrix кода VideoJet 6330",
            "param": "flow_cnt",
            "comment": ""
          },
          {
            "id": 39,
            "price": "45000", 
            "line_text": "Набор фурнитуры, соединительных элементов и креплений",
            "param": "",
            "comment": ""
          },
          {
            "id": 40,
            "price": "300000", 
            "line_text": "Лицензия на уровень L2 «1 EN. TTS Serialization Manager»",
            "param": "",
            "comment": ""
          },
          {
            "id": 41,
            "price": "125000", 
            "line_text": "Аксессуары для интеграции в непрерывную линию (Ось для установки печатающего ролика, печатающий ролик 600 мм, энкодер с креплением)",
            "param": "",
            "comment": ""
          },
          {
            "id": 42,
            "price": "311800", 
            "line_text": "Подготовительные работы<br>Монтаж и пусконаладочные работы по оборудованию<br>Инсталляция ПО уровня L2<br>Отладка и тестирование оборудования",
            "param": "",
            "comment": "Работы по реализации проекта<br>Этап 1 «Монтаж и пуско-наладочные работы»"
          },
          {
            "id": 43,
            "price": "260000", 
            "line_text": "Обучение по оборудованию для сериализации и автоматической агрегации на счетной логике TraceWay<br>Запуск программно-аппаратного комплекса Линии в промышленную эксплуатацию",
            "param": "",
            "comment": "Работы по реализации проекта<br>Этап 2 «Запуск в эксплуатацию»"
          },
          {
            "id": 44,
            "price": "1600000", 
            "line_text": "Перекатной блок из нержавеющей стали и ИБП;<br>Панель управленния для контроля логистических операций;<br>Термотрансферный принтер с внутренним смотчиком для сериализации 300 dpi - TSC MH340P;<br>Терминал сбора данных Honeywell EDA51 и зараядная станция;<br>Программное обеспечение ITrack \\"SAW Manager\\" уровня L2;",
            "param": "",
            "comment": "Ручная агрегация"
          },
          {
            "id": 45,
            "price": "12000", 
            "line_text": "Ручной аппликатор",
            "param": "",
            "comment": "Ручная агрегация"
          },
          {
            "id": 46,
            "price": "12000", 
            "line_text": "Комплект для печати (этикетка 43х25 + лента термо-трансферная)",
            "param": "",
            "comment": "Ручная агрегация"
          },
          {
            "id": 47,
            "price": "12000", 
            "line_text": "Роутер MikroTik RB2011UiAS-2HnD-IN",
            "param": "",
            "comment": ""
          },
         {
            "id": 48,
            "price": "12000", 
            "line_text": "База зарядная для терминала EDA51",
            "param": "",
            "comment": ""
         },
         {
            "id": 49,
            "price": "500000", 
            "line_text": "Автоматический аппликатор Alpha Compact", 
            "param": "flow_cnt",
            "comment": ""
         },
         {
            "id": 50,
            "price": "1033000", 
            "line_text": "Принтер-аппаликатор:<br>• Аппликатор Weber Alpha Compact<br>• Принтер термотрансферный VideoJet 6330<br>• Стойка с регулировками в 2х плоскостях<br>• HMI панель для настройки аппаликатора", 
            "param": "flow_cnt",
            "comment": ""
         },
         {
            "id": 51,
            "price": "950000", 
            "line_text": "Станция управления операциями TraceWay М1<br>• Сенсорная емкостная панель 17\\" (2 шт.)<br>• Программируемый логический контроллер Siemens S7-1200<br>• Блок питания 24V 480 W Phoenix Contact<br>• Маршрутизатор MOXA<br>• Светозвуковая сигнализация Rittal<br>• Промышленный ПК (2 шт.)<br>• Пульт управления аппаратным комплексом из нержевеющей стали", 
            "param": "flow_cnt",
            "comment": ""
         },
         {
            "id": 52,
            "price": "168000", 
            "line_text": "Видеокамера машинного зрения Basler acA4096-11gm с кабелем питания", 
            "param": "flow_cnt",
            "comment": ""
         },
         {
            "id": 53,
            "price": "78000", 
            "line_text": "Объектив Computar V1228-MPY", 
            "param": "flow_cnt",
            "comment": ""
         },
         {
           "id": 54,
           "price": "300000", 
           "line_text": "Лицензия на уровень L2 «1 EN. TTS  Aggregation Manager»",
           "param": "",
           "comment": ""
         },
         {
           "id": 55,
           "price": "816000", 
           "line_text": "Головка печатающая 8A Single Printhead<br>Кабель печатающей головки Printhead Cable 14pin 3.0m<br>Контроллер принтера Single Printer Controller<br>Система непрерывной подачи чернил Continuous Ink Supply System<br>Головка УФ 500W UV head<br>Кабель головки УФ DB9W4 3M for 500W UV head Cable<br>Контроллер УФ одноканальный 1000W single channel UV-controller<br>Картридж чернильный резервный стандартный Standard Backup ink Cartridge<br>Энкодер 300DPI Encoder<br>Фотоэлемент фиксированный Fixed photocell",
           "param": "",
           "comment": ""
         },
         {
           "id": 56,
           "price": "900000", 
           "line_text": "Установка сериализации, система прижимных блоков - S7.1-H1",
           "param": "",
           "comment": ""
         }
         

    ]
`;