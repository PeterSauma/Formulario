module.exports = (sequelize, dataTypes) => {
    let alias = "DisfrutaGrupos"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        enjoyGroup_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      compania: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      amistad: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      comida: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      oracion: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      biblia: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      otherEnjoyGroup: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "enjoy_group", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const DisfrutaGrupo = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    DisfrutaGrupo.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        DisfrutaGrupo.hasOne(models.GrupoPequenios, {
            as: "disfrutaGrupo_grupoPequenio",
            foreignKey: "enjoyGroup_fk",
        })
    };
  
    return DisfrutaGrupo;
  };
  