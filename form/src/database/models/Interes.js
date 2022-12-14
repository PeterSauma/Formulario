module.exports = (sequelize, dataTypes) => {
    let alias = "Intereces"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        interestArea_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      relaciones: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      biblia: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      descubriProposito: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      servir: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      habitos: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      esparcimientos: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      diversion: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      comunion: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      otherInterest: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "interest_area", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const Interes = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    Interes.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        Interes.hasOne(models.Miembros, {
          as: "interes_miembro",
          foreignKey: "interestArea_fk",
        })
    };
  
    return Interes;
  };
  