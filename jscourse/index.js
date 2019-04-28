'use strict';

var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');
var appData={
    budjet:money,
    timeData:time,
    expenses:{
        toplivo:prompt('Введите обязательную статью расходов в этом месяце'),
        komUslugi:prompt('Во сколько обойдется?')
    },
    optionalExpenses:{},
    income:[],
    savings:false
}