function Light(name) {
    this.get = function () { 
    this.name = name;
    if (confirm('Включена лампочка в ' + this.name + '?')) {
        this.workTime = +prompt('Сколько часов работает лампочка?');
        this.power = +prompt('Введите мощность лампочки, Вт');      
    } else {
        this.workTime = 0;
        this.power = 0;
    };
    this.operation();
    };
 
    this.operation = function () {
        this.result = (this.power / 1000) * costEnergy * this.workTime;
        this.show();
    };
 
    this.show = function () {
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log('Лампочка в ' + this.name + ' не включена');
        } else {
            console.log('Лампочка в ' + this.name + ' проработала - ' + this.workTime + ' ч, и стоимость потраченой электроэнергии составляет = ' + this.result + ' бел. руб.');
        }
    };
};

let costEnergy = +prompt('Введите стоимость электроэнергии за 1 кВт ч бел. руб.');

let lightKitch = new Light('Кухня');
lightKitch.get();
 
let lightHallway = new Light('Коридор');
lightHallway.get();
 
let lightBathroom = new Light('Ванна');
lightBathroom.get();
  
console.log('Всего стоимость потраченной электроэнергии составляет - ' + lightKitch.result + lightHallway.result + lightBathroom.result + ' бел. руб.');

