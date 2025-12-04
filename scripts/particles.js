/**
 * Neural Network Particles Animation
 * Creates a canvas with connecting particles to simulate a neural network
 */

export class ParticleNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resizeTimeout = null;

        // Configuration
        this.config = {
            particleColor: 'rgba(46, 74, 125, 0.5)', // Primary color with opacity
            lineColor: 'rgba(74, 144, 226, 0.2)',    // Accent color with opacity
            particleAmount: 60,
            defaultSpeed: 0.5,
            variantSpeed: 1,
            defaultRadius: 2,
            variantRadius: 2,
            linkRadius: 150,
        };

        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.resize();
                this.createParticles();
            }, 200);
        });

        // Update colors based on theme
        this.updateColors();

        // Listen for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    this.updateColors();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
    }

    updateColors() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            this.config.particleColor = 'rgba(74, 144, 226, 0.5)'; // Lighter blue for dark mode
            this.config.lineColor = 'rgba(74, 144, 226, 0.15)';
        } else {
            this.config.particleColor = 'rgba(46, 74, 125, 0.3)'; // Darker blue for light mode
            this.config.lineColor = 'rgba(46, 74, 125, 0.1)';
        }
    }

    resize() {
        const parent = this.canvas.parentElement;
        this.canvas.width = parent.offsetWidth;
        this.canvas.height = parent.offsetHeight;
    }

    createParticles() {
        this.particles = [];
        const { width, height } = this.canvas;
        const { particleAmount } = this.config;

        // Adjust particle amount based on screen size
        const count = width < 768 ? particleAmount / 2 : particleAmount;

        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(width, height, this.config));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
            this.particles[i].draw(this.ctx);
            this.linkParticles(this.particles[i], this.particles);
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    linkParticles(particle, particles) {
        for (let i = 0; i < particles.length; i++) {
            const distance = particle.distanceTo(particles[i]);

            if (distance < this.config.linkRadius) {
                const opacity = 1 - (distance / this.config.linkRadius);
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.config.lineColor.replace(')', `, ${opacity})`).replace('rgba', 'rgba').replace(', 0.15)', `, ${opacity * 0.15})`).replace(', 0.1)', `, ${opacity * 0.1})`);
                // Simple hack to use dynamic opacity with configured color string
                // Better approach: parse rgba or use CSS variables if possible in canvas
                // For now, let's just use the base color and modify globalAlpha

                this.ctx.globalAlpha = opacity;
                this.ctx.lineWidth = 1;
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(particles[i].x, particles[i].y);
                this.ctx.stroke();
                this.ctx.globalAlpha = 1;
            }
        }
    }
}

class Particle {
    constructor(w, h, config) {
        this.w = w;
        this.h = h;
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * config.defaultSpeed;
        this.vy = (Math.random() - 0.5) * config.defaultSpeed;
        this.size = Math.random() * config.variantRadius + config.defaultRadius;
        this.color = config.particleColor;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > this.w) this.x = 0;
        else if (this.x < 0) this.x = this.w;

        if (this.y > this.h) this.y = 0;
        else if (this.y < 0) this.y = this.h;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    distanceTo(p) {
        const dx = this.x - p.x;
        const dy = this.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
