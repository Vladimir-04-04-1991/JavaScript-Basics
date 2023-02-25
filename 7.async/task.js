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
        this.alarmCollection.push({time, callback, id, canCall: true});
    }

    removeClock(time) {
        const lengthAlarmCollection = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
        return lengthAlarmCollection !== this.alarmCollection;
    }

    getCurrentFormattedTime() {
        let date = new Date;
        return date.getHours() + ":" + date.getMinutes();
    }

    start() {
        if(this.timerId){
            return;
        }
        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if(this.getCurrentFormattedTime() === alarm.time){ 
                    if(this.alarmCollection.canCall) {
                        this.alarmCollection.canCall = false;
                        alarm.callback();
                    }
                }
            })
        }, 1000)        
    }

    stop() {        
        clearInterval(this.timerId);
        this.timerId = null;           
    }

    resetAllCalls() {
        this.alarmCollection.forEach(() => {
            this.alarmCollection.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];        
    }
}