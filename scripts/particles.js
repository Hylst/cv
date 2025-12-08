/**
 * =============================================================================
 * PARTICLES.JS - Le Generateur de Poussiere d'Etoiles
 * =============================================================================
 * Cree une animation de particules connectees sur un canvas.
 * C'est un peu comme observer les constellations, mais en plus interactif.
 * Ou comme les synapses d'un cerveau numerique. Au choix.
 * 
 * Auteur: Geoffroy Streit (dev qui regarde trop de videos sur la physique quantique)
 * =============================================================================
 */

export class ParticleNetwork {
    /**
     * Constructeur - Le Ritual d'Invocation
     * @param {string} canvasId - L'ID du canvas ou materialiser la magie
     */
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return; // Pas de canvas, pas de chocolat

        this.ctx = this.canvas.getContext('2d');
        this.particles = []; // Notre armee de particules
        this.resizeTimeout = null;

        // Configuration du systeme - les constantes cosmiques
        this.config = {
            particleColor: 'rgba(46, 74, 125, 0.5)', // Bleu profond comme l'espace
            lineColor: 'rgba(74, 144, 226, 0.2)',    // Liens comme des fils d'Ariane
            particleAmount: 60,                       // Population de notre galaxie
            defaultSpeed: 0.5,                        // Vitesse de croisiere subluminique
            variantSpeed: 1,                          // Variation aleatoire
            defaultRadius: 2,                         // Taille de base des etoiles
            variantRadius: 2,                         // Variation de taille
            linkRadius: 150,                          // Distance max pour la connexion
        };

        this.init();
    }

    /**
     * init - Demarrage du Reacteur a Fusion
     * Initialise tout le bazar et lance l'animation
     */
    init() {
        this.resize();
        this.createParticles();
        this.animate();

        // Listener de redimensionnement - on s'adapte comme un Mystique
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.resize();
                this.createParticles();
            }, 200);
        });

        // Mise a jour des couleurs selon le theme
        this.updateColors();

        // Observateur de mutations - on surveille les changements de theme
        // Comme un Beholder mais en moins flippant
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    this.updateColors();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
    }

    /**
     * updateColors - Changement de Palette
     * Adapte les couleurs au theme clair/sombre
     */
    updateColors() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            // Mode sombre: on illumine comme des lucioles dans la nuit
            this.config.particleColor = 'rgba(74, 144, 226, 0.5)';
            this.config.lineColor = 'rgba(74, 144, 226, 0.15)';
        } else {
            // Mode clair: on reste discret comme un ninja en plein jour
            this.config.particleColor = 'rgba(46, 74, 125, 0.3)';
            this.config.lineColor = 'rgba(46, 74, 125, 0.1)';
        }
    }

    /**
     * resize - Ajustement Dimensionnel
     * Redimensionne le canvas a la taille de son conteneur
     */
    resize() {
        const parent = this.canvas.parentElement;
        this.canvas.width = parent.offsetWidth;
        this.canvas.height = parent.offsetHeight;
    }

    /**
     * createParticles - La Genese
     * Cree notre population de particules. C'est le Big Bang local.
     */
    createParticles() {
        this.particles = [];
        const { width, height } = this.canvas;
        const { particleAmount } = this.config;

        // Sur mobile, on reduit la population (performance oblige)
        // Les telephones sont pas encore des ordinateurs quantiques
        const count = width < 768 ? particleAmount / 2 : particleAmount;

        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(width, height, this.config));
        }
    }

    /**
     * animate - La Boucle Eternelle
     * Comme Sisyphe avec son rocher, mais en plus joli
     */
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // On update et dessine chaque particule
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
            this.particles[i].draw(this.ctx);
            this.linkParticles(this.particles[i], this.particles);
        }

        // On rappelle la fonction - c'est comme un sort de Boucle Temporelle
        requestAnimationFrame(this.animate.bind(this));
    }

    /**
     * linkParticles - Le Tisseur de Liens
     * Connecte les particules proches avec des lignes
     * Comme les Nornes tissant le destin, mais en plus geek
     */
    linkParticles(particle, particles) {
        for (let i = 0; i < particles.length; i++) {
            const distance = particle.distanceTo(particles[i]);

            if (distance < this.config.linkRadius) {
                // Plus c'est proche, plus c'est opaque
                const opacity = 1 - (distance / this.config.linkRadius);

                this.ctx.beginPath();
                this.ctx.strokeStyle = this.config.lineColor;
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

/**
 * =============================================================================
 * CLASSE PARTICLE - L'Atome de notre Univers
 * =============================================================================
 * Represente une seule particule. Minuscule mais essentielle.
 * Comme un electron, mais visible. Ou comme Ant-Man.
 */
class Particle {
    constructor(w, h, config) {
        this.w = w;     // Largeur de l'univers
        this.h = h;     // Hauteur de l'univers
        this.x = Math.random() * w;  // Position X aleatoire
        this.y = Math.random() * h;  // Position Y - on spawn au hasard
        this.vx = (Math.random() - 0.5) * config.defaultSpeed;  // Velocite X
        this.vy = (Math.random() - 0.5) * config.defaultSpeed;  // Velocite Y
        this.size = Math.random() * config.variantRadius + config.defaultRadius;
        this.color = config.particleColor;
    }

    /**
     * update - Le Mouvement Perpetuel
     * Met a jour la position. Teleportation aux bords (effet Pac-Man)
     */
    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Effet wrap-around - on sort a droite, on rentre a gauche
        if (this.x > this.w) this.x = 0;
        else if (this.x < 0) this.x = this.w;

        if (this.y > this.h) this.y = 0;
        else if (this.y < 0) this.y = this.h;
    }

    /**
     * draw - La Materialisation
     * Dessine la particule sur le canvas. Simple mais efficace.
     */
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    /**
     * distanceTo - Le Theoreme de Pythagore
     * Calcule la distance vers une autre particule
     * Merci Pythagore, tu geres meme 2500 ans apres
     */
    distanceTo(p) {
        const dx = this.x - p.x;
        const dy = this.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
