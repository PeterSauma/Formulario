module.exports = (sequelize, dataTypes) => {
    let alias = "ExperienciaCompletadas"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
    //detallo las columnas de la tabla. Definimos el modelo
    let cols = {
       churchExperiences_id: {
        type: dataTypes.INTEGER(11),  //tipo de dato del input en el front (datatype). Ecepto las PK y FK generalmente estos datos los mete el usuario y debo esperar recibir acá y en la DB lo mismo que me mandan en el input
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nuevoInicio: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      bautismo: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      paso1: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      paso2: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      paso3: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      paso4: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      vida1: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      vida2: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      vida3: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      vida4: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      seaLibre: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      fundamentos: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      celebremos: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      sdl: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      otherExperiences: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      },
      nthingExperiences: {
        type:  dataTypes.STRING(10),
        allowNull: false,
      }
    };
    
    //Le explico a sequelize como está configurada la tabla en la base de datos
    let config = {
      tableName: "church_experiences", // nombre de la tabla en  BD
      timestamps: false, //declaro que la tabla no tiene las columnas createAt y updateAt, sino explotaría sequelize
    };

    //Acá defino el modelo de la tabla en sequelize con la info que le metí en el alias, las columnas que tiene y como está configurada en la DB
    const ExperienciaCompletada = sequelize.define(alias, cols, config);

    //Defino las asociaciones/relaciones con las tablas a traves de las Forange Keys
    ExperienciaCompletada.associate = function (models) {

        //Todas las relaciones están planteadas actualente como uno a uno
        ExperienciaCompletada.hasOne(models.Madureces, {
            as: "experienciaCompletada_madurez",
            foreignKey: "servicesUsed_fk",
        })
    };
  
    return ExperienciaCompletada;
  };
  