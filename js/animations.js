// Animazioni per la lettera speciale

document.addEventListener('DOMContentLoaded', function() {
    const letterClosed = document.getElementById('letterClosed');
    const envelope = document.querySelector('.envelope');
    const letterContent = document.getElementById('letterContent');
    const fioriContainer = document.getElementById('fiori-container');
    let isOpened = false;
    
    // Gestione click sulla lettera
    letterClosed.addEventListener('click', function() {
        if (!isOpened) {
            openLetter();
        }
    });
    
    // Funzione per aprire la lettera
    function openLetter() {
        isOpened = true;
        
        // Rimuovi l'animazione shake
        letterClosed.style.animation = 'none';
        
        // Aggiungi classe per aprire la busta
        envelope.classList.add('opened');
        
        // Mostra il contenuto della lettera dopo l'apertura
        setTimeout(() => {
            letterContent.classList.add('opened');            
            fioriContainer.classList.add('show');
            showLetterContent();
        }, 800);
        
        // Ingrandisci gradualmente la busta dopo l'apertura
        setTimeout(() => {
            const envelopeWrapper = document.querySelector('.envelope-wrapper');
            const letterContainer = document.querySelector('.letter-container');
            envelopeWrapper.classList.add('opened');
            letterContainer.classList.add('opened');
        }, 1200);
    }
    
    // Funzione per mostrare il contenuto della lettera
    function showLetterContent() {
        
        // Mostra le foto che ruotano dopo un po'
        setTimeout(() => {
            showRotatingPhotos();
        }, 2000);
    }
    
    // Funzione per mostrare le foto che ruotano
    function showRotatingPhotos() {
        const rotatingPhotos = document.getElementById('rotatingPhotos');
        if (rotatingPhotos) {
            rotatingPhotos.classList.add('show');
            
            // Esci le foto una alla volta con delay di 250ms
            const photoItems = rotatingPhotos.querySelectorAll('.photo-item');
            photoItems.forEach((photo, index) => {
                setTimeout(() => {
                    photo.classList.add('exit');
                    
                    // Dopo l'animazione di uscita, inizia la rotazione
                    setTimeout(() => {
                        photo.classList.add('rotate');
                    }, 1000);
                }, index * 250);
            });
        }
    }
    
    // Effetto hover migliorato
    letterClosed.addEventListener('mouseenter', function() {
        if (!isOpened) {
            envelope.style.transform = 'translateY(-5px) scale(1.02)';
        }
    });
    
    letterClosed.addEventListener('mouseleave', function() {
        if (!isOpened) {
            envelope.style.transform = 'translateY(0) scale(1)';
        }
    });
});