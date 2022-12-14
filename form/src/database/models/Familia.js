module.exports = (sequelize, dataTypes) => {
    let alias = "Familias"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        family_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true, 
        allowNull: false,
        autoIncrement: true,
      },
      papa: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      mama: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      tios: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      abuelos: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      conyuge: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      hijos: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      solo: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      otherFamily: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      isChildren: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      howManyChildren: {
        type:  dataTypes.INTEGER(10),
      },
      childrenAttachment: {
        type:  dataTypes.INTEGER(10),
      },
      bossFamily_fk: {
        type:  dataTypes.INTEGER(11),
        allowNull: false,
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "family", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const Familia = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    Familia.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        Familia.hasOne(models.Miembros, {
          as: "familia_miembro",
          foreignKey: "family_fk",
        }),
        Familia.belongsTo(models.JefeFamilias, {
            as: "jefe",
            foreignKey: "bossFamily_fk",
        })
    };
  
    return Familia;
  };
  