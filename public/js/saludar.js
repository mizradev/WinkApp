var tiempo = new Date();
let saludos = ['Buenos Días','Buenas Tardes','Buenas Noches'];
let titulo = 'Hola';
if(tiempo.getHours() >= 0 && tiempo.getHours() <= 12 ){
    titulo = `${saludos[0]} <%= user.nombre %>`;
}else if(tiempo.getHours() >= 13 && tiempo.getHours() <= 17){
    titulo = `${saludos[1]} <%= user.nombre %>`;
}else if(tiempo.getHours() >= 18 && tiempo.getHours() <= 23){
    titulo = `${saludos[2]} <%= user.nombre %>`;
}
document.querySelector('#saludo').innerHTML = titulo;