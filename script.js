document.addEventListener('DOMContentLoaded', () => {
                const elementsToTrack = document.querySelectorAll('.track-mouse-3d');
                const rotationFactor = 10;
                const scaleFactor = 1.02;

                elementsToTrack.forEach(element => {
                    element.addEventListener('mousemove', (e) => {
                        const rect = element.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const normalizedX = (x - centerX) / centerX;
                        const normalizedY = (y - centerY) / centerY;

                        const rotateY = normalizedX * rotationFactor;
                        const rotateX = -normalizedY * rotationFactor;

                        element.style.transform = `perspective(1000px) scale(${scaleFactor}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        
                        element.style.setProperty('--mouse-x', `${x}px`);
                        element.style.setProperty('--mouse-y', `${y}px`);
                    });

                    element.addEventListener('mouseleave', () => {
                        element.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
                        element.style.setProperty('--mouse-x', `50%`);
                        element.style.setProperty('--mouse-y', `50%`);
                    });
                });
            });