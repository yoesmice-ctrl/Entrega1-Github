+document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portafolio de Yojhan Vega inicializado.');

    // 1. EFECTO MÁQUINA DE ESCRIBIR (Typing Effect)
    const subtitleElement = document.querySelector('.subtitle');
    
    if (subtitleElement) {
        const textToType = "Desarrollador Web Frontend & Especialista en Automatización";
        subtitleElement.textContent = ""; // Limpia el texto inicial
        let index = 0;

        function typeEffect() {
            if (index < textToType.length) {
                subtitleElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeEffect, 45); // Velocidad entre letras (ms)
            }
        }

        // Iniciar efecto de tipeo
        typeEffect();
    }

    // 2. MANEJO INTERACTIVO DEL FORMULARIO
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombreInput = document.getElementById('nombre');
            const nombre = nombreInput ? nombreInput.value.trim() : 'Usuario';

            if (feedback) {
                feedback.textContent = `¡Gracias por tu mensaje, ${nombre}! Ha sido registrado con éxito.`;
                feedback.className = 'feedback-message success';

                contactForm.reset();

                setTimeout(() => {
                    feedback.className = 'feedback-message';
                }, 4000);
            }
        });
    }
});