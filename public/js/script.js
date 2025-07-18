document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const trails = [];
    const maxTrails = 100; // Número máximo de rastros

    document.addEventListener('mousemove', (e) => {
        // Atualiza a posição do cursor
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        // Cria um novo elemento de rastro
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        document.body.appendChild(trail);
        trail.style.opacity = '1';

        // Adiciona ao array de rastros
        trails.push(trail);

        // Remove rastros antigos
        if (trails.length > maxTrails) {
            const oldTrail = trails.shift();
            oldTrail.style.opacity = '0';
            setTimeout(() => oldTrail.remove(), 500); // Remove após a transição
        }
    });
});
