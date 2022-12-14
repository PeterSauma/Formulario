module.exports = (sequelize, dataTypes) => {
    let alias = "Residencias"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
      residency_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      country: {
        type:  dataTypes.STRING(100),
        allowNull: false,
      },
      state: {
        type:  dataTypes.STRING(100),
        allowNull: false,
      },
      city: {
        type:  dataTypes.STRING(100),
        allowNull: false,
      },
      location: {
        type:  dataTypes.STRING(250),
      },
      street: {
        type:  dataTypes.STRING(250),
        allowNull: false,
      },
      number: {
        type:  dataTypes.INTEGER(10),
        allowNull: false,
      },
      secondLine: {
        type:  dataTypes.STRING(300),
      },
      neighborhood: {
        type:  dataTypes.STRING(100),
      },
      neighborhoodBlock: {
        type:  dataTypes.STRING(100),
      },
      house: {
        type:  dataTypes.STRING(100),
      },
      postalCode: {
        type:  dataTypes.INTEGER(10),
        allowNull: false,
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "residency", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const Residencia = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    Residencia.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        Residencia.hasOne(models.Miembros, {
          as: "residencia_miembro",
          foreignKey: "residency_fk",
        })
    };
  
    return Residencia;
  };
  