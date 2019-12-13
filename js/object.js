class GObject {
    constructor(type, density, elasticity, x, y, velX, velY, accX, width, height, mass, colour, affectedByGravity, affectedByFriction, affectedByDrag) {
        this.type = type.toUpperCase();
        this.gconst = -9.8;
        this.airD = 1.225 * 0.001;
        this.x = x;
        this.y = y;
        this.density = density;
        this.elasticity = elasticity;
        this.width = width;
        this.height = height;
        this.mass = mass;
        this.volume = this.mass * this.density;
        this.affectedByGravity = affectedByGravity || true;
        this.affectedByFriction = affectedByFriction || true;
        this.affectedByDrag = affectedByDrag || true;
        this.colour = colour || "black";
        this.velx = velX;
        this.vely = velY;
        this.accX = accX;
        this.accY = this.gconst;
        this.cd = 1;
        this.velxy = Math.sqrt(this.velx * this.velx + this.vely * this.vely);

        this.object = document.createElement('div');
        this.object.style.height = this.height + "px";
        this.object.style.width = this.width + "px";
        this.object.style.position = "absolute";
        this.object.style.bottom = this.y + "px";
        this.object.style.left = this.x + "px";
        this.object.style.backgroundColor = this.colour;

        if (this.type === 'BALL' || this.type === 'SPHERE' || this.type === 'CIRCLE') {
            this.object.id = "CIRCLE";
            this.radius = this.width / 2;
            this.cd = 0.47;
            this.surfacearea = (4 / 3) * Math.PI * Math.pow(this.radius, 3);
            this.areaAffectedByDrag = (this.affectedByDrag) ? this.surfacearea / 2 : 0;
        } else if (this.type === 'RECTANGLE' || this.type === 'SQUARE' || this.type === 'CUBE' || this.type === 'CUBOID') {
            this.object.id = "RECTANGLE";
            this.thickness = this.volume / this.width * this.height;
            this.surfacearea = 2 * (this.width * this.height + this.height * this.thickness + this.width * this.thickness);
            this.areaAffectedByDrag = (this.affectedByDrag) ? this.surfacearea / 2 : 0;
            this.cd = 2.1;
        } else if (this.type === 'CUSTOM' || this.type === 'POLYGON') {
            this.object.id = "CUSTOM";
        } else {
            console.log("undefined object type");
        }

        document.getElementById('root').append(this.object);

        this.dragXf = (1 / 2) * this.airD * this.velx * this.velx * this.cd * this.areaAffectedByDrag;
        this.dragYf = (1 / 2) * this.airD * this.vely * this.vely * this.cd * this.areaAffectedByDrag;

        this.dragXr = (this.dragXf) / this.mass;
        this.dragYr = (this.dragYf) / this.mass;

        if (this.accX == 0) this.dragXr = 0;
        if (this.accY == 0) this.dragYr = 0;
    }

    update() {
        this.velx += this.accX - this.dragXr;
        this.vely += this.accY - this.dragYr;
        if (this.y <= 0 && this.vely <= 0) {
            this.vely = 0;
            this.y = 0;
        }
        this.y += this.vely;
        this.x += this.velx;
    }

    draw() {
        this.object.style.bottom = this.y + "px";
        this.object.style.left = this.x + "px";
    }

    hitGround() {
        if (this.y <= 0) {
            return true;
        } else {
            return false;
        }
    }

    hitWall() {
        if (this.x <= 0 || this.x + this.width > window.innerWidth) {
            return true;
        } else {
            return false;
        }
    }
}