module.exports = (sequelize, dataTypes) => {
    let alias = "Voluntarios"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        voluntary_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      area1: {
        type:  dataTypes.STRING(100),
      },
      area2: {
        type:  dataTypes.STRING(100),
      },
      area3: {
        type:  dataTypes.STRING(100),
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "voluntary", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const Voluntario = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    Voluntario.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        Voluntario.hasOne(models.Madureces, {
            as: "voluntario_madurez",
            foreignKey: "voluntary_fk",
        })
    };
  
    return Voluntario;
  };
  