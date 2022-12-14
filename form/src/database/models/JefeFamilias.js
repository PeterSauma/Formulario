module.exports = (sequelize, dataTypes) => {
    let alias = "JefeFamilias"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        bossFamily_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      isBoss: {
        type:  dataTypes.STRING(50),
        allowNull: false,
      },
      nameBoss: {
        type:  dataTypes.STRING(100),
      },
      lastNameBoss: {
        type:  dataTypes.STRING(100),
      },
      coupleAttachment: {
        type:  dataTypes.STRING(50),
      },
      nameCouple: {
        type:  dataTypes.STRING(100),
      },
      lastNameCouple: {
        type:  dataTypes.STRING(100),
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "boss_family", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const JefeFamilia = sequelize.define(alias, cols, config);
  
    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    JefeFamilia.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        JefeFamilia.hasOne(models.Familias, {
          as: "jefe_familia",
          foreignKey: "bossFamily_fk",
        })
    };
  
    return JefeFamilia;
  };