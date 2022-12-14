module.exports = (sequelize, dataTypes) => {
    let alias = "RedSociales"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        socialMedia_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      youVersion: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      faceboock: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      instagram: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      youTube: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      tikTok: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      spotify: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      whatsApp: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      telegram: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      twitter: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      twich: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      discord: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      pinterest: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      linkedIn: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      slack: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      otherSocial: {
        type: dataTypes.STRING(10),
        allowNull: false,
      },
      nthingSocial: {
        type: dataTypes.STRING(10),
        allowNull: false,
      }      
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "socialmedia", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const RedSocial = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    RedSocial.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        RedSocial.hasOne(models.Miembros, {
          as: "redSocial_miembro",
          foreignKey: "socialMedia_fk",
        })
    };
  
    return RedSocial;
  };
  