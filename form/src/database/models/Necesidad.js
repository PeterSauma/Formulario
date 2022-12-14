module.exports = (sequelize, dataTypes) => {
    let alias = "Necesidades"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        needs_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      salud: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      economia: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      familia: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      oracion: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      adicciones: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      equilibriEomocional: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      controlEomocional: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      soledad: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      crianza: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      matrimonail: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      laboral: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      legal: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      sexual: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      otherNeeds: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "needs", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const Necesidad = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    Necesidad.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        Necesidad.hasOne(models.Miembros, {
          as: "necesidad_miembro",
          foreignKey: "needs_fk",
        })
    };
  
    return Necesidad;
  };
  