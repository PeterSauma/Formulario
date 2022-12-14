module.exports = (sequelize, dataTypes) => {
    let alias = "GrupoPequenios"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
        smallGroup_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nameGuide: {
        type:  dataTypes.STRING(100),
      },
      nameGroup: {
        type:  dataTypes.STRING(100),
      },
      enjoyGroup_fk: {
        type: dataTypes.INTEGER(11),
        allowNull: false,
      } 
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "small_group", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const GrupoPequenio = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    GrupoPequenio.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        GrupoPequenio.hasOne(models.Madureces, {
          as: "grupoPequenio_madurez",
          foreignKey: "smallGroup_fk",
        }),
        
        GrupoPequenio.belongsTo(models.DisfrutaGrupos, {
            as: "disfrutaGrupo",
            foreignKey: "enjoyGroup_fk",
        })
    };
  
    return GrupoPequenio;
  };
  