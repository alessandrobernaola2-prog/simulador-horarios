function addCourse() {
    // 1. Obtener los valores del formulario
    const name = document.getElementById('course-name').value;
    const day = document.getElementById('day-select').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    if (!name || !startTime || !endTime) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // 2. Calcular la posición y altura
    // Convertir horas a minutos para facilitar el cálculo
    const startParts = startTime.split(':');
    const endParts = endTime.split(':');
    
    const startInMinutes = parseInt(startParts[0]) * 60 + parseInt(startParts[1]);
    const endInMinutes = parseInt(endParts[0]) * 60 + parseInt(endParts[1]);
    
    // Asumimos que el calendario empieza a las 7:00 AM (420 minutos)
    const calendarStartOffset = 7 * 60; 
    
    // 1 minuto = 1 píxel (para facilitar)
    const topPosition = startInMinutes - calendarStartOffset + 50; // +50px por el título del día
    const durationHeight = endInMinutes - startInMinutes;

    if (durationHeight <= 0 || topPosition < 50) {
        alert("Hora inválida o fuera del rango (Empieza después de las 7 AM)");
        return;
    }

    // 3. Crear el elemento visual
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-block';
    courseDiv.style.top = topPosition + 'px';
    courseDiv.style.height = durationHeight + 'px';
    
    // Agregar un color aleatorio para que se vea como en tu imagen
    const colors = ['#0F9D58', '#9C27B0', '#4285F4', '#F4B400'];
    courseDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    courseDiv.innerHTML = `<strong>${name}</strong><br>${startTime} - ${endTime}`;

    // 4. Agregarlo a la columna correspondiente
    document.getElementById(day).appendChild(courseDiv);
}
