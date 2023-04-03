// Задача №1. Будильник-колыбельная

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback = () => console.log("Тыгыдык-тыгыдык"), id) {
        if(!id) {
          throw new Error('Отсутствуют обязательные аргументы');
        }
        if(this.alarmCollection.some(alarm => alarm.id === id)){
            console.warn('Уже присутствует звонок на это же время');
            return;
        }
        this.alarmCollection.push({time, callback, id});
    }

    removeClock(id) {
        const lengthAlarmCollection = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
        return lengthAlarmCollection !== this.alarmCollection;
    }

    getCurrentFormattedTime() {
        let date = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
        return date;
    }

    start() {
        if(this.timerId){
            return;
        }
        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if(this.getCurrentFormattedTime() === alarm.time){ 
                    alarm.callback();                    
                }
            })
        }, 1000)        
    }

    stop() {        
        clearInterval(this.timerId);
        this.timerId = null;           
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];        
    }
}