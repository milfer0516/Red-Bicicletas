const Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = function () {
    return "id: " + this.id + "| color: " + this.color;
};

Bicicleta.allBicis = [];
Bicicleta.add = function (aBici) {
    Bicicleta.allBicis.push(aBici);
};

Bicicleta.findById = function (aBiciId) {
    var aBici = Bicicleta.allBicis.find((x) => x.id === aBiciId);

    if (aBici) {
        return aBici;
    } else {
        throw new Error(`No existe la bicicleta de id ${biciId}`);
    }
};

Bicicleta.removeById = function (aBiciId) {
    /* var bici = Bicicleta.findById(biciId); */
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id === aBiciId) {
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
    console.log(Bicicleta.allBicis[i]);
};

const bici1 = new Bicicleta("1", "Rojo", "Urbana", [4.633159, -74.194198]);
const bici2 = new Bicicleta("2", "Verde", "Urbana", [4.62643, -74.20817]);

Bicicleta.add(bici1);
Bicicleta.add(bici2);

module.exports = Bicicleta;
